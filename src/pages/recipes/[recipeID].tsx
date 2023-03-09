import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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
import useFetch from '@/hooks/useFetch';
import Head from 'next/head';
import extractIngredients from '@/utility/extractIngredients';
import breakInstructionsToSteps from '@/utility/breakInstructionsToSteps';

import { gsap } from 'gsap/dist/gsap';

function RecipeView() {
  const router = useRouter();
  const execute = useFetch();
  const [ingredients, setIngredients] = useState<Array<Ingredient>>([]);
  const [steps, setSteps] = useState<Array<string>>([]);
  const [recipe, setRecipe] = useState<Recipe>();
  const parentElement = useRef(null);
  const timeline = useRef<GSAPTimeline>();

  // MOVE IN ANIMATION
  useEffect(() => {
    const gsapContext = gsap.context(() => {
      timeline.current = gsap
        .timeline({
          defaults: { duration: 0.5, ease: 'power3.out' },
        })
        .fromTo(
          '.recipe_view_header__heading',
          { opacity: 0, yPercent: 50 },
          { opacity: 1, yPercent: 0 }
        )
        .fromTo(
          '.recipe_view_header .icon_button',
          { opacity: 0, yPercent: 50 },
          { opacity: 1, yPercent: 0 }
        )
        .fromTo(
          '.recipe_view_summary__video',
          { opacity: 0, yPercent: 50 },
          { opacity: 1, yPercent: 0 }
        )
        .fromTo(
          '.recipe_view_ingredients__heading',
          { opacity: 0, yPercent: 50 },
          { opacity: 1, yPercent: 0 }
        )
        .fromTo(
          '.recipe_view_ingredients__ingredient',
          { opacity: 0, yPercent: 50 },
          { opacity: 1, yPercent: 0, stagger: 0.3 }
        )
        .fromTo(
          '.recipe_view_steps__heading',
          { opacity: 0, yPercent: 50 },
          { opacity: 1, yPercent: 0 }
        )
        .fromTo(
          '.recipe_view_steps__step',
          { opacity: 0, yPercent: 50 },
          { opacity: 1, yPercent: 0, stagger: 0.3 }
        );
    }, parentElement);

    return () => {
      gsapContext.revert();
    };
  });

  useEffect(() => {
    (async () => {
      const fetchResult = await execute(
        `/api/recipes/recipe?id=${router.query.recipeID}`,
        {}
      );
      setRecipe(fetchResult.recipe);
    })();
  }, [execute, router]);

  useEffect(() => {
    if (recipe?.strIngredient1 && recipe.strInstructions) {
      setIngredients(extractIngredients(recipe));
      setSteps(breakInstructionsToSteps(recipe.strInstructions));
    }
  }, [recipe]);

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
            ref={parentElement}
            className={
              'w-full h-fit grid grid-cols-1 auto-rows-auto md:grid-cols-6 lg:grid-cols-12 gap-y-4'
            }>
            <RecipeViewHeader
              id={recipe?.idMeal as string}
              recipeName={recipe?.strMeal!}
              recipeImage={recipe?.strMealThumb as string}
            />
            <RecipeViewSummary videoLink={recipe?.strYoutube!} />
            <RecipeViewIngredients ingredients={ingredients} />
            {/* <RecipeViewNutritionFacts /> */}
            <RecipeViewSteps steps={steps} />
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
