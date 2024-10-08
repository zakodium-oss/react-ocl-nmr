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

export const cyclosporine = `
  Mrv0541 02111412132D          

 85 85  0  0  0  0            999 V2000
   17.9254   -9.3567    0.0000 C   0  0  2  0  0  0  0  0  0  0  0  0
   17.2113   -9.7698    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0
   18.6395   -9.7698    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   17.9254   -8.5344    0.0000 C   0  0  1  0  0  0  0  0  0  0  0  0
   16.4973   -9.3567    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   17.2113  -10.5922    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   19.3535   -9.3567    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0
   18.6395  -10.5922    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
   18.6395   -8.1211    0.0000 C   0  0  1  0  0  0  0  0  0  0  0  0
   17.2113   -8.1211    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
   15.7832   -9.7698    0.0000 C   0  0  1  0  0  0  0  0  0  0  0  0
   16.4973   -8.5344    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
   20.0676   -9.7698    0.0000 C   0  0  2  0  0  0  0  0  0  0  0  0
   18.6395   -7.2948    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   19.3535   -8.5344    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   15.0693   -9.3567    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0
   20.7816   -9.3567    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   20.0676  -10.5922    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   17.9254   -6.8816    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   14.3552   -9.7698    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   15.0693   -8.5344    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   21.4957   -9.7698    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0
   20.7816   -8.5344    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
   19.3535  -11.0054    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   17.9254   -6.0592    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   13.6412   -9.3567    0.0000 C   0  0  1  0  0  0  0  0  0  0  0  0
   14.3552  -10.5922    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
   21.4957  -10.5922    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   22.2097   -9.3567    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   17.2113   -5.6460    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   12.9271   -9.7698    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0
   13.6412   -8.5344    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   22.2097  -11.0054    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   12.9467  -12.3898    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   12.1007   -9.7698    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   12.9271   -8.1211    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   22.5003  -12.2349    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0
   22.9238  -10.5922    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
   12.2327  -12.8030    0.0000 C   0  0  1  0  0  0  0  0  0  0  0  0
   13.7370  -12.1692    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
   12.9271   -7.2948    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   12.2131   -8.5344    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   22.2293  -13.6254    0.0000 C   0  0  2  0  0  0  0  0  0  0  0  0
   23.2164  -12.1884    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   12.2327  -13.6254    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0
   11.5186  -12.3898    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   21.5153  -14.0386    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   22.9434  -14.0386    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   12.9467  -14.0386    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   11.5186  -14.0386    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   10.8045  -12.8030    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   20.8012  -13.6254    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0
   21.5153  -14.8610    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
   23.6574  -13.6254    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   13.6608  -13.6254    0.0000 C   0  0  2  0  0  0  0  0  0  0  0  0
   12.9467  -14.8610    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
   10.0905  -12.3898    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   10.3753  -13.5612    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   20.0872  -14.0386    0.0000 C   0  0  2  0  0  0  0  0  0  0  0  0
   24.3715  -14.0386    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   23.6574  -12.8030    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   14.3748  -14.0386    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0
   13.6608  -12.8030    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   19.3731  -13.6254    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   20.1032  -15.1096    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   15.0889  -13.6254    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   18.6591  -14.0386    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0
   19.3731  -12.8030    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
   19.3410  -15.7394    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   20.8293  -15.6753    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   15.8028  -14.0386    0.0000 C   0  0  1  0  0  0  0  0  0  0  0  0
   15.0889  -12.8030    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
   17.9450  -13.6254    0.0000 C   0  0  2  0  0  0  0  0  0  0  0  0
   18.6591  -14.8610    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   16.5169  -13.6254    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0
   15.8028  -14.8610    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   17.2309  -14.0386    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   17.2309  -14.8610    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
   15.7831  -10.5948    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   15.0687  -11.0073    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   16.4976  -11.0073    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   17.9450  -12.8004    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   17.2306  -12.3879    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   17.2306  -11.5629    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   16.5161  -12.8004    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  1  2  1  1  0  0  0
  1  3  1  0  0  0  0
  1  4  1  0  0  0  0
  2  5  1  0  0  0  0
  2  6  1  0  0  0  0
  3  7  1  0  0  0  0
  3  8  2  0  0  0  0
  4  9  1  0  0  0  0
  4 10  1  6  0  0  0
  5 11  1  0  0  0  0
  5 12  2  0  0  0  0
  7 13  1  0  0  0  0
  9 14  1  0  0  0  0
  9 15  1  1  0  0  0
 11 16  1  0  0  0  0
 13 17  1  0  0  0  0
 13 18  1  6  0  0  0
 14 19  1  0  0  0  0
 16 20  1  0  0  0  0
 16 21  1  0  0  0  0
 17 22  1  0  0  0  0
 17 23  2  0  0  0  0
 18 24  1  0  0  0  0
 19 25  2  0  0  0  0
 20 26  1  0  0  0  0
 20 27  2  0  0  0  0
 22 28  1  0  0  0  0
 22 29  1  0  0  0  0
 25 30  1  0  0  0  0
 26 31  1  0  0  0  0
 26 32  1  1  0  0  0
 28 33  1  0  0  0  0
 31 35  1  0  0  0  0
 32 36  1  0  0  0  0
 33 38  2  0  0  0  0
 34 39  1  0  0  0  0
 34 40  2  0  0  0  0
 36 41  1  0  0  0  0
 36 42  1  0  0  0  0
 37 43  1  0  0  0  0
 37 44  1  0  0  0  0
 39 45  1  0  0  0  0
 39 46  1  1  0  0  0
 43 47  1  0  0  0  0
 43 48  1  1  0  0  0
 45 49  1  0  0  0  0
 45 50  1  0  0  0  0
 46 51  1  0  0  0  0
 47 52  1  0  0  0  0
 47 53  2  0  0  0  0
 48 54  1  0  0  0  0
 49 55  1  0  0  0  0
 49 56  2  0  0  0  0
 51 57  1  0  0  0  0
 51 58  1  0  0  0  0
 52 59  1  0  0  0  0
 54 60  1  0  0  0  0
 54 61  1  0  0  0  0
 55 62  1  0  0  0  0
 55 63  1  1  0  0  0
 59 64  1  0  0  0  0
 59 65  1  1  0  0  0
 62 66  1  0  0  0  0
 64 67  1  0  0  0  0
 64 68  2  0  0  0  0
 65 69  1  0  0  0  0
 65 70  1  0  0  0  0
 66 71  1  0  0  0  0
 66 72  2  0  0  0  0
 67 73  1  0  0  0  0
 67 74  1  0  0  0  0
 71 75  1  0  0  0  0
 71 76  1  1  0  0  0
 73 77  1  0  0  0  0
 77 78  2  0  0  0  0
 75 77  1  0  0  0  0
 11 79  1  6  0  0  0
 79 80  1  0  0  0  0
 79 81  1  0  0  0  0
 73 82  1  6  0  0  0
 82 83  1  0  0  0  0
 83 84  1  0  0  0  0
 83 85  1  0  0  0  0
 34 31  1  0  0  0  0
 33 37  1  0  0  0  0
M  END
`;

export const demoLarge = `
  ChemDraw07182413452D

291292  0  0  0  0  0  0  0  0999 V2000
   -5.0665    3.5215    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -5.0665    2.6965    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -4.3520    2.2840    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -3.6376    2.6965    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -3.6376    3.5215    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -4.3520    3.9340    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -3.6376    1.8715    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.9232    1.4590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.2087    1.8715    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.2087    2.6965    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.9232    3.1090    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -1.4943    1.4590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -1.4943    0.6340    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.7798    0.2215    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.7798   -0.6035    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.0653   -1.0160    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.0653   -1.8410    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    0.6491   -2.2535    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    0.6491   -3.0785    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    1.3636   -3.4910    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    1.3636   -4.3160    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    2.0781   -4.7285    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    2.0781   -5.5535    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    2.7925   -5.9660    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    2.7925   -6.7910    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    3.5070   -7.2035    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    3.5070   -8.0285    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    4.2215   -8.4410    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    4.2215   -9.2660    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    4.9360   -9.6785    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    4.9360  -10.5035    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    5.6504  -10.9160    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    5.6504  -11.7410    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    6.3649  -12.1535    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    6.3649  -12.9785    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.3398    3.6924    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.5533    4.4893    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -1.9700    5.0726    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.1835    5.8695    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -1.6001    6.4529    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -1.8137    7.2498    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -1.2303    7.8331    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -1.4438    8.6300    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.8605    9.2134    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -1.0740   10.0103    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.4906   10.5936    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.7042   11.3905    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.1208   11.9739    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.3343   12.7708    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    0.2490   13.3541    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    0.0355   14.1510    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    0.6189   14.7344    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    0.4054   15.5313    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    0.9887   16.1146    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    0.7752   16.9115    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    1.3586   17.4949    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -4.3520    4.7590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -5.0665    5.1715    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -5.0665    5.9965    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -5.7810    6.4090    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -5.7810    7.2340    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -6.4954    7.6465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -6.4954    8.4715    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -7.2099    8.8840    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -7.2099    9.7090    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -7.9244   10.1215    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -7.9244   10.9465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -8.6389   11.3590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -8.6389   12.1840    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -9.3533   12.5965    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -9.3533   13.4215    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -10.0678   13.8340    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -10.0678   14.6590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -10.7823   15.0715    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -10.7823   15.8965    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -4.8529    1.8996    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -5.4363    1.3163    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -5.2228    0.5194    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -5.8061   -0.0640    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -5.5926   -0.8609    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -6.1760   -1.4442    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -5.9624   -2.2411    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -6.5458   -2.8245    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -6.3323   -3.6214    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -6.9156   -4.2047    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -6.7021   -5.0016    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -7.2855   -5.5850    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -7.0720   -6.3819    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -7.6553   -6.9653    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -7.4418   -7.7621    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -8.0252   -8.3455    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -7.8116   -9.1424    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -8.3950   -9.7258    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -8.1815  -10.5226    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -8.7648  -11.1060    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -8.5513  -11.9029    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -9.1347  -12.4863    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -8.9211  -13.2832    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -9.5045  -13.8665    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -9.2910  -14.6634    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -9.8743  -15.2468    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -9.6608  -16.0437    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -10.2442  -16.6270    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -3.3357    0.7445    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.9232    0.0301    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -3.3357   -0.6844    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.9232   -1.3989    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -3.3357   -2.1133    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.9232   -2.8278    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -3.3357   -3.5423    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.9232   -4.2568    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -3.3357   -4.9712    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.9232   -5.6857    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -3.3357   -6.4002    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.9232   -7.1146    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -3.3357   -7.8291    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.9232   -8.5436    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -3.3357   -9.2581    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.9232   -9.9725    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -3.3357  -10.6870    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.9232  -11.4015    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -3.3357  -12.1159    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.9232  -12.8304    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -3.3357  -13.5449    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.9232  -14.2594    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -3.3357  -14.9738    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.9232  -15.6883    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -5.8633    3.7350    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -6.0769    4.5319    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -6.8738    4.7454    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -7.0873    5.5423    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -7.8842    5.7559    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -8.0977    6.5528    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -8.8946    6.7663    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -9.1081    7.5632    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -9.9050    7.7767    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -10.1185    8.5736    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -10.9154    8.7871    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -11.1289    9.5840    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -11.9258    9.7975    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -12.1394   10.5944    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -12.9362   10.8079    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -13.1498   11.6048    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -13.9467   11.8184    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -14.1602   12.6152    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -1.9952    3.4934    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -1.1983    3.7069    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.9848    4.5038    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.1879    4.7173    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    0.0256    5.5142    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    0.8225    5.7278    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    1.0360    6.5246    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    1.8329    6.7382    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    2.0464    7.5351    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    2.8433    7.7486    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    3.0569    8.5455    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    3.8537    8.7590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    4.0673    9.5559    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    4.8642    9.7694    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    5.0777   10.5663    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    5.8746   10.7798    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    6.0881   11.5767    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    6.8850   11.7902    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    7.0985   12.5871    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    7.8954   12.8007    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    8.1089   13.5975    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    8.9058   13.8111    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    9.1193   14.6080    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    9.9162   14.8215    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   10.1298   15.6184    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   10.9266   15.8319    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    0.0927   11.1770    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    0.3063   10.3801    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    1.1032   10.1666    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    1.3167    9.3697    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    2.1136    9.1562    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    2.3271    8.3593    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    3.1240    8.1458    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    3.3375    7.3489    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    4.1344    7.1353    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    4.3479    6.3384    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    5.1448    6.1249    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    5.3583    5.3280    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    6.1552    5.1145    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    6.3688    4.3176    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    7.1656    4.1041    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    7.3792    3.3072    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    8.1761    3.0937    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    8.3896    2.2968    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    9.1865    2.0833    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    9.4000    1.2864    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   10.1969    1.0728    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   10.4104    0.2760    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   11.2073    0.0624    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   11.4208   -0.7345    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   12.2177   -0.9480    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    5.6610    9.5559    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    5.8746    8.7590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    6.6715    8.5455    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    6.8850    7.7486    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    7.6819    7.5351    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    7.8954    6.7382    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    8.6923    6.5246    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    8.9058    5.7278    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    9.7027    5.5142    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    9.9162    4.7173    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   10.7131    4.5038    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   10.9266    3.7069    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    7.0985   10.9934    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    7.8954   10.7798    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    8.1089    9.9829    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    8.9058    9.7694    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    9.1193    8.9725    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    9.9162    8.7590    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   10.1298    7.9621    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   10.9266    7.7486    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   11.1402    6.9517    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   11.9371    6.7382    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   12.1506    5.9413    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   12.9475    5.7278    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   13.1610    4.9309    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   13.9579    4.7173    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   14.1714    3.9204    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   14.9683    3.7069    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   15.1818    2.9100    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    1.5370    5.3153    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    1.5370    4.4903    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    2.2514    4.0778    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    2.2514    3.2528    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    2.9659    2.8403    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    2.9659    2.0153    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    3.6804    1.6028    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    3.6804    0.7778    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    4.3949    0.3653    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    4.3949   -0.4597    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    5.1093   -0.8722    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    5.1093   -1.6972    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    5.8238   -2.1097    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    5.8238   -2.9347    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    6.5383   -3.3472    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    6.5383   -4.1722    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    7.2527   -4.5847    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    7.2527   -5.4097    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    7.9672   -5.8222    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    7.9672   -6.6472    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    8.6817   -7.0597    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    8.6817   -7.8847    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    9.3961   -8.2972    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    9.3961   -9.1222    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   10.1106   -9.5347    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   10.1106  -10.3597    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   10.8251  -10.7722    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   10.8251  -11.5972    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   11.5396  -12.0097    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   11.5396  -12.8347    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   12.2540  -13.2472    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -8.6811    5.9694    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -9.2644    5.3860    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -9.0509    4.5891    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -9.6343    4.0058    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -9.4207    3.2089    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -10.0041    2.6255    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -9.7906    1.8286    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -10.3739    1.2453    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -10.1604    0.4484    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -10.7438   -0.1350    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -10.5303   -0.9319    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -11.1136   -1.5152    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -10.9001   -2.3121    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -11.4835   -2.8955    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -11.2699   -3.6924    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -11.8533   -4.2757    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -11.6398   -5.0726    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -12.2231   -5.6560    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -12.0096   -6.4529    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -12.5930   -7.0362    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -12.3794   -7.8331    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -12.9628   -8.4165    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -12.7493   -9.2134    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -13.3326   -9.7967    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -13.1191  -10.5936    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -13.7025  -11.1770    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -13.4889  -11.9739    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -14.0723  -12.5572    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -13.8588  -13.3541    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -14.4422  -13.9375    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -14.2286  -14.7344    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -14.8120  -15.3178    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -14.5985  -16.1146    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -15.1818  -16.6980    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  -14.9683  -17.4949    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  1  2  1  0        0
  2  3  1  0        0
  3  4  1  0        0
  4  5  1  0        0
  5  6  1  0        0
  6  1  1  0        0
  4  7  1  0        0
  7  8  1  0        0
  8  9  1  0        0
  9 10  1  0        0
 10 11  1  0        0
 11  4  1  0        0
  9 12  1  0        0
 12 13  1  0        0
 13 14  1  0        0
 14 15  1  0        0
 15 16  1  0        0
 16 17  1  0        0
 17 18  1  0        0
 18 19  1  0        0
 19 20  1  0        0
 20 21  1  0        0
 21 22  1  0        0
 22 23  1  0        0
 23 24  1  0        0
 24 25  1  0        0
 25 26  1  0        0
 26 27  1  0        0
 27 28  1  0        0
 28 29  1  0        0
 29 30  1  0        0
 30 31  1  0        0
 31 32  1  0        0
 32 33  1  0        0
 33 34  1  0        0
 34 35  1  0        0
 11 36  1  0        0
 36 37  1  0        0
 37 38  1  0        0
 38 39  1  0        0
 39 40  1  0        0
 40 41  1  0        0
 41 42  1  0        0
 42 43  1  0        0
 43 44  1  0        0
 44 45  1  0        0
 45 46  1  0        0
 46 47  1  0        0
 47 48  1  0        0
 48 49  1  0        0
 49 50  1  0        0
 50 51  1  0        0
 51 52  1  0        0
 52 53  1  0        0
 53 54  1  0        0
 54 55  1  0        0
 55 56  1  0        0
  6 57  1  0        0
 57 58  1  0        0
 58 59  1  0        0
 59 60  1  0        0
 60 61  1  0        0
 61 62  1  0        0
 62 63  1  0        0
 63 64  1  0        0
 64 65  1  0        0
 65 66  1  0        0
 66 67  1  0        0
 67 68  1  0        0
 68 69  1  0        0
 69 70  1  0        0
 70 71  1  0        0
 71 72  1  0        0
 72 73  1  0        0
 73 74  1  0        0
 74 75  1  0        0
  2 76  1  0        0
 76 77  1  0        0
 77 78  1  0        0
 78 79  1  0        0
 79 80  1  0        0
 80 81  1  0        0
 81 82  1  0        0
 82 83  1  0        0
 83 84  1  0        0
 84 85  1  0        0
 85 86  1  0        0
 86 87  1  0        0
 87 88  1  0        0
 88 89  1  0        0
 89 90  1  0        0
 90 91  1  0        0
 91 92  1  0        0
 92 93  1  0        0
 93 94  1  0        0
 94 95  1  0        0
 95 96  1  0        0
 96 97  1  0        0
 97 98  1  0        0
 98 99  1  0        0
 99100  1  0        0
100101  1  0        0
101102  1  0        0
102103  1  0        0
  8104  1  0        0
104105  1  0        0
105106  1  0        0
106107  1  0        0
107108  1  0        0
108109  1  0        0
109110  1  0        0
110111  1  0        0
111112  1  0        0
112113  1  0        0
113114  1  0        0
114115  1  0        0
115116  1  0        0
116117  1  0        0
117118  1  0        0
118119  1  0        0
119120  1  0        0
120121  1  0        0
121122  1  0        0
122123  1  0        0
123124  1  0        0
124125  1  0        0
125126  1  0        0
126127  1  0        0
  1128  1  0        0
128129  1  0        0
129130  1  0        0
130131  1  0        0
131132  1  0        0
132133  1  0        0
133134  1  0        0
134135  1  0        0
135136  1  0        0
136137  1  0        0
137138  1  0        0
138139  1  0        0
139140  1  0        0
140141  1  0        0
141142  1  0        0
142143  1  0        0
143144  1  0        0
144145  1  0        0
 10146  1  0        0
146147  1  0        0
147148  1  0        0
148149  1  0        0
149150  1  0        0
150151  1  0        0
151152  1  0        0
152153  1  0        0
153154  1  0        0
154155  1  0        0
155156  1  0        0
156157  1  0        0
157158  1  0        0
158159  1  0        0
159160  1  0        0
160161  1  0        0
161162  1  0        0
162163  1  0        0
163164  1  0        0
164165  1  0        0
165166  1  0        0
166167  1  0        0
167168  1  0        0
168169  1  0        0
169170  1  0        0
170171  1  0        0
 47172  1  0        0
172173  1  0        0
173174  1  0        0
174175  1  0        0
175176  1  0        0
176177  1  0        0
177178  1  0        0
178179  1  0        0
179180  1  0        0
180181  1  0        0
181182  1  0        0
182183  1  0        0
183184  1  0        0
184185  1  0        0
185186  1  0        0
186187  1  0        0
187188  1  0        0
188189  1  0        0
189190  1  0        0
190191  1  0        0
191192  1  0        0
192193  1  0        0
193194  1  0        0
194195  1  0        0
195196  1  0        0
159197  1  0        0
197198  1  0        0
198199  1  0        0
199200  1  0        0
200201  1  0        0
201202  1  0        0
202203  1  0        0
203204  1  0        0
204205  1  0        0
205206  1  0        0
206207  1  0        0
207208  1  0        0
163209  1  0        0
209210  1  0        0
210211  1  0        0
211212  1  0        0
212213  1  0        0
213214  1  0        0
214215  1  0        0
215216  1  0        0
216217  1  0        0
217218  1  0        0
218219  1  0        0
219220  1  0        0
220221  1  0        0
221222  1  0        0
222223  1  0        0
223224  1  0        0
224225  1  0        0
151226  1  0        0
226227  1  0        0
227228  1  0        0
228229  1  0        0
229230  1  0        0
230231  1  0        0
231232  1  0        0
232233  1  0        0
233234  1  0        0
234235  1  0        0
235236  1  0        0
236237  1  0        0
237238  1  0        0
238239  1  0        0
239240  1  0        0
240241  1  0        0
241242  1  0        0
242243  1  0        0
243244  1  0        0
244245  1  0        0
245246  1  0        0
246247  1  0        0
247248  1  0        0
248249  1  0        0
249250  1  0        0
250251  1  0        0
251252  1  0        0
252253  1  0        0
253254  1  0        0
254255  1  0        0
255256  1  0        0
134257  1  0        0
257258  1  0        0
258259  1  0        0
259260  1  0        0
260261  1  0        0
261262  1  0        0
262263  1  0        0
263264  1  0        0
264265  1  0        0
265266  1  0        0
266267  1  0        0
267268  1  0        0
268269  1  0        0
269270  1  0        0
270271  1  0        0
271272  1  0        0
272273  1  0        0
273274  1  0        0
274275  1  0        0
275276  1  0        0
276277  1  0        0
277278  1  0        0
278279  1  0        0
279280  1  0        0
280281  1  0        0
281282  1  0        0
282283  1  0        0
283284  1  0        0
284285  1  0        0
285286  1  0        0
286287  1  0        0
287288  1  0        0
288289  1  0        0
289290  1  0        0
290291  1  0        0
M  END
`