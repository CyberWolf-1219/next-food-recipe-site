import React from 'react';

import Container from '../Container/Container';

function RecipeViewIngredients() {
  return (
    <section
      className={'md:col-start-1 md:col-end-4 lg:col-end-5 w-full h-fit px-4'}>
      <Container>
        <h2>Ingredients</h2>
        <ul>
          {[...Array(10)].map((_, index) => {
            return (
              <li
                key={`ingredient_${Math.random()}`}
                className={
                  'w-full h-fit flex flex-row items-center justify-start gap-2 font-semibold'
                }>
                <input
                  type='checkbox'
                  name=''
                  id={`ingredient_${index}`}
                  className={'w-[1rem] h-[1rem]'}
                  value={1}
                />
                <label
                  htmlFor={`ingredient_${index}`}>{`Ingredien ${index}`}</label>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export default RecipeViewIngredients;
