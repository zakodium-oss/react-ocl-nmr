import OCL from 'openchemlib';
import {
  initOCL,
  getDiastereotopicAtomIDsAndH,
  getAtomsInfo,
} from 'openchemlib-utils';
import React, { useState, useMemo, useEffect } from 'react';
import { MolfileSvgRenderer } from 'react-ocl';

initOCL(OCL);

export default function OCLnmr(props) {
  const { molfile, setMolfile, setSelectedAtom, highlight } = props;
  const [overHighlight, setOverHighlight] = useState([]);
  const [externalHighlight, setExternalHighlight] = useState([]);

  const { molecule, diaIDs, diaIDsIndex } = useMemo(() => {
    const memoMolecule = OCL.Molecule.fromMolfile(molfile);
    memoMolecule.ensureHelperArrays(OCL.Molecule.cHelperBitNeighbours);
    memoMolecule.ensureHelperArrays(OCL.Molecule.cHelperNeighbours);
    const memoDiaIDs = getDiastereotopicAtomIDsAndH(memoMolecule);
    const memoDiaIDsIndex = {};
    for (let i = 0; i < memoDiaIDs.length; i++) {
      let diaID = memoDiaIDs[i];
      if (!memoDiaIDsIndex[diaID.oclID]) memoDiaIDsIndex[diaID.oclID] = [];
      memoDiaIDsIndex[diaID.oclID].push(i);
    }
    return {
      molecule: memoMolecule,
      diaIDs: memoDiaIDs,
      diaIDsIndex: memoDiaIDsIndex,
    };
  }, [molfile]);

  useEffect(() => {
    // if the highlight is a proton and there is no proton we will highlight the carbon
    let atoms = diaIDsIndex[highlight];
    if (!atoms) {
      setExternalHighlight([]);
      return;
    }
    let linked = [];
    for (let atom of atoms) {
      if (atom > molecule.getAllAtoms() && diaIDs[atom].heavyAtom) {
        // implicit hydrogen
        linked.push(...diaIDsIndex[diaIDs[atom].heavyAtom]);
      }
    }
    setExternalHighlight([...atoms, ...linked]);
  }, [highlight, diaIDsIndex, diaIDs, molecule]);

  const options = {
    atomHighlight: overHighlight.length > 0 ? overHighlight : externalHighlight,
    atomHighlightOpacity: 0.3,
    atomHighlightColor: overHighlight.length > 0 ? 'red' : 'yellow',
    onAtomEnter: (atomID) => {
      setOverHighlight(diaIDsIndex[diaIDs[atomID].oclID]);
    },
    onAtomLeave: () => {
      setOverHighlight([]);
    },
    onAtomClick: (atomID) => {
      setOverHighlight([]);
      setSelectedAtom(diaIDs[atomID]);
      let implicitHydrogens = getAtomsInfo(molecule)[atomID].implicitHydrogens;
      if (implicitHydrogens === 0) {
        let atomsToDelete = [];
        for (let i = 0; i < molecule.getAllConnAtoms(atomID); i++) {
          let connectedAtom = molecule.getConnAtom(atomID, i);
          if (molecule.getAtomicNo(connectedAtom) === 1) {
            atomsToDelete.push(connectedAtom);
          }
        }
        molecule.deleteAtoms(atomsToDelete);
      } else {
        molecule.addImplicitHydrogens(atomID);
      }

      setMolfile(molecule.toMolfileV3());
    },
  };

  return (
    <>
      <MolfileSvgRenderer {...props} {...options} />
    </>
  );
}
