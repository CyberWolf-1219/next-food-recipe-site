import React, { useState } from 'react';
import Container from '../Container/Container';
import RecipeCard from '../RecipeCard/RecipeCard';
import Link from 'next/link';

type LatestRecipe = {
  image: string;
  name: string;
  createdDate: number;
  likes: number;
  comments: number;
  authorName: string;
  authorImage: string;
};

const dummyVals: Array<LatestRecipe> = [
  {
    image: '',
    name: 'Butter Blueberry Buns',
    createdDate: Date.now(),
    likes: 50,
    comments: 0,
    authorName: 'Amy Wang',
    authorImage: '',
  },
  {
    image: '',
    name: 'Butter Blueberry Buns',
    createdDate: Date.now(),
    likes: 50,
    comments: 0,
    authorName: 'Amy Wang',
    authorImage: '',
  },
  {
    image: '',
    name: 'Butter Blueberry Buns',
    createdDate: Date.now(),
    likes: 50,
    comments: 0,
    authorName: 'Amy Wang',
    authorImage: '',
  },
  {
    image: '',
    name: 'Butter Blueberry Buns',
    createdDate: Date.now(),
    likes: 50,
    comments: 0,
    authorName: 'Amy Wang',
    authorImage: '',
  },
  {
    image: '',
    name: 'Butter Blueberry Buns',
    createdDate: Date.now(),
    likes: 50,
    comments: 0,
    authorName: 'Amy Wang',
    authorImage: '',
  },
];

function LatestRecipesSection() {
  const [latestRecipes, setLatestRecipes] =
    useState<Array<LatestRecipe>>(dummyVals);

  return (
    <section className={`w-full h-fit px-4`}>
      <Container>
        <div>
          <h2>Latest Recipes</h2>
          <ul
            className={
              'w-full h-fit grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-4'
            }
          >
            {latestRecipes.map((recipeObj) => {
              return (
                <li key={`latest_recipe_${Math.random()}`}>
                  <Link href={'#'}>
                    <RecipeCard
                      image={recipeObj.image}
                      name={recipeObj.name}
                      likes={recipeObj.likes}
                      comments={recipeObj.comments}
                      createdDate={recipeObj.createdDate}
                      authorName={recipeObj.authorName}
                      authorImage={recipeObj.authorImage}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default LatestRecipesSection;
