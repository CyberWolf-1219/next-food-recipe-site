import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface iPortal {
  children: React.ReactNode;
  selector: string;
}

function Portal({ children, selector }: iPortal) {
  const mountElement = useRef<HTMLDivElement>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    mountElement.current = document.querySelector(selector) as HTMLDivElement;
    if (mountElement.current) {
      setMounted(true);
    }
  }, [selector]);

  return mounted ? createPortal(children, mountElement.current!) : null;
}

export default Portal;
