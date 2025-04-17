import { useEffect, useState } from 'react';

import OCLnmr from '../src/OCLnmr';

import ClickedDebug from './ClickedDebug';
//import { demoLarge as demoMolfile } from './demoMolfile';
import { demoMolfile } from './demoMolfile';

function App() {
  const [molfile, setMolfile] = useState(demoMolfile);
  const [selectedAtom, setSelectedAtom] = useState({});
  const [hoverAtom, setHoverAtom] = useState({});
  const [highlights, setHighlights] = useState([]); // array of diaIDs
  const [arrows, setArrows] = useState([]); // array of diaIDs

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(hoverAtom, undefined, 2));
  }, [selectedAtom, hoverAtom]);

  const grid = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="flex flex-wrap">
      <div className="flex-col">
        <div>
          <OCLnmr
            molfile={molfile}
            setMolfile={setMolfile}
            setSelectedAtom={setSelectedAtom}
            setHoverAtom={setHoverAtom}
            highlights={highlights}
            label="A label p"
            labelFontSize={15}
            internalAtomHighlightColor="blue"
            internalAtomHighlightOpacity={0.7}
          />
        </div>
        <div className="whitespace-normal">
          Highlights ID. You may enter here
          <br />a list of diastereotopic ID
        </div>
        <br />
        <textarea
          value={highlights.join(',')}
          cols={30}
          rows={10}
          type="text"
          className="border-2 border-gray-500"
          width="100"
          onChange={(event) =>
            setHighlights(event.target.value.split(/[, \r\n\t]+/))
          }
        />
        <br />
        Set arrows:
        <table>
          <tbody>
            {grid.map((i) => (
              <tr key={i}>
                {grid.map((j) => (
                  <td
                    key={j}
                    onClick={() => setArrows([{ atom1: i, atom2: j }])}
                  >
                    {i}-{j}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <textarea
        value={molfile}
        className="font-mono text-sm"
        cols={60}
        rows={40}
        readOnly
      />
      <ClickedDebug selected={selectedAtom} onClick={setHighlights} />
    </div>
  );
}

export default App;
