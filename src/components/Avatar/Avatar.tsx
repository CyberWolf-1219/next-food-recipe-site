import Image from 'next/image';
import React from 'react';

import { FaUserCircle } from 'react-icons/fa';

const AvatarSizeOptions = {
  sm: 'w-[2rem]',
  md: 'w-[2.5rem]',
  lg: 'w-[3rem]',
  xl: 'w-[4rem]',
};

interface iAvatar {
  image: string;
  size: keyof typeof AvatarSizeOptions;
  classes?: string;
  iconClasses?: string;
}

function Avatar({ image, size, classes, iconClasses }: iAvatar) {
  return (
    <div
      className={`user_avatar relative aspect-[1/1] ${
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
        <FaUserCircle className={`w-full h-full ${iconClasses}`} />
      )}
    </div>
  );
}

export default Avatar;
