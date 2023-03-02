import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import Container from '@/components/Container/Container';
import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import RecipeCard from '@/components/RecipeCard/RecipeCard';
import useFetch from '@/hooks/useFetch';
import Head from 'next/head';
import Image from 'next/image';

function Category() {
  const router = useRouter();
  const [execute, result] = useFetch();

  useEffect(() => {
    execute(
      '/api/recipes/category_recipes?category=' + router.query.categoryID,
      {}
    );
  }, [execute, router]);

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
        {/* <Image
          src={}
          alt={''}
          className={'aspect-[16/3] w-full h-auto object-cover border-2'}
        /> */}
        <section className={'w-full h-fit min-h-screen px-4'}>
          <Container>
            <div
              className={
                'w-full h-fit flex flex-row items-center justify-start gap-4'
              }>
              <h1>{router.query.categoryID}</h1>
              <span className={'inline-block w-max whitespace-nowrap'}>
                {`(${
                  (result as { recipes: Array<Recipe> })?.recipes?.length
                } Recipes)`}
              </span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum a
              ullam labore perspiciatis! Quidem, quae doloribus sequi quis
              consectetur neque repudiandae. Adipisci, molestias dicta est illo
              facilis delectus quas nobis nulla reiciendis, qui minima quae
              natus odit numquam! Inventore earum quidem commodi voluptas amet
              mollitia quae ad placeat corrupti ducimus.
            </p>
            {/* <div
              className={
                'w-full h-fit mb-8 flex flex-row items-center justify-end gap-3 font-semibold text-lg'
              }>
              <label htmlFor='sort_type_input'>Sort By: </label>
              <select
                name='sort_by'
                id='sort_type_input'
                defaultValue={'0'}
                className={'px-3 py-2 border-2 rounded-md'}>
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
            </div> */}
            <hr className={'mb-12'} />
            <ul
              className={
                'w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4 '
              }>
              {(result as { recipes: Array<Recipe> })?.recipes?.map(
                (recipeObj) => {
                  return (
                    <li key={`recipe_${Math.random()}`}>
                      <RecipeCard
                        image={recipeObj.strMealThumb}
                        name={recipeObj.strMeal}
                        // likes={5000}
                        // comments={1200}
                        // createdDate={Date.now()}
                        // authorImage={''}
                        // authorName={'Uncle Po'}
                      />
                    </li>
                  );
                }
              )}
            </ul>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Category;
