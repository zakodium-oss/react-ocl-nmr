/*
import OCL from 'openchemlib';
import { initOCL, addDiastereotopicMissingChirality } from 'openchemlib-utils';
initOCL(OCL);
const smiles = 'CC(Cl)CCC';
const molecule = OCL.Molecule.fromSmiles(smiles);
addDiastereotopicMissingChirality(molecule);
molecule.toMolfileV3();
*/

export const demoMolfile = `
Actelion Java MolfileCreator 2.0

  0  0  0  0  0  0              0 V3000
M  V30 BEGIN CTAB
M  V30 COUNTS 8 7 0 0 0
M  V30 BEGIN ATOM
M  V30 1 C 5.8547 -0.845 0 0
M  V30 2 C 4.3909 0 0 0 CFG=2
M  V30 3 Cl 4.3909 1.6901 0 0
M  V30 4 C 2.9272 -0.845 0 0
M  V30 5 C 1.4636 0 0 0
M  V30 6 C 0 -0.845 0 0
M  V30 7 H 2.3356 -1.8695 0 0
M  V30 8 H 3.5186 -1.8695 0 0
M  V30 END ATOM
M  V30 BEGIN BOND
M  V30 1 1 1 2
M  V30 2 1 2 3 CFG=1
M  V30 3 1 2 4
M  V30 4 1 4 5
M  V30 5 1 5 6
M  V30 6 1 4 7 CFG=1
M  V30 7 1 4 8
M  V30 END BOND
M  V30 BEGIN COLLECTION
M  V30 MDLV30/STERAC1 ATOMS=(1 2)
M  V30 END COLLECTION
M  V30 END CTAB
M  END
`;
