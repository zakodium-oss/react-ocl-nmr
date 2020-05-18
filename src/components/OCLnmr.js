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
  const {
    molfile,
    setMolfile,
    setSelectedAtom,
    highlights,
    setHoverAtom,
  } = props;
  const [overHighlights, setOverHighlights] = useState([]);
  const [externalHighlights, setExternalHighlights] = useState([]);

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
    let allAtoms = [];
    let linked = [];

    for (let highlight of highlights) {
      let atoms = diaIDsIndex[highlight];
      if (!atoms) continue;
      allAtoms.push(...atoms);
      for (let atom of atoms) {
        if (atom > molecule.getAllAtoms() && diaIDs[atom].heavyAtom) {
          // implicit hydrogen
          linked.push(...diaIDsIndex[diaIDs[atom].heavyAtom]);
        }
      }
    }
    setExternalHighlights([...allAtoms, ...linked]);
  }, [highlights, diaIDsIndex, diaIDs, molecule]);

  const options = {
    atomHighlight:
      overHighlights.length > 0 ? overHighlights : externalHighlights,
    atomHighlightOpacity: 0.3,
    atomHighlightColor: overHighlights.length > 0 ? 'red' : 'yellow',
    onAtomEnter: (atomID) => {
      setOverHighlights(diaIDsIndex[diaIDs[atomID].oclID]);
      setHoverAtom(diaIDs[atomID]);
    },
    onAtomLeave: () => {
      setOverHighlights([]);
      setHoverAtom({});
    },
    onAtomClick: (atomID, event) => {
      setSelectedAtom(diaIDs[atomID]);
      if (event.shiftKey) {
        setOverHighlights([]);
        let implicitHydrogens = getAtomsInfo(molecule)[atomID]
          .implicitHydrogens;
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
      }
    },
  };

  return (
    <>
      <MolfileSvgRenderer {...props} {...options} />
    </>
  );
}
