import React from 'react';
import IframeResizer from 'iframe-resizer-react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Emscripten(props) {
  return (
    <IframeResizer
      src={useBaseUrl(props.src)}
      style={{ width: '1px', minWidth: '100%'}}
    />
  );
}
