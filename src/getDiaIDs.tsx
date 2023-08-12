import type { Molecule } from 'openchemlib';
import { getDiastereotopicAtomIDsAndH } from 'openchemlib-utils';

export function getDiaIDs(molecule: Molecule) {
  const memoDiaIDs: any[] = getDiastereotopicAtomIDsAndH(molecule);
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
