import type { Molecule } from 'openchemlib';
import { getImplicitHydrogensCount } from './getImplicitHydrogensCount';

export function toggleHydrogens(molecule: Molecule, atomID: number) {
  if (getImplicitHydrogensCount(molecule, atomID) === 0) {
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
}
