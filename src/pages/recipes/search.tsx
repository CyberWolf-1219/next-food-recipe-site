import React, { useCallback } from 'react';

import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import SearchPanel from '@/components/SearchPanel/SearchPanel';
import SearchResultPanel from '@/components/SearchResultPanel/SearchResultPanel';
import Head from 'next/head';
import useFetch from '@/hooks/useFetch';

function Search() {
  const [execute, result] = useFetch();

  const search = useCallback(
    (query: string) => {
      execute(`/api/recipes/search?q=${query}`, {});
    },
    [execute]
  );

  return (
    <>
      <Head>
        <meta
          http-equiv='X-UA-Compatible'
          content='IE=7'
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
        <meta
          name='description'
          content='Search for a mouth watering recipes.'
        />
      </Head>
      <header>
        <Navigation />
      </header>
      <main>
        <SearchPanel
          searchFunction={search}
          resultCount={
            (result as { recipes: Array<Recipe> })?.recipes?.length ?? 0
          }
        />
        <SearchResultPanel
          resultsArray={(result as { recipes: Array<Recipe> })?.recipes ?? []}
        />
      </main>
      <Footer />
    </>
  );
}

export default Search;
