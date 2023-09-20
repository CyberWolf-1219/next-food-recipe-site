import { useContext, useEffect } from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/react';

import { SavedRecipeContext } from '@/store/SavedRecipeContext';

import Navigation from '@/components/Navigation/Navigation';
import FeaturedRecipeSection from '@/components/FeaturedRecipeSection/FeaturedRecipeSection';
import HomeHeroSection from '@/components/HomeHeroSection/HomeHeroSection';
import HomeOptInSection from '@/components/HomeOptInSection/HomeOptInSection';
import LatestRecipesSection from '@/components/LatestRecipesSection/LatestRecipesSection';
import PopularCategorySection from '@/components/PopularCategorySection/PopularCategorySection';
import SuperDeliciousSection from '@/components/SuperDeliciousSection/SuperDeliciousSection';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  const { data: authData, status: authStatus } = useSession();
  const { getSavedRecipes, recipeIds } = useContext(SavedRecipeContext);

  useEffect(() => {
    if (authStatus !== 'authenticated') return;
    getSavedRecipes();
  }, [getSavedRecipes, authStatus]);

  return (
    <>
      <Head>
        <title>Tastebite | Food Recipes</title>
        <meta
          name='description'
          content='Food Recipe Site For Food Lovers.'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <header>
        <Navigation
          position={'absolute'}
          logoFill={'fill-white'}
          textColor={'text-white'}
          avatarFill={'fill-white'}
        />
        <HomeHeroSection />
      </header>
      <main className={''}>
        <PopularCategorySection />
        <FeaturedRecipeSection />
        <SuperDeliciousSection />
        <HomeOptInSection />
        <LatestRecipesSection />
      </main>
      <Footer />
    </>
  );
}
