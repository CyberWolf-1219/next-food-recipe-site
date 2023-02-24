import Image from 'next/image';
import React from 'react';

import { FaUserCircle } from 'react-icons/fa';

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

function Avatar({ image, size, classes }: iAvatar) {
  return (
    <div
      className={`relative aspect-[1/1] ${
        AvatarSizeOptions[size]
      } h-auto rounded-full border-2 ${classes ?? null}`}>
      {image ? (
        <Image
          src={image}
          alt={'user avatar'}
          fill={true}
          className={'rounded-full object-center'}
        />
      ) : (
        <FaUserCircle className={'w-full h-full'} />
      )}
    </div>
  );
}

export default Avatar;
