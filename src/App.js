import React, { useState, useEffect } from 'react';

import './assets/tailwind.css';

import ClickedDebug from './components/ClickedDebug';
import OCLnmr from './components/OCLnmr';
import { demoMolfile } from './demoMolfile';

function App() {
  const [molfile, setMolfile] = useState(demoMolfile);
  const [selectedAtom, setSelectedAtom] = useState({});
  const [highlights, setHighlights] = useState([]); // array of diaIDs

  return (
    <>
      <div className="flex flex-wrap">
        <div className="flex-col">
          <div>
            <OCLnmr
              molfile={molfile}
              setMolfile={setMolfile}
              setSelectedAtom={setSelectedAtom}
              highlights={highlights}
            />
          </div>
          <div className="whitespace-normal">
            Highlights ID. You may enter here<br></br>a list of diastereotopic
            ID
          </div>

          <br />
          <textarea
            value={highlights.join(',')}
            cols="30"
            rows="10"
            type="text"
            className="border-gray-500 border-2"
            width="100"
            onChange={(event) =>
              setHighlights(event.target.value.split(/[, \r\n\t]+/))
            }
          />
        </div>

        <textarea
          value={molfile}
          className="font-mono text-sm"
          cols="60"
          rows="40"
          readOnly
        />
        <ClickedDebug selected={selectedAtom} onClick={setHighlights} />
      </div>
    </>
  );
}

export default App;
