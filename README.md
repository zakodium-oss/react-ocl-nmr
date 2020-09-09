# react-ocl-nmr

This component allows to easily assign a molecule to an NMR spectrum. It is aware
of diastereotopic atoms and allows to select and highlight an atom.

By default it will display the equivalent atoms.

The following props are available:

- OCL: reference to the OpenChemLib library
- molfile: original molfile
- setMolfile: callback allowing to define an updated molfile when hydrogens are expanded
- setSelectedAtom: callback when an atom is clicked. The value contains an ojbect as described after diastereotopicID
- setHoverAtom: callback when an atom is hovered. The value contains the diastereotopicID
- highlights: array of diastereotopicID
- atomHighlightColor: color for highlight (default 'yellow')
- atomHighlightOpacity: opacity for highlight (default 0.3)
- internalAtomHighlightColor: color for equivalent atoms (default 'red')
- internalAtomHighlightOpacity: opacity for equivalent atoms (default 0.3)

Callback for hover and clicked atom returns an object of the following kind:

```json
{
  "oclID": "gGPHADIMmURTAbJ`RHgBj@",
  "hydrogenOCLIDs": ["gNpDALzHRVvjjH`OtbADj`"],
  "nbHydrogens": 3
}
```

`oclID` contains the identifier of the selected / hovered atom and if hydrogens are connected to this atom an array of hydrogens are also available.

## Install the library

```console
npm install react-ocl-nmr openchemlib
```

Then add to your application:

```js
import { initOCL } from 'openchemlib-utils';
import OCL from 'openchemlib'; // Or import any other OCL version that you need.

initOCL(OCL);
```

## Demo of the project

`$ npm start`

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/react-ocl-nmr.svg
[npm-url]: https://www.npmjs.com/package/react-ocl-nmr
[ci-image]: https://github.com/cheminfo/react-ocl-nmr/workflows/Node.js%20CI/badge.svg?branch=master
[ci-url]: https://github.com/cheminfo/react-ocl-nmr/actions?query=workflow%3A%22Node.js+CI%22
[download-image]: https://img.shields.io/npm/dm/react-ocl-nmr.svg
[download-url]: https://www.npmjs.com/package/react-ocl-nmr
