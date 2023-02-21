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
    <nav className={`relative z-[100] bg-white shadow-sm shadow-secondary/100`}>
      <Container>
        <div className={`w-full h-fit`}>
          <div
            className={
              'relative z-[10] w-full h-fit px-2 py-4 grid grid-cols-6 gap-4 lg:flex bg-white'
            }
          >
            <IconButton classes={`lg:hidden col-start-1 col-end-2`}>
              <FaSearch
                color={'var(--clr-secondary)'}
                className={'aspect-[1/1] w-[2rem] md:w-[4rem] h-auto mx-auto'}
              />
            </IconButton>

            <Logo classes={`max-w-[16rem] mx-auto col-start-2 col-end-6`} />

            <IconButton
              action={menuClickHandler}
              classes={`lg:hidden col-start-6 col-end-7`}
            >
              <FaHamburger
                color={'var(--clr-secondary)'}
                className={'ascpect-[1/1] w-[2rem] md:w-[4rem] h-auto mx-auto'}
              />
            </IconButton>
          </div>
          <ul
            className={`absolute md:static top-20 bottom-0 left-0 right-0 w-full h-fit p-4 flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-center gap-2 lg:gap-8 bg-white bg-transparent  font-semibold lg:translate-y-0 ${
              navOpen ? 'translate-y-0' : 'translate-y-[-150%]'
            } transition-transform duration-500 transform-gpu`}
          >
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/recipes/categories'}>Recipe Categories</Link>
            </li>
            <li>
              <Link href={'/recipes/search'}>Search Recipes</Link>
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
