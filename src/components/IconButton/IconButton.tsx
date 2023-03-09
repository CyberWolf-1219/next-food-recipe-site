import React, { ReactNode } from 'react';

const widthOptions = {
  full: 'w-full',
  fit: 'w-fit',
};

const heightOptions = {
  full: 'h-full',
  fit: 'h-fit',
};

interface iIconButton {
  children: ReactNode | ReactNode[];
  width?: keyof typeof widthOptions;
  height?: keyof typeof heightOptions;
  disabled?: boolean;
  action?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  classes?: string;
}

function IconButton(props: iIconButton) {
  return (
    <button
      onClick={props.action}
      className={`icon_button inline-block ${
        widthOptions[props.width ?? 'full']
      } ${
        heightOptions[props.height ?? 'fit']
      } px-3 py-2 rounded-md disabled:bg-gray-300 disabled:text-gray-400 disabled:shadow-transparent ${
        props.classes ?? null
      }`}
      disabled={props.disabled ?? false}>
      {props.children}
    </button>
  );
}

export default IconButton;
