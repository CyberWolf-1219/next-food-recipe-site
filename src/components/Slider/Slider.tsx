import React, { useRef, useEffect, useState } from 'react';
import useFetch from '@/hooks/useFetch';
import HeroSlide from '../HeroSlide/HeroSlide';

import styleClasses from './styles.module.css';
import { Recipe } from '@/Types/RecipeApiTypes';

let initial = true;

function Slider() {
  const execute = useFetch();
  const [result, setResult] = useState<{ recipes: Array<Recipe> }>({
    recipes: [],
  });
  const slider = useRef<HTMLDivElement>(null);
  const mouseDown = useRef(false);
  const mouseStart = useRef(0);

  // RECIPE FETCH
  useEffect(() => {
    (async () => {
      const fetchResult = await execute('/api/recipes/trending_recipes', {});
      setResult(fetchResult);
    })();
  }, [execute]);

  // DRAG CONTROLL
  useEffect(() => {
    if (!initial) return;

    slider.current!.addEventListener('mousedown', (e: MouseEvent) => {
      e.preventDefault();
      mouseDown.current = true;
      mouseStart.current = e.x;
    });

    slider.current!.addEventListener('mousemove', (e: MouseEvent) => {
      e.preventDefault();
      if (!mouseDown.current) return;
      const dragDirection = mouseStart.current - e.x > 0 ? 1 : -1;
      const currentSliderPosition = slider.current!.scrollLeft;

      slider.current!.scrollTo(currentSliderPosition + 10 * dragDirection, 0);
    });

    slider.current!.addEventListener('mouseup', (e: MouseEvent) => {
      mouseDown.current = false;
    });

    initial = false;
  }, []);

  return (
    <div className={'w-screen h-fit'}>
      {/* SLIDE CONTAINER */}
      <div
        ref={slider}
        className={`${styleClasses.slider} relative w-screen lg:w-full h-fit pt-[5rem] pb-[1rem] flex flex-row gap-[1rem] bg-white overflow-x-auto`}>
        {/* SLIDES */}
        {result.recipes.map((recipeObject, index) => {
          return (
            <HeroSlide
              key={`hero_slide_${Math.random()}`}
              recipeID={recipeObject.idMeal}
              title={recipeObject.strMeal}
              recipeCategory={recipeObject.strCategory}
              imageURI={recipeObject.strMealThumb}
              tags={recipeObject.strTags?.split(',')}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
