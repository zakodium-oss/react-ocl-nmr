import type { Molecule } from 'openchemlib';

export function getImplicitHydrogensCount(molecule: Molecule, atomID: number) {
  return molecule.getAllHydrogens(atomID) + molecule.getConnAtoms(atomID) - molecule.getAllConnAtoms(atomID);
}
