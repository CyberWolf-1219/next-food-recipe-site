import React, { useRef, useEffect, useState } from 'react';
import Container from '../Container/Container';
import RecipeCard from '../RecipeCard/RecipeCard';
import useFetch from '@/hooks/useFetch';

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { Recipe } from '@/Types/RecipeApiTypes';
gsap.registerPlugin(ScrollTrigger);

function SuperDeliciousSection() {
  const execute = useFetch();
  const [result, setResult] = useState<{ recipes: Array<Recipe> }>({
    recipes: [],
  });
  const parentElement = useRef(null);
  const timeline = useRef<GSAPTimeline>();

  useEffect(() => {
    const gsapContext = gsap.context(() => {
      timeline.current = gsap
        .timeline({
          defaults: { duration: 0.5, ease: 'power3.out', stagger: 0.3 },
          scrollTrigger: {
            trigger: parentElement.current,
            scrub: false,
            once: true,
            start: 'top 70%',
          },
        })
        .fromTo('h2', { opacity: 0, yPercent: 30 }, { opacity: 1, yPercent: 0 })
        .fromTo(
          '.recipe_card',
          { opacity: 0, yPercent: 30 },
          { opacity: 1, yPercent: 0 }
        );
    }, parentElement);

    return () => {
      gsapContext.revert();
    };
  }, [result]);

  useEffect(() => {
    (async () => {
      const fetchResult = await execute('/api/recipes/popular_recipes', {});
      setResult(fetchResult);
    })();
  }, [execute]);

  return (
    <section
      ref={parentElement}
      className={'px-4 lg:mb-[5rem]'}>
      <Container>
        <div>
          <h2>Super Delicious</h2>
        </div>
        <ul
          className={
            'w-full h-fit grid gird-cols-1 md:grid-cols-3 lg:grid-cols-3 auto-rows-fr gap-4'
          }>
          {result.recipes?.map((recipeObj) => {
            return (
              <Link
                key={`trending_recipe_${Math.random()}`}
                href={`/recipes/${recipeObj.idMeal}`}>
                <li>
                  <RecipeCard
                    id={recipeObj.idMeal}
                    image={recipeObj.strMealThumb}
                    name={recipeObj.strMeal}
                    likes={500000}
                    comments={80000}
                    createdDate={Date.now()}
                    authorImage={''}
                    authorName={recipeObj.strSource}
                  />
                </li>
              </Link>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export default SuperDeliciousSection;
