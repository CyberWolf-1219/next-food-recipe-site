import React, { useState } from 'react';
import Container from '../Container/Container';
import RecipeCard from '../RecipeCard/RecipeCard';

type SuperDeliciousRecipy = {
  image: string;
  name: string;
  likes: number;
  comments: number;
  createdDate: number;
  authorName: string;
  authorImage: string;
};

function SuperDeliciousSection() {
  const [trendingRecipes, setTrendingRecipes] = useState<
    Array<SuperDeliciousRecipy>
  >([
    {
      image: '',
      name: 'Chocolate Cake',
      likes: 1400,
      comments: 987,
      createdDate: Date.now(),
      authorName: 'Kaely Brimston',
      authorImage: '',
    },
    {
      image: '',
      name: 'Chocolate Cake',
      likes: 1400,
      comments: 987,
      createdDate: Date.now(),
      authorName: 'Kaely Brimston',
      authorImage: '',
    },
    {
      image: '',
      name: 'Chocolate Cake',
      likes: 1400,
      comments: 987,
      createdDate: Date.now(),
      authorName: 'Kaely Brimston',
      authorImage: '',
    },
    {
      image: '',
      name: 'Chocolate Cake',
      likes: 1400,
      comments: 987,
      createdDate: Date.now(),
      authorName: 'Kaely Brimston',
      authorImage: '',
    },
    {
      image: '',
      name: 'Chocolate Cake',
      likes: 1400,
      comments: 987,
      createdDate: Date.now(),
      authorName: 'Kaely Brimston',
      authorImage: '',
    },
  ]);

  return (
    <section className={'px-4 lg:pb-[8rem]'}>
      <Container>
        <div>
          <h2>Super Delicious</h2>
        </div>
        <ul
          className={
            'w-full h-fit grid gird-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr gap-4'
          }
        >
          {trendingRecipes.map((recipeObj) => {
            return (
              <li key={`trending_recipe_${Math.random()}`}>
                <RecipeCard
                  image={recipeObj.image}
                  name={recipeObj.name}
                  likes={recipeObj.likes}
                  comments={recipeObj.comments}
                  createdDate={recipeObj.createdDate}
                  authorImage={recipeObj.image}
                  authorName={recipeObj.authorName}
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
