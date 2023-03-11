import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

import styleClasses from './styles.module.css';
import IconButton from '../IconButton/IconButton';
import { GiCook } from 'react-icons/gi';
import { useRouter } from 'next/router';

interface iHeroSlide {
  recipeCategory: string;
  recipeID: string;
  tags: Array<string>;
  imageURI: string;
  title: string;
}

function HeroSlide({ recipeCategory, recipeID, imageURI, title }: iHeroSlide) {
  const router = useRouter();

  function viewRecipe(e: React.MouseEvent | React.TouchEvent) {
    e.preventDefault();
    router.replace(`/recipes/${recipeID}`);
  }

  return (
    <article
      className={`${styleClasses.card} slide inline-block aspect-[4/3] min-w-[300px] h-auto bg-white rounded-md p-[1rem] shadow-sm`}>
      {/* DECORATION */}
      <div className={'w-full h-fit pointer-events-none'}>
        <div
          className={
            'w-[100px] h-[20px] mx-auto bg-white shadow-[inset_0px_1px_3px_0px_black] rounded-full'
          }></div>
      </div>

      {/* CATEGORY */}
      <h4
        className={'m-0 mt-[2rem] mb-[0.5rem] text-[1rem] pointer-events-none'}>
        {recipeCategory}
      </h4>

      {/* TITLE */}
      <h3
        className={
          'm-0 mb-[1rem] font-secondary leading-[1.5] truncate pointer-events-none'
        }>
        {title}
      </h3>

      {/* IMAGE */}
      <div
        className={'relative aspect-[4/3] w-full h-auto pointer-events-none'}>
        <Image
          src={imageURI}
          alt={title}
          fill={true}
          className={'object-cover pointer-events-none'}
        />
      </div>

      {/* BUTTON */}
      <IconButton
        width={'full'}
        height={'fit'}
        action={viewRecipe}
        classes={
          'mt-[1rem] flex flex-row items-center justify-center gap-[0.5rem] text-white bg-accent'
        }>
        <GiCook /> View Recipe
      </IconButton>
    </article>
  );
}

export default HeroSlide;
