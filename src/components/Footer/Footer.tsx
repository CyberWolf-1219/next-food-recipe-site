import React, { useState } from 'react';
import styleClasses from './footerStyles.module.css';

import Container from '../Container/Container';
import Logo from '../Logo/Logo';

import { FaCaretDown } from 'react-icons/fa';

function Footer() {
  const [isOpen, setIsOpen] = useState<[boolean, boolean, boolean]>([
    false,
    false,
    false,
  ]);

  function accordianHandler(
    e: React.MouseEvent<HTMLDivElement>,
    sectionIndex: number
  ) {
    e.preventDefault();
    setIsOpen((prevState) => {
      const newState = prevState.map((state, index) => {
        return index == sectionIndex ? !state : state;
      });

      return newState as [boolean, boolean, boolean];
    });
  }

  return (
    <footer className={'w-full h-fit px-4 pt-8'}>
      <Container>
        <div>
          <Logo classes={'max-w-[200px]'} />
          <p className={'mt-4'}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
            aliquid magnam facere, veniam minus consequuntur voluptates
            assumenda fugiat, delectus qui sapiente eveniet consequatur!
            Voluptas quidem in obcaecati non debitis quod!
          </p>
          <ul className={'flex flex-col gap-4'}>
            <li>
              <div
                onClick={(e) => {
                  accordianHandler(e, 0);
                }}
                className={
                  'w-full h-fit flex flex-row items-center justify-between border-b-2'
                }
              >
                <b>Tastebite</b>
                <span>
                  <FaCaretDown />
                </span>
              </div>
              <ul
                data-open={isOpen[0]}
                className={`${styleClasses.accordian_section} overflow-hidden transition-all duraiton-500`}
              >
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>Feedback</li>
              </ul>
            </li>
            <li>
              <div
                onClick={(e) => {
                  accordianHandler(e, 1);
                }}
                className={
                  'w-full h-fit flex flex-row items-center justify-between border-b-2'
                }
              >
                <b>Legal</b>
                <span>
                  <FaCaretDown />
                </span>
              </div>
              <ul
                data-open={isOpen[1]}
                className={`${styleClasses.accordian_section} overflow-hidden transition-all duraiton-500`}
              >
                <li>Terms</li>
                <li>Conditions</li>
                <li>Cookies</li>
                <li>Copyright</li>
              </ul>
            </li>
            <li>
              <div
                onClick={(e) => {
                  accordianHandler(e, 2);
                }}
                className={
                  'w-full h-fit flex flex-row items-center justify-between border-b-2'
                }
              >
                <b>Follow</b>
                <span>
                  <FaCaretDown />
                </span>
              </div>
              <ul
                data-open={isOpen[2]}
                className={`${styleClasses.accordian_section} overflow-hidden transition-all duraiton-500`}
              >
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Youtube</li>
              </ul>
            </li>
          </ul>
          <hr className={'mt-2 border-[2px]'} />
          <p>
            <span>&copy;</span>
            <span>2020 Tastebite - All rights reserved</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
