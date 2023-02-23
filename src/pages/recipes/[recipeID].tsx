import Avatar from '@/components/Avatar/Avatar';
import Container from '@/components/Container/Container';
import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import RecipeViewHeader from '@/components/RecipeViewHeader/RecipeViewHeader';
import RecipeViewIngredients from '@/components/RecipeViewIngredients/RecipeViewIngredients';
import RecipeViewNutritionFacts from '@/components/RecipeViewNutritionFacts/RecipeViewNutritionFacts';
import RecipeViewOptinForm from '@/components/RecipeViewOptinForm/RecipeViewOptinForm';
import RecipeViewSteps from '@/components/RecipeViewSteps/RecipeViewSteps';
import RecipeViewSummary from '@/components/RecipeViewSummary/RecipeViewSummary';
import RecipeViewWriteComment from '@/components/RecipeViewWriteComment/RecipeViewWriteComment';
import Head from 'next/head';
import React from 'react';

function RecipeView() {
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
        <Container>
          <div
            className={
              'w-full h-fit grid grid-cols-1 auto-rows-auto md:grid-cols-6 lg:grid-cols-12 gap-y-4'
            }>
            <RecipeViewHeader />
            <RecipeViewSummary />
            <RecipeViewIngredients />
            <RecipeViewNutritionFacts />
            <RecipeViewSteps />
            <RecipeViewWriteComment />
            <RecipeViewOptinForm />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default RecipeView;
