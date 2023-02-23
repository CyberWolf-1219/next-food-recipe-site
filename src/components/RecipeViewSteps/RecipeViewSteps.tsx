import React from 'react';
import Container from '../Container/Container';

function RecipeViewSteps() {
  return (
    <section
      className={
        'md:col-start-1 md:col-end-7 lg:col-start-6 lg:col-end-13 lg:row-start-3 lg:row-end-5 w-full h-fit px-4'
      }>
      <Container>
        <h2>Steps</h2>
        <ol>
          {[...Array(7)].map((_, index) => {
            return (
              <li
                key={`step_${Math.random()}`}
                data-index={index}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, temporibus.
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

export default RecipeViewSteps;
