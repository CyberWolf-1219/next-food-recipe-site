import React, { useEffect, useState, useRef } from 'react';
import Container from '../Container/Container';
import { FaBackspace } from 'react-icons/fa';
import IconButton from '../IconButton/IconButton';
import { clearSearchInput, searchbarHandler } from './logic';

interface iSearchPanel {
  searchFunction: (searchTerm: string) => void;
}

function SearchPanel({ searchFunction }: iSearchPanel) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log('SETTING TIMEOUT...');
    setTimeout(() => {
      searchFunction(searchTerm);
    }, 1000);
  }, [searchTerm, searchFunction]);

  return (
    <section className={'px-4'}>
      <Container>
        <div>
          <h2>Search</h2>
          <div
            className={
              'w-full max-w-full h-fit flex flex-row items-center justify-between gap-2 border-b-2 border-black'
            }
          >
            <input
              ref={searchInput}
              type='text'
              name=''
              id=''
              placeholder={'Search here...'}
              onChange={(e) => {
                searchbarHandler(setSearchTerm, e);
              }}
              className={
                'grow shrink w-full h-full md:text-lg lg:text-xl bg-transparent focus:outline-none'
              }
            />
            <span
              className={
                'grow-0 shrink-0 inline-block w-fit h-full font-base text-sm text-center'
              }
            >
              (###)
            </span>
            <IconButton
              width={'fit'}
              action={(e) => {
                clearSearchInput(searchInput.current!, e);
              }}
            >
              <FaBackspace
                size={'1.5rem'}
                className={'mx-auto'}
              />
            </IconButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SearchPanel;
