import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

interface iCategoryCard {
  image?: string;
  category: string;
}

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function CategoryCard({ image, category }: iCategoryCard) {
  const card = useRef<HTMLDivElement>(null);

  // HOVER ANIMATION
  useEffect(() => {
    const gsapContext = gsap.context(() => {
      const imageHoverAnimation = gsap.to('.category_card_image', {
        rotateZ: 360,
        scale: 1.1,
        paused: true,
        duration: 0.5,
      });
      const titleHoverAnimation = gsap.to('.category_card_title', {
        yPercent: 50,
        color: 'var(--clr-accent)',
        paused: true,
        duration: 0.5,
      });

      const cardClickAnimation = gsap.to('.category_card_image', {
        scale: 0.8,
        duration: 0.1,
        paused: true,
      });

      card.current?.addEventListener('mouseenter', () => {
        console.log('MOUSE ENTER');
        imageHoverAnimation.play();
        titleHoverAnimation.play();
      });

      card.current?.addEventListener('mouseleave', () => {
        console.log('MOUSE LEAVE');
        imageHoverAnimation.reverse();
        titleHoverAnimation.reverse();
      });

      card.current!.addEventListener('mousedown', () => {
        cardClickAnimation.play();
      });

      card.current!.addEventListener('mouseup', () => {
        cardClickAnimation.reverse();
      });
    }, card);
  }, [image, category]);

  return (
    <div
      ref={card}
      className={`category_card relative aspect-[1/1] w-full h-auto`}>
      <div className={'relative w-full h-full'}>
        <Link
          href={`/categories/${category}`}
          className={'w-full h-full'}>
          <Image
            src={image ?? ''}
            alt={''}
            fill={true}
            className={
              'category_card_image w-full h-full rounded-full border-[4px] border-accent/80 object-cover object-center'
            }
          />
        </Link>
      </div>
      <p className={`category_card_title mb-0 font-semibold text-center`}>
        {category}
      </p>
    </div>
  );
}

export default CategoryCard;
