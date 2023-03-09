import Container from '@/components/Container/Container';
import Footer from '@/components/Footer/Footer';
import IconButton from '@/components/IconButton/IconButton';
import Navigation from '@/components/Navigation/Navigation';
import RecipeCard from '@/components/RecipeCard/RecipeCard';
import { getServerSession } from 'next-auth';
import Head from 'next/head';
import React, { useContext, useEffect, useState } from 'react';

import { AiFillHeart } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { authOptions } from '../api/auth/[...nextauth]';
import { GetServerSidePropsContext } from 'next';
import useFetch from '@/hooks/useFetch';
import { SavedRecipeContext } from '@/store/SavedRecipeContext';

function Favorites() {
  const savedRecipeContext = useContext(SavedRecipeContext);
  const execute = useFetch();
  const [recipes, setRecipes] = useState<Array<Recipe>>([]);

  useEffect(() => {
    savedRecipeContext.recipeIds.map(async (recipeId) => {
      const result: { recipe: Recipe } = await execute(
        `/api/recipes/recipe?id=${recipeId}`,
        {}
      );
      setRecipes((prevArray) => {
        return [...prevArray, result.recipe];
      });
    });

    return () => {
      setRecipes([]);
    };
  }, [execute, savedRecipeContext]);

  useEffect(() => {
    console.log(recipes);
  }, [recipes]);

  return (
    <>
      <Head>
        <meta
          http-equiv='X-UA-Compatible'
          content='IE=7'
        />
        <meta
          name='description'
          content=''
        />
        <meta
          http-equiv='X-UA-Compatible'
          content='ie=edge'
        />
        <meta
          http-equiv='Content-Type'
          content='text/html;charset=UTF-8'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
      </Head>
      <header>
        <Navigation />
      </header>
      <main>
        <section className={'w-full h-fit px-4'}>
          <Container>
            <div
              className={
                'w-full h-fit mt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between'
              }>
              <h1
                className={
                  'mt-0 mb-0 flex flex-row items-center justify-start gap-[0.25em]'
                }>
                <span
                  className={'relative inline-block w-fit h-fit text-inherit'}>
                  <AiFillHeart className={'text-inherit fill-accent'} />
                  <AiFillHeart
                    size={'1.15em'}
                    className={
                      'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  fill-accent/50 blur-[2px]'
                    }
                  />
                </span>
                Favourites
              </h1>
              <select
                name='sort_by'
                id='sort_type_input'
                defaultValue={'0'}
                className={
                  'w-full lg:w-fit h-fit mt-4 px-3 py-2 border-2 rounded-md'
                }>
                <option
                  value='0'
                  disabled={true}>
                  Sort
                </option>
                <option value='1'>Likes</option>
                <option value='2'>Comments</option>
                <option value='3'>Created Date</option>
                <option value='4'>Ingredient Count</option>
                <option value='5'>Prepare Time</option>
              </select>
            </div>
            <hr />
          </Container>
        </section>
        <section className={'w-full h-fit min-h-screen px-4 py-8'}>
          <Container>
            {/* <IconButton
              classes={
                'flex flex-row items-center justify-center gap-2 bg-accent text-white shadow-md shadow-accent/30'
              }
              disabled={true}>
              <MdDelete />
              Delete Selected
            </IconButton> */}
            {recipes.length == 0 ? (
              <p
                className={
                  'w-full h-fit font-bold text-3xl text-gray-500 text-center'
                }>
                Looks Like You Don&apos;t Have Any Favourite Recipes.
              </p>
            ) : (
              <ul
                className={
                  'w-full h-fit mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4'
                }>
                {recipes.map((recipe) => {
                  return (
                    <li key={`favouirte_recipe_${Math.random()}`}>
                      <RecipeCard
                        id={recipe.idMeal}
                        image={recipe.strMealThumb}
                        name={recipe.strMeal}
                        // likes={890000}
                        // comments={500000}
                        // createdDate={Date.now()}
                        // authorImage={''}
                        // authorName={''}
                      />
                    </li>
                  );
                })}
              </ul>
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Favorites;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanenet: false,
      },
    };
  } else {
    return {
      props: {},
    };
  }
}
