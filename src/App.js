import React, { useState } from 'react';

import './assets/tailwind.css';

import OCLnmr from './components/OCLnmr';
import OCL from 'openchemlib';
import {
  initOCL,
  getDiastereotopicAtomIDsAndH,
  getAtomsInfo,
  addDiastereotopicMissingChirality,
} from 'openchemlib-utils';
initOCL(OCL);

const smiles = 'CC(Cl)CCCCC';
const molecule = OCL.Molecule.fromSmiles(smiles);
addDiastereotopicMissingChirality(molecule);
// molecule.addImplicitHydrogens();

function App() {
  const [molfile, setMolfile] = useState(molecule.toMolfileV3());
  const [atomHighlight, setAtomHighlight] = useState([]);

  const diaIDs = getDiastereotopicAtomIDsAndH(molecule);
  const diaIDsIndex = {};
  for (let i = 0; i < diaIDs.length; i++) {
    let diaID = diaIDs[i];
    if (!diaIDsIndex[diaID.oclID]) diaIDsIndex[diaID.oclID] = [];
    diaIDsIndex[diaID.oclID].push(i);
  }

  const options = {
    molfile,
    atomHighlight,
    atomHighlightOpacity: 0.5,
    atomHighlightColor: 'red',
    onAtomEnter: (atomID) => {
      console.log('ATOM ENTER', atomID);
      setAtomHighlight(diaIDsIndex[diaIDs[atomID].oclID]);
    },
    onAtomLeave: (atomID) => {
      console.log('ATOM LEAVE', atomID);
      setAtomHighlight([]);
    },
    onAtomClick: (atomID) => {
      console.log('ATOM CLICK', atomID);
      let implicitHydrogens = getAtomsInfo(molecule)[atomID].implicitHydrogens;

      if (implicitHydrogens === 0) {
        let atomsToDelete = [];
        for (let i = 0; i < molecule.getAllConnAtoms(atomID); i++) {
          let connectedAtom = molecule.getConnAtom(atomID, i);
          if (molecule.getAtomicNo(connectedAtom) === 1) {
            atomsToDelete.push(connectedAtom);
          }
        }
        console.log('DELETE', atomsToDelete);
        molecule.deleteAtoms(atomsToDelete);
      } else {
        molecule.addImplicitHydrogens(atomID);
      }

      setMolfile(molecule.toMolfileV3());
    },

    bondHighlight: [4, 5, 6],
    bondHighlightOpacity: 0.5,
    bondHighlightColor: 'blue',
    onBondEnter: (event) => {
      console.log('BOND ENTER', event);
    },
    onBondLeave: (event) => {
      console.log('BOND LEAVE', event);
    },
    onBondClick: (event) => {
      console.log('BOND CLICK', event);
    },
  };

  return (
    <div>
      <OCLnmr {...options} />
    </div>
  );
}

export default App;
