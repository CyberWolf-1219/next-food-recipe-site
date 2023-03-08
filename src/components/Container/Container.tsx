import React, { ReactNode } from 'react';

interface iContainer {
  children: ReactNode | ReactNode[];
  relative?: boolean;
}

function Container(props: iContainer) {
  return (
    <div
      className={`${
        props.relative ? 'relative' : null
      } w-full h-fit max-w-screen-lg mx-auto`}>
      {props.children}
    </div>
  );
}

export default Container;
