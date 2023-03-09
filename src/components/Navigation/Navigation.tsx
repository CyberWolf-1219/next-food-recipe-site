import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styleClasses from './style.module.css';

import Container from '../Container/Container';
import IconButton from '../IconButton/IconButton';
import Logo from '../Logo/Logo';
import Avatar from '../Avatar/Avatar';

import UserMenu from '../UserMenu/UserMenu';
import { GiHamburgerMenu } from 'react-icons/gi';

import gsap from 'gsap';

function Navigation() {
  const [navOpen, setNavOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const timeline = useRef<GSAPTimeline>();
  const parentElement = useRef(null);

  // MOVE IN ANIMATION
  useEffect(() => {
    const gsapContext = gsap.context(() => {
      timeline.current = gsap
        .timeline({ defaults: { duration: 0.3, ease: 'power3.out' } })
        .fromTo(
          parentElement.current,
          { y: '-100%', opacity: 0 },
          { y: '0%', opacity: 1, delay: 0.3 }
        )
        .fromTo(
          '#logo',
          { opacity: 0, scale: 0.6, transformOrigin: 'center' },
          {
            keyframes: [
              { scale: 1.1, opacity: 1, duration: 0.2 },
              { scale: 1, opacity: 1, duration: 0.2 },
            ],
          }
        )
        .fromTo(
          '.navLink',
          { opacity: 0, x: '-50%' },
          { opacity: 1, x: '0%', stagger: 0.25 }
        )
        .fromTo(
          '.user_avatar',
          { opacity: 0, scale: 0.5 },
          {
            keyframes: [
              { scale: 1.1, opacity: 1, duration: 0.2 },
              { scale: 1, opacity: 1, duration: 0.2 },
            ],
          }
        );
    }, parentElement);

    return () => {
      gsapContext.revert();
    };
  }, []);

  // HOVER ANIMATION
  useEffect(() => {
    const navLinks: NodeListOf<HTMLLIElement> =
      document.querySelectorAll('.navLink');
    navLinks.forEach((navLink) => {
      const hoverAnimation = gsap.to(navLink, {
        scale: 1.1,
        color: 'var(--clr-accent)',
        duration: 0.1,
        ease: 'power3.out',
        paused: true,
      });
      navLink.addEventListener('mouseenter', () => {
        hoverAnimation.play();
      });
      navLink.addEventListener('mouseleave', () => {
        hoverAnimation.reverse();
      });
    });

    return () => {};
  }, []);

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
      ref={parentElement}
      className={`relative z-[100] w-full h-fit mb-[5rem] bg-white shadow-sm shadow-secondary/50`}>
      <Container>
        <div
          className={`relative w-full h-fit py-4 flex flex-row items-center justify-start md:justify-between`}>
          {/* LOGO */}
          <Logo classes={`w-[12rem] h-auto px-2`} />

          {/* NAV LINKS */}
          <ul
            data-state={`${navOpen}`}
            className={`${styleClasses.navigation_panel} absolute md:static inset-0 z-[10] w-screen md:w-fit h-screen md:h-fit flex flex-col md:flex-row items-center justify-center gap-[4rem] md:gap-[1rem] bg-accent md:bg-transparent font-semibold text-6xl md:text-lg text-primary md:text-secondary transition-[clip-path] duration-500 font-primary`}>
            <li className={'navLink'}>
              <Link href={'/'}>Home</Link>
            </li>
            <li className={'navLink'}>
              <Link href={'/categories'}>Categories</Link>
            </li>
            <li className={'navLink'}>
              <Link href={'/recipes/search'}>Search</Link>
            </li>
            {/* <li className={'navLink'}>
              <Link href={'/blog'}>Blog</Link>
            </li> */}
            <li className={'navLink'}>
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
