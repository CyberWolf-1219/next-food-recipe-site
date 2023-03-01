import React, { useEffect } from 'react';
import Container from '../Container/Container';
import RecipeCard from '../RecipeCard/RecipeCard';
import useFetch from '@/hooks/useFetch';

function SuperDeliciousSection() {
  const [execute, result] = useFetch();

  useEffect(() => {
    execute('/api/recipes/popular_recipes', {});
  }, [execute]);

  return (
    <section className={'px-4 lg:pb-[8rem]'}>
      <Container>
        <div>
          <h2>Super Delicious</h2>
        </div>
        <ul
          className={
            'w-full h-fit grid gird-cols-1 md:grid-cols-3 lg:grid-cols-3 auto-rows-fr gap-4'
          }>
          {(result as { recipes: Array<Recipe> })?.recipes?.map((recipeObj) => {
            return (
              <li key={`trending_recipe_${Math.random()}`}>
                <RecipeCard
                  image={recipeObj.strMealThumb}
                  name={recipeObj.strMeal}
                  likes={500000}
                  comments={80000}
                  createdDate={Date.now()}
                  authorImage={''}
                  authorName={recipeObj.strSource}
                />
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export default SuperDeliciousSection;
