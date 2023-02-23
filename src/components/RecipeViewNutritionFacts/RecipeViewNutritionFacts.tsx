import React from 'react';
import Container from '../Container/Container';

function RecipeViewNutritionFacts() {
  return (
    <section
      className={
        'md:col-start-4 md:col-end-7 lg:col-start-1 lg:col-end-5 w-full h-fit px-4 bg-gray-200'
      }>
      <Container>
        <h2>Nutritions Facts</h2>
        <ul className={'w-full h-fit'}>
          <li
            className={
              'w-full h-fit flex flex-row items-center justify-between'
            }>
            <span>Calories</span>
            <span>250</span>
          </li>
          <hr className={'m-0 mb-2 border-gray-700'} />
          <li
            className={
              'w-full h-fit flex flex-row items-center justify-between'
            }>
            <span>Total Fat</span>
            <span>10.7g</span>
          </li>
          <hr className={'m-0 mb-2 border-gray-700'} />

          <li
            className={
              'w-full h-fit flex flex-row items-center justify-between'
            }>
            <span>Saturated Fat</span>
            <span>2.2g</span>
          </li>
          <hr className={'m-0 mb-2 border-gray-700'} />

          <li
            className={
              'w-full h-fit flex flex-row items-center justify-between'
            }>
            <span>Cholestarole</span>
            <span>34.7mg</span>
          </li>
          <hr className={'m-0 mb-2 border-gray-700'} />

          <li
            className={
              'w-full h-fit flex flex-row items-center justify-between'
            }>
            <span>Sodium</span>
            <span>120.3mg</span>
          </li>
          <hr className={'m-0 mb-2 border-gray-700'} />

          <li
            className={
              'w-full h-fit flex flex-row items-center justify-between'
            }>
            <span>Potasium</span>
            <span>32.8mg</span>
          </li>
          <hr className={'m-0 mb-2 border-gray-700'} />

          <li
            className={
              'w-full h-fit flex flex-row items-center justify-between'
            }>
            <span>Total Carbohydrate</span>
            <span>22.7g</span>
          </li>
          <hr className={'m-0 mb-2 border-gray-700'} />

          <li
            className={
              'w-full h-fit flex flex-row items-center justify-between'
            }>
            <span>Sugars</span>
            <span>8.4g</span>
          </li>
          <hr className={'m-0 mb-2 border-gray-700'} />

          <li
            className={
              'w-full h-fit flex flex-row items-center justify-between'
            }>
            <span>Protien</span>
            <span>7.9g</span>
          </li>
          <hr className={'m-0 mb-2 border-gray-700'} />
        </ul>
      </Container>
    </section>
  );
}

export default RecipeViewNutritionFacts;
