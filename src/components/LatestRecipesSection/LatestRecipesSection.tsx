import React, { useRef, useEffect, useState } from 'react';
import Container from '../Container/Container';
import RecipeCard from '../RecipeCard/RecipeCard';
import Link from 'next/link';
import useFetch from '@/hooks/useFetch';

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function LatestRecipesSection() {
  const execute = useFetch();
  const [result, setResult] = useState<{ recipes: Array<Recipe> }>({
    recipes: [],
  });
  const timeline = useRef<GSAPTimeline>();
  const parentElement = useRef(null);

  useEffect(() => {
    const gsapContext = gsap.context(() => {
      timeline.current = gsap
        .timeline({
          defaults: { duration: 0.5, stagger: 0.2 },
          scrollTrigger: {
            trigger: parentElement.current,
            scrub: false,
            once: true,
            start: 'top 50%',
          },
        })
        .fromTo(
          'h2',
          { opacity: 0, yPercent: 100 },
          { opacity: 1, yPercent: 0 }
        )
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
      const fetchResult = await execute('/api/recipes/latest_recipes', {});
      setResult(fetchResult);
    })();
  }, [execute]);

  return (
    <section
      ref={parentElement}
      className={`px-4 lg:mb-[5rem]`}>
      <Container>
        <div>
          <h2>Latest Recipes</h2>
          <ul
            className={
              'w-full h-fit grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 auto-rows-auto gap-4'
            }>
            {(result as { recipes: Array<Recipe> })?.recipes.map(
              (recipeObj) => {
                return (
                  <li key={`latest_recipe_${Math.random()}`}>
                    <Link href={'#'}>
                      <RecipeCard
                        id={recipeObj.idMeal}
                        image={recipeObj.strMealThumb}
                        name={recipeObj.strMeal}
                        likes={500000}
                        comments={580000}
                        createdDate={Date.now()}
                      />
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default LatestRecipesSection;
