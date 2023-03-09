import React from 'react';
import Container from '../Container/Container';

interface iRecipeViewSteps {
  steps: Array<string>;
}

function RecipeViewSteps(props: iRecipeViewSteps) {
  return (
    <section
      className={
        'recipe_view_steps md:col-start-1 md:col-end-7 lg:col-start-6 lg:col-end-13 lg:row-start-3 lg:row-end-5 w-full h-fit px-4'
      }>
      <Container>
        <h2 className={'recipe_view_steps__heading'}>Steps</h2>
        <ol className={'list-decimal'}>
          {props.steps.map((step, index) => {
            return (
              <li
                key={`step_${Math.random()}`}
                data-index={index}
                className={'recipe_view_steps__step'}>
                <p>{step}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

export default RecipeViewSteps;
