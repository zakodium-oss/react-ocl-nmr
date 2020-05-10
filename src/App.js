import React, { useState } from 'react';

import './assets/tailwind.css';

import ClickedDebug from './components/ClickedDebug';
import OCLnmr from './components/OCLnmr';
import { demoMolfile } from './demoMolfile';

function App() {
  const [molfile, setMolfile] = useState(demoMolfile);
  const [selectedAtom, setSelectedAtom] = useState({});
  const [highlight, setHighlight] = useState([]); // array of diaIDs

  return (
    <>
      <div className="flex flex-wrap">
        <div className="flex-col">
          <div>
            <OCLnmr
              molfile={molfile}
              setMolfile={setMolfile}
              setSelectedAtom={setSelectedAtom}
              highlight={highlight}
            />
          </div>
          Highlight ID:{' '}
          <input
            value={highlight.join(',')}
            type="text"
            className="border-gray-500 border-2"
            width="100"
            onChange={(event) => setHighlight(event.target.value.split(','))}
          />
        </div>

        <textarea
          value={molfile}
          className="font-mono text-sm"
          cols="60"
          rows="40"
        />
        <ClickedDebug selected={selectedAtom} onClick={setHighlight} />
      </div>
    </>
  );
}

export default App;
