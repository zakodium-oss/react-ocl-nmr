import React from 'react';
import { MolfileSvgRenderer } from 'react-ocl';

export default function OCLnmr(props) {
  return (
    <>
      <MolfileSvgRenderer {...props} />
    </>
  );
}
