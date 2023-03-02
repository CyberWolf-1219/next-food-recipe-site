import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface iCategoryCard {
  image?: string;
  category: string;
}

function CategoryCard({ image, category }: iCategoryCard) {
  return (
    <div className={`relative aspect-[1/1] w-full h-auto`}>
      <div className={'relative w-full h-full'}>
        <Link
          href={`/categories/${category}`}
          className={'w-full h-full'}>
          <Image
            src={image ?? ''}
            alt={''}
            fill={true}
            className={
              'w-full h-full rounded-full border-[4px] border-accent/80 object-cover object-center'
            }
          />
        </Link>
      </div>
      <p className={`mb-0 font-semibold text-center`}>{category}</p>
    </div>
  );
}

export default CategoryCard;
