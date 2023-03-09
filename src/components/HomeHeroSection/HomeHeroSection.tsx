import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';

import HeroSlide from '../HeroSlide/HeroSlide';
import Container from '../Container/Container';
import IconButton from '../IconButton/IconButton';
import { changeSlidePosition } from './logic';
import useFetch from '@/hooks/useFetch';

import { FaArrowRight } from 'react-icons/fa';

import gsap from 'gsap';

function HomeHeroSection() {
  const execute = useFetch();
  const slides = useRef<Array<HTMLDivElement>>([]);
  const [result, setResult] = useState<{ recipes: Array<Recipe> }>({
    recipes: [],
  });
  const timeline = useRef<GSAPTimeline>();
  const parentElement = useRef(null);

  useLayoutEffect(() => {
    const gsapContext = gsap.context(() => {
      timeline.current = gsap
        .timeline({ defaults: { duration: 0.3, ease: 'power3.out' } })
        .fromTo(
          parentElement.current,
          { yPercent: -100, opacity: 0 },
          { yPercent: 0, opacity: 1, delay: 3 }
        );
    }, parentElement);

    return () => {
      gsapContext.revert();
    };
  }, []);

  useEffect(() => {
    (async () => {
      const fetchResult = await execute('/api/recipes/trending_recipes', {});
      setResult(fetchResult);
    })();
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
    <section
      ref={parentElement}
      className={`relative z-[2] w-full h-fit mb-[5rem]`}>
      <Container relative={true}>
        {/* SLIDE CONTAINER */}
        <div
          className={`relative aspect-[1/1] lg:aspect-[3/1.5] w-screen lg:w-full h-auto flex flex-row bg-white overflow-hidden`}>
          {/* SLIDES */}
          {result.recipes.map((recipeObject, index) => {
            return (
              <HeroSlide
                key={`hero_slide_${Math.random()}`}
                image={recipeObject.strMealThumb}
                heading={recipeObject.strMeal}
                position={(index + 1).toString()}
                slideRefHolder={slides.current}
              />
            );
          })}
        </div>
        {/* CONTROLS */}
        <div className={'absolute z-[3]  bottom-0 right-0'}>
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
