import React, { ReactNode } from 'react';

const widthOptions = {
  full: 'w-full',
  fit: 'w-fit',
};

const heightOptions = {
  full: 'w-full',
  fit: 'w-fit',
};

interface iIconButton {
  children: ReactNode | ReactNode[];
  width?: keyof typeof widthOptions;
  height?: keyof typeof heightOptions;
  action?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  classes?: string;
}

function IconButton(props: iIconButton) {
  return (
    <button
      onClick={props.action}
      className={`inline-block ${widthOptions[props.width ?? 'full']} ${
        heightOptions[props.height ?? 'fit']
      } p-2 ${props.classes ?? null}`}
    >
      {props.children}
    </button>
  );
}

export default IconButton;
