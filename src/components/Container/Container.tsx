import React, { ReactNode } from 'react';

interface iContainer {
  children: ReactNode | ReactNode[];
}

function Container(props: iContainer) {
  return <div className='w-full h-fit max-w-screen-xl'>{props.children}</div>;
}

export default Container;
