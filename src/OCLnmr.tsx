import type { Molecule } from 'openchemlib';
import {
  getDiastereotopicAtomIDsAndH,
  getAtomsInfo,
  // @ts-expect-error: TODO: add types or write in TS
} from 'openchemlib-utils';
import { useState, useMemo, MouseEvent, useRef } from 'react';
import { MolfileSvgRenderer, IMolfileSvgRendererProps } from 'react-ocl/base';

export interface OCLnmrProps
  extends Omit<
    IMolfileSvgRendererProps,
    'atomHighlight' | 'onAtomEnter' | 'onAtomLeave' | 'onAtomClick'
  > {
  setMolfile: (molfile: string) => void;
  setSelectedAtom: (atom: any, event: MouseEvent) => void;
  highlights: any[];
  setHoverAtom: (atom: any) => void;
  internalAtomHighlightColor?: string;
  internalAtomHighlightOpacity?: number;
}

export default function OCLnmr(props: OCLnmrProps) {
  const {
    OCL,
    molfile,
    setMolfile,
    setSelectedAtom,
    highlights,
    setHoverAtom,
    atomHighlightColor = 'yellow',
    internalAtomHighlightColor = 'red',
    atomHighlightOpacity = 0.3,
    internalAtomHighlightOpacity = 0.3,
    ...otherProps
  } = props;
  const [overHighlights, setOverHighlights] = useState<number[]>([]);

  const cache = useRef<{
    molecule: Molecule;
    idCode: string;
    diaIDs: any[];
    diaIDsIndex: Record<string, number[]>;
  }>({
    molecule: new OCL.Molecule(0, 0),
    idCode: '',
    diaIDs: [],
    diaIDsIndex: {},
  });

  const { molecule, diaIDs, diaIDsIndex } = useMemo(() => {
    const newMolecule = OCL.Molecule.fromMolfile(molfile);
    const idCode = newMolecule.getIDCode();
    if (idCode !== cache.current.idCode) {
      const { diaIDs, diaIDsIndex } = getDiaIDs(newMolecule);
      cache.current = { molecule: newMolecule, idCode, diaIDs, diaIDsIndex };
    }
    return cache.current;
  }, [molfile, OCL]);

  const externalHighlights = useMemo(() => {
    // if the highlight is a proton and there is no proton we will highlight the carbon
    let allAtoms = [];
    let linked = [];

    for (let highlight of highlights) {
      let atoms = diaIDsIndex[highlight];
      if (!atoms) continue;
      allAtoms.push(...atoms);
      for (let atom of atoms) {
        if (atom >= molecule.getAllAtoms() && diaIDs[atom].heavyAtom) {
          // implicit hydrogen
          linked.push(...diaIDsIndex[diaIDs[atom].heavyAtom]);
        }
      }
    }
    return [...allAtoms, ...linked];
  }, [highlights, diaIDsIndex, diaIDs, molecule]);

  const options: IMolfileSvgRendererProps = {
    OCL,
    molfile,
    atomHighlight:
      overHighlights.length > 0 ? overHighlights : externalHighlights,
    atomHighlightOpacity:
      overHighlights.length > 0
        ? internalAtomHighlightOpacity
        : atomHighlightOpacity,

    atomHighlightColor:
      overHighlights.length > 0
        ? internalAtomHighlightColor
        : atomHighlightColor,
    onAtomEnter: (atomID: number) => {
      setOverHighlights(diaIDsIndex[diaIDs[atomID].oclID]);
      setHoverAtom(diaIDs[atomID]);
    },
    onAtomLeave: () => {
      setOverHighlights([]);
      setHoverAtom({});
    },
    onAtomClick: (atomID: number, event: MouseEvent) => {
      setSelectedAtom(diaIDs[atomID], event);
      if (event.shiftKey) {
        setOverHighlights([]);
        let implicitHydrogens =
          getAtomsInfo(molecule)[atomID].implicitHydrogens;
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

  return <MolfileSvgRenderer {...otherProps} {...options} />;
}

function getDiaIDs(molecule: Molecule) {
  const memoDiaIDs = getDiastereotopicAtomIDsAndH(molecule);
  const memoDiaIDsIndex: Record<string, number[]> = {};
  for (let i = 0; i < memoDiaIDs.length; i++) {
    let diaID = memoDiaIDs[i];
    diaID.atomLabel = molecule.getAtomLabel(i) || 'H';
    if (!memoDiaIDsIndex[diaID.oclID]) memoDiaIDsIndex[diaID.oclID] = [];
    memoDiaIDsIndex[diaID.oclID].push(i);
  }
  for (let diaID of memoDiaIDs) {
    diaID.nbAtoms = memoDiaIDsIndex[diaID.oclID].length;
  }
  return {
    diaIDs: memoDiaIDs,
    diaIDsIndex: memoDiaIDsIndex,
  };
}
