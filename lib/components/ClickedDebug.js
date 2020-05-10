import React from 'react';
import { IdcodeSvgRenderer } from 'react-ocl';
export default function ClickedDebug(props) {
  let {
    selected,
    onClick
  } = props;
  return /*#__PURE__*/React.createElement(React.Fragment, null, selected && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex-col"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xl"
  }, "Selected"), /*#__PURE__*/React.createElement("pre", null, selected.oclID), /*#__PURE__*/React.createElement("div", {
    onClick: () => onClick([selected.oclID])
  }, selected.oclID && /*#__PURE__*/React.createElement(IdcodeSvgRenderer, {
    idcode: selected.oclID
  }))), selected.nbHydrogens && /*#__PURE__*/React.createElement("div", {
    className: "flex-col"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xl"
  }, "List of hydrogens"), props.selected.hydrogenOCLIDs.map(oclid => /*#__PURE__*/React.createElement("div", {
    key: oclid
  }, /*#__PURE__*/React.createElement("pre", null, oclid), /*#__PURE__*/React.createElement("div", {
    onClick: () => onClick([oclid])
  }, /*#__PURE__*/React.createElement(IdcodeSvgRenderer, {
    idcode: oclid
  }))))), selected.heavyAtom && /*#__PURE__*/React.createElement("div", {
    className: "flex-col"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xl"
  }, "Connected heavy atom"), /*#__PURE__*/React.createElement("pre", null, selected.heavyAtom), /*#__PURE__*/React.createElement("div", {
    onClick: () => onClick([selected.heavyAtom])
  }, /*#__PURE__*/React.createElement(IdcodeSvgRenderer, {
    idcode: selected.heavyAtom
  })))));
}