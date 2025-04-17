import { Molecule } from 'openchemlib';
import type { DiaIDAndInfo } from 'openchemlib-utils';
import { toggleHydrogens, TopicMolecule } from 'openchemlib-utils';
import { useMemo, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { MolfileSvgRenderer } from 'react-ocl';
import type { MolfileSvgRendererProps } from 'react-ocl';

export interface OCLnmrProps
  extends Omit<
    MolfileSvgRendererProps,
    'atomHighlight' | 'onAtomEnter' | 'onAtomLeave' | 'onAtomClick'
  > {
  setMolfile: (molfile: string) => void;
  setSelectedAtom: (atom: DiaIDAndInfo | undefined, event: MouseEvent) => void;
  highlights: any[];
  setHoverAtom: (atom?: DiaIDAndInfo) => void;
  internalAtomHighlightColor?: string;
  internalAtomHighlightOpacity?: number;
}

export default function OCLnmr(props: OCLnmrProps) {
  const {
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
    topicMolecule: TopicMolecule;
    normalizedMolfile: string;
    molecule: Molecule;
  }>({
    topicMolecule: new TopicMolecule(new Molecule(0, 0)),
    normalizedMolfile: '',
    molecule: new Molecule(0, 0),
  });

  const { normalizedMolfile, molecule, topicMolecule } = useMemo(() => {
    const topicMolecule = cache.current.topicMolecule.fromMolecule(
      Molecule.fromMolfile(molfile),
    );
    const normalizedMolfile = topicMolecule.toMolfile({ version: 3 });
    cache.current = {
      topicMolecule,
      normalizedMolfile,
      molecule: topicMolecule.getMolecule(),
    };
    return cache.current;
  }, [molfile]);

  const externalHighlights = useMemo(() => {
    // if the highlight is a proton and there is no proton we will highlight the carbon
    const allAtoms = [];
    const currentHighlights = [...highlights];
    // we receive an array of diaIDs to highlight
    for (const highlight of currentHighlights) {
      const atomIDs = getAtomIDsFromDiaID(topicMolecule, highlight);
      if (!atomIDs) continue;
      allAtoms.push(...atomIDs);

      for (const atomID of atomIDs) {
        if (
          atomID >= topicMolecule.molecule.getAllAtoms() &&
          topicMolecule.diaIDsAndInfo[atomID].heavyAtom
        ) {
          // implicit hydrogen, we display the linked heavy atom
          currentHighlights.push(topicMolecule.diaIDsAndInfo[atomID].heavyAtom);
        }
      }
    }
    return [...allAtoms];
  }, [highlights, topicMolecule]);

  const options: MolfileSvgRendererProps = {
    molfile: normalizedMolfile,
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
      setHoverAtom(topicMolecule.diaIDsAndInfo[atomID]);
      const atomIDs = getAtomIDsFromDiaID(
        topicMolecule,
        topicMolecule.diaIDs[atomID],
      );
      setOverHighlights(atomIDs);
    },
    onAtomLeave: () => {
      setOverHighlights([]);
      setHoverAtom();
    },
    onAtomClick: (atomID: number, event: MouseEvent) => {
      setSelectedAtom(topicMolecule.diaIDsAndInfo[atomID], event);
      if (event.shiftKey) {
        setOverHighlights([]);
        setHoverAtom();
        toggleHydrogens(molecule, atomID);
        setMolfile(molecule.toMolfileV3());
      }
    },
  };
  return <MolfileSvgRenderer {...otherProps} {...options} />;
}

function getAtomIDsFromDiaID(topicMolecule: TopicMolecule, diaID: string) {
  const atomIDs = [];
  for (let i = 0; i < topicMolecule.diaIDs.length; i++) {
    if (topicMolecule.diaIDs[i] === diaID) {
      atomIDs.push(i);
    }
  }
  return atomIDs;
}
