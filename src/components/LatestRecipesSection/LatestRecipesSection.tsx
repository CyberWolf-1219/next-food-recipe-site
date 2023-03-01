import React, { useEffect } from 'react';
import Container from '../Container/Container';
import RecipeCard from '../RecipeCard/RecipeCard';
import Link from 'next/link';
import useFetch from '@/hooks/useFetch';

function LatestRecipesSection() {
  const [execute, result] = useFetch();

  useEffect(() => {
    execute('/api/recipes/latest_recipes', {});
  }, [execute]);

  return (
    <section className={`px-4 lg:pb-[8rem]`}>
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
