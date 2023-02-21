import React, { useState } from 'react';

import Container from '../Container/Container';
import IconButton from '../IconButton/IconButton';
import Logo from '../Logo/Logo';

import { FaSearch, FaHamburger } from 'react-icons/fa';
import Link from 'next/link';

function Navigation() {
  const [navOpen, setNavOpen] = useState(false);

  function menuClickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setNavOpen((prevState) => !prevState);
  }

  return (
    <nav
      className={`relative z-[100] w-full h-fit bg-white shadow-sm shadow-secondary/50`}
    >
      <Container>
        <div
          className={`w-full h-fit lg:flex flex-row items-center justify-between`}
        >
          <div
            className={`z-[50] w-full h-fit py-2 flex flex-row items-center justify-between md:justify-center lg:justify-start bg-white`}
          >
            {/* <IconButton classes={`lg:hidden`}>
            <FaSearch
              color={'var(--clr-secondary)'}
              className={'aspect-[1/1] w-[2rem] md:w-[4rem] h-auto mx-auto'}
            />
          </IconButton> */}

            <Logo
              classes={`w-full h-auto max-w-[8rem] sm:max-w-[8rem] md:max-w-[12rem] px-2`}
            />

            <IconButton
              action={menuClickHandler}
              width={'fit'}
              height={'fit'}
              classes={`md:hidden`}
            >
              <FaHamburger
                color={'var(--clr-secondary)'}
                className={'ascpect-[1/1] w-[2rem] md:w-[4rem] h-auto mx-auto'}
              />
            </IconButton>
          </div>
          <ul
            className={`absolute md:static top-[4rem] bottom-0 left-0 right-0 w-full h-fit p-4 flex flex-col md:flex-row items-start lg:items-center justify-start md:justify-center lg:justify-end gap-8 bg-white bg-transparent font-semibold md:translate-y-0 ${
              navOpen ? 'translate-y-0' : 'translate-y-[-150%]'
            } transition-transform duration-500 transform-gpu`}
          >
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/recipes/categories'}>Categories</Link>
            </li>
            <li>
              <Link href={'/recipes/search'}>Search</Link>
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
