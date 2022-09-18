import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export const Highlight = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <span
      style={{
        backgroundColor: colorMode === 'light' ? '#0564ff' : '#fa9b00',
        borderRadius: '2px',
        color: colorMode === 'light' ? '#fff' : '#000',
        padding: '0.2rem',
      }}
    >
      {children}
    </span>
  );
};
