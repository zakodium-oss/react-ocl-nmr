import { IdcodeSvgRenderer } from 'react-ocl';

export default function ClickedDebug(props) {
  let { selected, onClick } = props;
  return (
    <>
      {selected && (
        <>
          <div className="flex-col">
            <p className="text-xl">Selected</p>
            <pre>{selected.idCode}</pre>
            <div onClick={() => onClick([selected.idCode])}>
              {selected.idCode && (
                <IdcodeSvgRenderer idcode={selected.idCode} />
              )}
            </div>
          </div>
          {selected.nbAttachedHydrogens && (
            <div className="flex-col">
              <p className="text-xl">List of hydrogens</p>
              {props.selected.attachedHydrogensIDCodes.map((oclid) => (
                <div key={oclid}>
                  <pre>{oclid}</pre>
                  <div onClick={() => onClick([oclid])}>
                    <IdcodeSvgRenderer idcode={oclid} />
                  </div>
                </div>
              ))}
            </div>
          )}
          {selected.heavyAtom && (
            <div className="flex-col">
              <p className="text-xl">Connected heavy atom</p>
              <pre>{selected.heavyAtom}</pre>
              <div onClick={() => onClick([selected.heavyAtom])}>
                <IdcodeSvgRenderer idcode={selected.heavyAtom} />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
