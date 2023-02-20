import React, { ReactNode } from 'react';

interface iIconButton {
  children: ReactNode | ReactNode[];
  action?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  classes?: string;
}

function IconButton(props: iIconButton) {
  return (
    <button
      onClick={props.action}
      className={`inline-block w-full h-full p-2 ${props.classes ?? null}`}
    >
      {props.children}
    </button>
  );
}

export default IconButton;
