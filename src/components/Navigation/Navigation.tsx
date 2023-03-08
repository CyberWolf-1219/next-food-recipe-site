import React, { useState } from 'react';
import Link from 'next/link';
import styleClasses from './style.module.css';

import Container from '../Container/Container';
import IconButton from '../IconButton/IconButton';
import Logo from '../Logo/Logo';
import Avatar from '../Avatar/Avatar';

import { FaHamburger } from 'react-icons/fa';
import UserMenu from '../UserMenu/UserMenu';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navigation() {
  const [navOpen, setNavOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function menuOpenHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setMenuOpen((prevState) => !prevState);
  }

  function navClickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setNavOpen((prevState) => !prevState);
  }

  return (
    <nav
      className={`z-[100] w-full h-fit mb-[5rem] bg-white shadow-sm shadow-secondary/50`}>
      <Container>
        <div
          className={`relative w-full h-fit py-4 flex flex-row items-center justify-start md:justify-between`}>
          {/* LOGO */}
          <Logo classes={`w-[12rem] h-auto px-2`} />

          {/* NAV LINKS */}
          <ul
            data-state={`${navOpen}`}
            className={`${styleClasses.navigation_panel} absolute md:static inset-0 z-[10] w-screen md:w-fit h-screen md:h-fit flex flex-col md:flex-row items-center justify-center gap-[4rem] md:gap-[1rem] bg-accent md:bg-transparent font-semibold text-6xl md:text-lg text-primary md:text-secondary transition-[clip-path] duration-500 font-primary`}>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/categories'}>Categories</Link>
            </li>
            <li>
              <Link href={'/recipes/search'}>Search</Link>
            </li>
            {/* <li>
              <Link href={'/blog'}>Blog</Link>
            </li> */}
            <li>
              <Link href={'/about'}>About Us</Link>
            </li>
          </ul>

          {/* USER AVATAR */}
          <IconButton
            width={'fit'}
            height={'fit'}
            action={menuOpenHandler}
            classes={'ml-auto md:ml-[6rem]'}>
            <Avatar
              size={'lg'}
              image={''}
              classes={'text-accent'}
            />
          </IconButton>

          {/* MENU BTN */}
          <IconButton
            action={navClickHandler}
            width={'fit'}
            height={'fit'}
            classes={`relative z-[100] md:hidden`}>
            <GiHamburgerMenu
              color={`${navOpen ? 'var(--clr-primary)' : 'var(--clr-accent)'}`}
              className={'ascpect-[1/1] w-[3rem] md:w-[4rem] h-auto mx-auto'}
            />
          </IconButton>

          {/* USER MENU */}
          {menuOpen ? (
            <div
              className={
                'absolute z-[100] top-[4.8rem] right-[1rem] w-fit min-w-[8rem] h-fit p-4 bg-white rounded-md border-2 font-semibold'
              }>
              <UserMenu />
            </div>
          ) : null}
        </div>
      </Container>
    </nav>
  );
}

export default Navigation;
