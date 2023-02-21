import React, { useState } from 'react';

import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import SearchPanel from '@/components/SearchPanel/SearchPanel';
import SearchResultPanel from '@/components/SearchResultPanel/SearchResultPanel';
import Head from 'next/head';

type SearchResult = {
  image: string;
  name: string;
  likes: number;
  comments: number;
  createdDate: number;
  authorImage: string;
  authorName: string;
};

const resultArray = [
  {
    image: '',
    name: `Some Food Recipe ###`,
    likes: 1000000,
    comments: 50000,
    createdDate: Date.now(),
    authorImage: '',
    authorName: 'Its a Meee!',
  },
  {
    image: '',
    name: `Some Food Recipe ###`,
    likes: 1000000,
    comments: 50000,
    createdDate: Date.now(),
    authorImage: '',
    authorName: 'Its a Meee!',
  },
  {
    image: '',
    name: `Some Food Recipe ###`,
    likes: 1000000,
    comments: 50000,
    createdDate: Date.now(),
    authorImage: '',
    authorName: 'Its a Meee!',
  },
  {
    image: '',
    name: `Some Food Recipe ###`,
    likes: 1000000,
    comments: 50000,
    createdDate: Date.now(),
    authorImage: '',
    authorName: 'Its a Meee!',
  },
  {
    image: '',
    name: `Some Food Recipe ###`,
    likes: 1000000,
    comments: 50000,
    createdDate: Date.now(),
    authorImage: '',
    authorName: 'Its a Meee!',
  },
  {
    image: '',
    name: `Some Food Recipe ###`,
    likes: 1000000,
    comments: 50000,
    createdDate: Date.now(),
    authorImage: '',
    authorName: 'Its a Meee!',
  },
  {
    image: '',
    name: `Some Food Recipe ###`,
    likes: 1000000,
    comments: 50000,
    createdDate: Date.now(),
    authorImage: '',
    authorName: 'Its a Meee!',
  },
  {
    image: '',
    name: `Some Food Recipe ###`,
    likes: 1000000,
    comments: 50000,
    createdDate: Date.now(),
    authorImage: '',
    authorName: 'Its a Meee!',
  },
  {
    image: '',
    name: `Some Food Recipe ###`,
    likes: 1000000,
    comments: 50000,
    createdDate: Date.now(),
    authorImage: '',
    authorName: 'Its a Meee!',
  },
  {
    image: '',
    name: `Some Food Recipe ###`,
    likes: 1000000,
    comments: 50000,
    createdDate: Date.now(),
    authorImage: '',
    authorName: 'Its a Meee!',
  },
];

function Search() {
  const [searchResult, setSearchResult] = useState<Array<SearchResult>>([]);

  function search(searchTerm: string) {
    setTimeout(() => {
      setSearchResult(resultArray);
    }, 3000);
  }

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
        <SearchPanel searchFunction={search} />
        <SearchResultPanel resultsArray={searchResult} />
      </main>
      <Footer />
    </>
  );
}

export default Search;
