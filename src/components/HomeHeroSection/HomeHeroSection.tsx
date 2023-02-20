import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import IconButton from '../IconButton/IconButton';
import HeroSlide from '../HeroSlide/HeroSlide';

type slidePositions = [number, number, number, number, number];

function decreaseSlidePositions(positions: slidePositions): slidePositions {
  const newPositionsArray = positions.map((val) => {
    return val == 1 ? 5 : val - 1;
  });
  console.log(positions, newPositionsArray);
  return newPositionsArray as slidePositions;
}

function HomeHeroSection() {
  const [slidePositions, setSlidePositions] = useState<slidePositions>([
    1, 2, 3, 4, 5,
  ]);

  function nextButtonHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setSlidePositions(decreaseSlidePositions);
  }

  return (
    <section className={`relative w-full h-fit`}>
      {/* SLIDE CONTAINER */}
      <div
        className={`relative aspect-[1/1] w-screen h-auto flex flex-row bg-white`}
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
        <IconButton action={nextButtonHandler}>
          <FaArrowRight size={'2rem'} />
        </IconButton>
      </div>
    </section>
  );
}

export default HomeHeroSection;
