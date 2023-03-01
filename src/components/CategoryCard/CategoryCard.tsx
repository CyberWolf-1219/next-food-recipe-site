import Image from 'next/image';
import React from 'react';

interface iCategoryCard {
  image?: string;
  category: string;
}

function CategoryCard(props: iCategoryCard) {
  return (
    <div className={`relative aspect-[1/1] w-full h-auto`}>
      <div className={'relative w-full h-full'}>
        <Image
          src={props.image ?? ''}
          alt={''}
          fill={true}
          className={
            'w-full h-full rounded-full border-2 border-accent/80 object-cover object-center'
          }
        />
      </div>
      <p className={`mb-0 font-semibold text-center`}>{props.category}</p>
    </div>
  );
}

export default CategoryCard;
