import React, { useEffect, useRef } from 'react';

export default function AutofocusIframe(props) {
  const iframeRef = useRef(null);

  useEffect(() => {
    iframeRef.current.focus();
  }, []);

  return <iframe ref={iframeRef} {...props} />;
}
