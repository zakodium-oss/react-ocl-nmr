import React, { useState, useEffect } from 'react';
import './assets/tailwind.css';
import ClickedDebug from './components/ClickedDebug';
import OCLnmr from './components/OCLnmr';
import { demoMolfile } from './demoMolfile';

function App() {
  const [molfile, setMolfile] = useState(demoMolfile);
  const [selectedAtom, setSelectedAtom] = useState({});
  const [hoverAtom, setHoverAtom] = useState({});
  const [highlights, setHighlights] = useState([]); // array of diaIDs

  useEffect(() => {
    console.log(JSON.stringify(hoverAtom, undefined, 2));
  }, [selectedAtom, hoverAtom]);
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'flex flex-wrap',
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'flex-col',
        },
        /*#__PURE__*/ React.createElement(
          'div',
          null,
          /*#__PURE__*/ React.createElement(OCLnmr, {
            molfile: molfile,
            setMolfile: setMolfile,
            setSelectedAtom: setSelectedAtom,
            setHoverAtom: setHoverAtom,
            highlights: highlights,
            internalAtomHighlightColor: 'blue',
            internalAtomHighlightOpacity: '0.7',
          }),
        ),
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'whitespace-normal',
          },
          'Highlights ID. You may enter here',
          /*#__PURE__*/ React.createElement('br', null),
          'a list of diastereotopic ID',
        ),
        /*#__PURE__*/ React.createElement('br', null),
        /*#__PURE__*/ React.createElement('textarea', {
          value: highlights.join(','),
          cols: '30',
          rows: '10',
          type: 'text',
          className: 'border-gray-500 border-2',
          width: '100',
          onChange: (event) =>
            setHighlights(event.target.value.split(/[, \r\n\t]+/)),
        }),
      ),
      /*#__PURE__*/ React.createElement('textarea', {
        value: molfile,
        className: 'font-mono text-sm',
        cols: '60',
        rows: '40',
        readOnly: true,
      }),
      /*#__PURE__*/ React.createElement(ClickedDebug, {
        selected: selectedAtom,
        onClick: setHighlights,
      }),
    ),
  );
}

export default App;
