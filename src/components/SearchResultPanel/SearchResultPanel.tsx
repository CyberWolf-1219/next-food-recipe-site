import React, { useRef, useEffect } from 'react';
import Container from '../Container/Container';
import RecipeCard from '../RecipeCard/RecipeCard';

import { gsap } from 'gsap/dist/gsap';
import Link from 'next/link';

interface iSearchResultPanel {
  resultsArray: Array<Recipe>;
}

function SearchResultPanel({ resultsArray }: iSearchResultPanel) {
  const parentElement = useRef(null);
  const timeline = useRef<GSAPTimeline>();

  // MOVE IN ANIMATION
  useEffect(() => {
    const gsapContext = gsap.context(() => {
      timeline.current = gsap
        .timeline({
          defaults: { duration: 0.5, ease: 'power3.out', stagger: 0.3 },
        })
        .fromTo(
          'li',
          { yPercent: 30, opacity: 0 },
          { yPercent: 0, opacity: 1 }
        );
    }, parentElement);

    return () => {
      gsapContext.revert();
    };
  }, [resultsArray]);

  return (
    <section
      ref={parentElement}
      className={'w-full min-h-screen px-4'}>
      <Container>
        <div>
          <h2>Recipes</h2>
          <ul
            className={
              'w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:md:grid-cols-3 auto-rows-fr gap-4'
            }>
            {resultsArray.map((resultObj) => {
              return (
                <Link
                  key={`search_recipe_${Math.random()}`}
                  href={`/recipes/${resultObj.idMeal}`}>
                  <li>
                    <RecipeCard
                      id={resultObj.idMeal}
                      image={resultObj.strMealThumb}
                      name={resultObj.strMeal}
                      // likes={resultObj.likes}
                      // comments={resultObj.comments}
                      // createdDate={resultObj.createdDate}
                      // authorImage={resultObj.image}
                      // authorName={resultObj.authorName}
                    />
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default SearchResultPanel;
