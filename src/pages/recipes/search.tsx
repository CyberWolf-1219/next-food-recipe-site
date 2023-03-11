import React, { useCallback, useState } from 'react';

import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import SearchPanel from '@/components/SearchPanel/SearchPanel';
import SearchResultPanel from '@/components/SearchResultPanel/SearchResultPanel';
import Head from 'next/head';
import useFetch from '@/hooks/useFetch';
import { Recipe } from '@/Types/RecipeApiTypes';

function Search() {
  const execute = useFetch();
  const [result, setResult] = useState<{ recipes: Array<Recipe> }>({
    recipes: [],
  });

  const search = useCallback(
    async (query: string) => {
      const fetchResult = await execute(`/api/recipes/search?q=${query}`, {});
      setResult(fetchResult);
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
          resultCount={result.recipes?.length ?? 0}
        />
        <SearchResultPanel resultsArray={result?.recipes ?? []} />
      </main>
      <Footer />
    </>
  );
}

export default Search;
