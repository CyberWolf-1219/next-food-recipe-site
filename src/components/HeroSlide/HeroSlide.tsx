import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

import styleClasses from './styles.module.css';

interface iHeroSlide {
  image: string;
  position: string;
  heading: string;
  slideRefHolder: Array<HTMLDivElement>;
}

function HeroSlide({ image, position, heading, slideRefHolder }: iHeroSlide) {
  const slide = useRef<HTMLDivElement>(null);
  useEffect(() => {
    slideRefHolder[parseInt(position)] = slide.current!;

    return () => {};
  }, [slideRefHolder, position]);

  return (
    <div
      ref={slide}
      data-position={position}
      className={`${styleClasses.slide} absolute aspect-[1/1] lg:aspect-[3/1.5] w-screen lg:w-full h-auto transition-transform transform-gpu duration-[500ms] bg-white`}>
      <Image
        src={image}
        alt={heading}
        fill={true}
        priority={true}
        className={`aspect-[1/1] lg:aspect-[3/1.5] w-full h-auto object-cover filter saturate-[1.1] blur-[0.5px]`}
      />
      <h2
        className={`absolute z-[2] left-0 bottom-4 w-fit h-fit px-2 py-1   text-white bg-accent/70`}>
        {heading}
      </h2>
    </div>
  );
}

export default HeroSlide;
