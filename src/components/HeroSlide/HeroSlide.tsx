import React from 'react';
import Image from 'next/image';

import styleClasses from './styles.module.css';

interface iHeroSlide {
  position: string;
  heading: string;
}

function HeroSlide(props: iHeroSlide) {
  return (
    <div
      data-position={props.position}
      className={`${styleClasses.slide} absolute aspect-[1/1] lg:aspect-[16/9] w-screen lg:w-full h-auto transition-transform transform-gpu duration-[500ms] bg-white`}
    >
      <Image
        src={''}
        alt={''}
        fill={true}
        className={`aspect-[1/1] lg:aspect-[16/9] w-full h-auto`}
      />
      <h2 className={`absolute z-[2] w-fit h-fit left-4 bottom-4`}>
        {props.heading}
      </h2>
    </div>
  );
}

export default HeroSlide;
