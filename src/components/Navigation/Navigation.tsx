import React, { useState } from 'react';

import Container from '../Container/Container';
import IconButton from '../IconButton/IconButton';
import Logo from '../Logo/Logo';

import { FaSearch, FaHamburger, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import Link from 'next/link';

function Navigation() {
  const [navOpen, setNavOpen] = useState(false);
  const [recipeMenuOpen, setRecipeMenuOpen] = useState(false);

  function menuClickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setNavOpen((prevState) => !prevState);
  }

  function onRecipeLinkClickHandler(e: React.MouseEvent<HTMLLIElement>) {
    e.preventDefault();
    setRecipeMenuOpen((prevState) => !prevState);
  }
  return (
    <nav className={`px-2 py-4 bg-white shadow-md shadow-secondary/100`}>
      <Container>
        <div
          className={`w-full h-fit grid grid-cols-6 gap-4 items-stretch justify-items-stretch `}
        >
          <IconButton classes={`col-start-1 col-end-2`}>
            <FaSearch
              size={'2rem'}
              color={'var(--clr-secondary)'}
            />
          </IconButton>
          <Logo classes={`mx-auto col-start-2 col-end-6`} />

          <IconButton
            action={menuClickHandler}
            classes={`col-start-6 col-end-7`}
          >
            <FaHamburger
              size={'2rem'}
              color={'var(--clr-secondary)'}
            />
          </IconButton>
          <ul
            className={`absolute z-[-1] top-20 bottom-0 left-0 right-0 w-auto h-fit p-4 flex flex-col items-start justify-start gap-2 bg-white font-semibold ${
              navOpen ? 'translate-y-0' : 'translate-y-[-150%]'
            } transition-transform duration-500 transform-gpu`}
          >
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li onClick={onRecipeLinkClickHandler}>
              <div className={`flex flex-row items-center justify-start gap-2`}>
                <span className={`inline`}>Recipes</span>
                <span className={`inline`}>
                  {recipeMenuOpen ? (
                    <FaCaretUp size={`1.2rem`} />
                  ) : (
                    <FaCaretDown size={`1.2rem`} />
                  )}
                </span>
              </div>
              <ul
                className={`w-fit ${
                  recipeMenuOpen ? 'h-fit' : 'h-[0px]'
                } pl-4 flex flex-col items-start justify-start gap-2 overflow-hidden transition-all duration-500`}
              >
                <li>
                  <Link href={'/recipes/categories'}>Categories</Link>
                </li>
                <li>
                  <Link href={'/recipes/search'}>Search</Link>
                </li>
              </ul>
            </li>
            <li>Blog</li>
            <li>About Us</li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default Navigation;
