import React, { useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import IconButton from '../IconButton/IconButton';
import HeroSlide from '../HeroSlide/HeroSlide';
import { changeSlidePosition } from './logic';
import useFetch from '@/hooks/useFetch';
import Container from '../Container/Container';

function HomeHeroSection() {
  const [execute, result] = useFetch();
  const slides = useRef<Array<HTMLDivElement>>([]);

  useEffect(() => {
    execute('/api/recipes/trending_recipes', {});
  }, [execute]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      changeSlidePosition(slides.current);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function nextButtonHandler() {
    changeSlidePosition(slides.current);
  }

  return (
    <section className={`relative w-full h-fit`}>
      <Container relative={true}>
        {/* SLIDE CONTAINER */}
        <div
          className={`relative aspect-[1/1] lg:aspect-[3/1.5] w-screen lg:w-full h-auto flex flex-row bg-white overflow-hidden`}>
          {/* SLIDE */}

          {(result as { recipes: Array<Recipe> })?.recipes.map(
            (recipeObject, index) => {
              return (
                <HeroSlide
                  key={`hero_slide_${Math.random()}`}
                  image={recipeObject.strMealThumb}
                  heading={recipeObject.strMeal}
                  position={(index + 1).toString()}
                  slideRefHolder={slides.current}
                />
              );
            }
          )}
        </div>
        {/* CONTROLS */}
        <div className={'absolute z-[5]  bottom-0 right-0'}>
          <IconButton
            action={(e) => {
              nextButtonHandler();
            }}>
            <FaArrowRight
              size={'2rem'}
              className={
                'aspect-[1/1] w-fit h-auto p-3 fill-white rounded-full bg-accent'
              }
            />
          </IconButton>
        </div>
      </Container>
    </section>
  );
}

export default HomeHeroSection;
