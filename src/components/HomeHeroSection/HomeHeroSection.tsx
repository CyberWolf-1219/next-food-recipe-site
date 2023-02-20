import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import IconButton from '../IconButton/IconButton';
import HeroSlide from '../HeroSlide/HeroSlide';
import { nextButtonHandler } from './logic';
import Container from '../Container/Container';

type slidePositions = [number, number, number, number, number];

function HomeHeroSection() {
  const [slidePositions, setSlidePositions] = useState<slidePositions>([
    1, 2, 3, 4, 5,
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextButtonHandler(setSlidePositions);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className={`relative w-full h-fit`}>
      {/* SLIDE CONTAINER */}
      <div
        className={`relative aspect-[1/1] lg:aspect-[16/9] w-screen lg:w-full h-auto flex flex-row bg-white overflow-hidden`}
      >
        {/* SLIDE */}
        <HeroSlide
          heading={'01'}
          position={slidePositions[0].toString()}
        />
        <HeroSlide
          heading={'02'}
          position={slidePositions[1].toString()}
        />
        <HeroSlide
          heading={'03'}
          position={slidePositions[2].toString()}
        />
        <HeroSlide
          heading={'04'}
          position={slidePositions[3].toString()}
        />
        <HeroSlide
          heading={'05'}
          position={slidePositions[4].toString()}
        />
      </div>
      {/* CONTROLS */}
      <div className={'absolute z-[5]  bottom-0 right-0'}>
        <IconButton
          action={(e) => {
            nextButtonHandler(setSlidePositions, e);
          }}
        >
          <FaArrowRight size={'2rem'} />
        </IconButton>
      </div>
    </section>
  );
}

export default HomeHeroSection;
