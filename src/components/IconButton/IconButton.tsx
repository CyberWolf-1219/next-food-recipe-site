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
      className={`aspect-[1/1] w-fit h-auto p-2 ${props.classes ?? null}`}
    >
      {props.children}
    </button>
  );
}

export default IconButton;
