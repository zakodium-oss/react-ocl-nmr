# react-ocl-nmr

This component allows to easily assign a molecule to an NMR spectrum. It is aware
of diastereotopic atoms and allows to select and highlight an atom.

By default it will display the equivalent atoms.

The following props are available:

- molfile: original molfile
- setMolfile: callback allowing to define an updated molfile when hydrogens are expanded
- setSelectedAtom: callback when an atom is clicked. The value contains the diastereotopicID
- setHoverAtom: callback when an atom is hovered. The value contains the diastereotopicID
- highlights: array of diastereotopicID

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
