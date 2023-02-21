import AllCategoriesSection from '@/components/AllCategoriesSection/AllCategoriesSection';
import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import Head from 'next/head';
import React from 'react';

function Categories() {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='All the of the food categories you can choose from.'
        />
        <meta
          http-equiv='X-UA-Compatible'
          content='ie=edge'
        />
        <meta
          http-equiv='X-UA-Compatible'
          content='IE=7'
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
        <AllCategoriesSection />
      </main>
      <Footer />
    </>
  );
}

export default Categories;
