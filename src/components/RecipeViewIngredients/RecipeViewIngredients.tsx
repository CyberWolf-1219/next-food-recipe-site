import React from 'react';

import Container from '../Container/Container';

interface iRecipeViewIngredients {
  ingredients: Array<Ingredient>;
}

function RecipeViewIngredients(props: iRecipeViewIngredients) {
  return (
    <section
      className={'md:col-start-1 md:col-end-4 lg:col-end-5 w-full h-fit px-4'}>
      <Container>
        <h2>Ingredients</h2>
        <ul>
          {props.ingredients.map((ingredient) => {
            return (
              <li
                key={`ingredient_${Math.random()}`}
                className={
                  'w-full h-fit flex flex-row items-center justify-start gap-2 font-semibold'
                }>
                <input
                  type='checkbox'
                  name=''
                  id={ingredient.ingredient}
                  className={'w-[1rem] h-[1rem]'}
                  value={1}
                />
                <label
                  htmlFor={
                    ingredient.ingredient
                  }>{`${ingredient.amount} ${ingredient.ingredient}`}</label>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export default RecipeViewIngredients;
