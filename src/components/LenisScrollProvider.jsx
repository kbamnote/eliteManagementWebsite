import React, { useEffect, useRef } from 'react';
import { useLenis } from 'lenis/react';

const LenisScrollProvider = ({ children }) => {
  const lenis = useLenis(({ scroll }) => {
    // Optional: Update scroll value
  });

  return <>{children}</>;
};

export default LenisScrollProvider;