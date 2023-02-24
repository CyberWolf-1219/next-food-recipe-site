import React, { useState } from 'react';
import Link from 'next/link';

import Container from '../Container/Container';
import IconButton from '../IconButton/IconButton';
import Logo from '../Logo/Logo';
import Avatar from '../Avatar/Avatar';

import { FaHamburger } from 'react-icons/fa';
import { GoSignOut } from 'react-icons/go';
import { FaUser } from 'react-icons/fa';

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
      className={`relative z-[100] w-full h-fit bg-white shadow-sm shadow-secondary/50`}>
      <Container>
        <div
          className={`lg:relative w-full h-fit lg:flex flex-row items-center justify-between`}>
          {/* LOGO & NAV OPEN BUTTON */}
          <div
            className={`z-[50] w-full h-fit py-2 flex flex-row items-center justify-between md:justify-center lg:justify-start bg-white`}>
            <Logo
              classes={`w-full h-auto max-w-[8rem] sm:max-w-[8rem] md:max-w-[12rem] px-2`}
            />

            <IconButton
              action={navClickHandler}
              width={'fit'}
              height={'fit'}
              classes={`md:hidden`}>
              <FaHamburger
                color={'var(--clr-secondary)'}
                className={'ascpect-[1/1] w-[2rem] md:w-[4rem] h-auto mx-auto'}
              />
            </IconButton>
          </div>
          {/* NAV LINKS */}
          <ul
            className={`absolute md:static top-[4rem] bottom-0 left-0 right-0 w-full h-fit p-4 flex flex-col md:flex-row items-start lg:items-center justify-start md:justify-center lg:justify-end gap-8 bg-white bg-transparent font-semibold md:translate-y-0 ${
              navOpen ? 'translate-y-0' : 'translate-y-[-150%]'
            } transition-transform duration-500 transform-gpu`}>
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
            action={menuOpenHandler}>
            <Avatar
              size={'md'}
              image={''}
            />
          </IconButton>
          {/* USER MENU */}
          {menuOpen ? (
            <div
              className={
                'absolute z-[100] top-[4.5rem] right-8 w-fit min-w-[8rem] h-fit p-4 bg-white rounded-md border-2 font-semibold'
              }>
              <ul>
                <li>Profile</li>
                <hr className={'mt-1'} />
                <li>Favourites</li>
                <hr className={'mt-1'} />
                <li>
                  <IconButton
                    classes={
                      'mt-2 flex flex-row items-center justify-center gap-2 bg-accent text-white font-semibold'
                    }>
                    <GoSignOut /> Logout
                  </IconButton>
                </li>
              </ul>
              <IconButton
                classes={
                  'flex flex-row items-center justify-center gap-2 bg-accent text-white font-semibold'
                }>
                <FaUser />
                Sign Up
              </IconButton>
            </div>
          ) : null}
        </div>
      </Container>
    </nav>
  );
}

export default Navigation;
