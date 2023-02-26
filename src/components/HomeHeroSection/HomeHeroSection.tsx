import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import IconButton from '../IconButton/IconButton';
import HeroSlide from '../HeroSlide/HeroSlide';
import { nextButtonHandler } from './logic';
import { ResponseRecipeObject } from '@/Types/RecipeApiTypes';
import CustomeFetch from '@/utility/Fetch';

type slidePositions = [number, number, number, number, number];

function HomeHeroSection() {
  const [slides, setSlides] = useState<Array<ResponseRecipeObject>>([]);
  const [slidePositions, setSlidePositions] = useState<slidePositions>([
    1, 2, 3, 4, 5,
  ]);

  useEffect(() => {
    (async () => {
      const result = await CustomeFetch('/api/recipe/getTrendingRecipes', {});
      setSlides(result);
    })();

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
        className={`relative aspect-[1/1] lg:aspect-[16/9] w-screen lg:w-full h-auto flex flex-row bg-white overflow-hidden`}>
        {/* SLIDE */}

        {slides.map((recipeObject, index) => {
          return (
            <HeroSlide
              key={`hero_slide_${Math.random()}`}
              image={recipeObject.recipe.image}
              heading={recipeObject.recipe.label}
              position={slidePositions[index].toString()}
            />
          );
        })}
      </div>
      {/* CONTROLS */}
      <div className={'absolute z-[5]  bottom-0 right-0'}>
        <IconButton
          action={(e) => {
            nextButtonHandler(setSlidePositions, e);
          }}>
          <FaArrowRight size={'2rem'} />
        </IconButton>
      </div>
    </section>
  );
}

export default HomeHeroSection;
