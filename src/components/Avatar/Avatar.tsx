import Image from 'next/image';
import React from 'react';

const AvatarSizeOptions = {
  sm: 'w-[2.5rem]',
  md: 'w-[5rem]',
  lg: 'w-[6.5rem]',
  xl: 'w-[8rem]',
};

interface iAvatar {
  image: string;
  size: keyof typeof AvatarSizeOptions;
}

function Avatar(props: iAvatar) {
  return (
    <div
      className={`relative aspect-[1/1] ${
        AvatarSizeOptions[props.size]
      } h-auto rounded-full border-2`}
    >
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
