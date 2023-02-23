import Image from 'next/image';
import React from 'react';

const AvatarSizeOptions = {
  sm: 'w-[1.5rem]',
  md: 'w-[3rem]',
  lg: 'w-[5rem]',
  xl: 'w-[8rem]',
};

interface iAvatar {
  image: string;
  size: keyof typeof AvatarSizeOptions;
  classes?: string;
}

function Avatar(props: iAvatar) {
  return (
    <div
      className={`relative aspect-[1/1] ${
        AvatarSizeOptions[props.size]
      } h-auto rounded-full border-2 ${props.classes ?? null}`}>
      <Image
        src={props.image}
        alt={'user avatar'}
        fill={true}
        className={'rounded-full object-center'}
      />
    </div>
  );
}

export default Avatar;
