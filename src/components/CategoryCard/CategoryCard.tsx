import Image from 'next/image';
import React from 'react';

interface iCategoryCard {
  image?: string;
  category: string;
}

function CategoryCard(props: iCategoryCard) {
  return (
    <div className={`relative w-full h-fit`}>
      <Image
        src={props.image ?? ''}
        alt={''}
        className={
          'aspect-[1/1] w-full h-auto rounded-full border-2 object-center'
        }
      />
      <p className={`mb-0 font-semibold text-center`}>{props.category}</p>
    </div>
  );
}

export default CategoryCard;
