import React from 'react';
import Image from 'next/image';
import Container from '../Container/Container';
import IconButton from '../IconButton/IconButton';
import { FaPrint } from 'react-icons/fa';

function RecipeViewSummary() {
  return (
    <section
      className={'md:col-start-1 md:col-end-7 lg:col-end-13 w-full h-fit px-4'}>
      <Container>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium debitis nihil sint nemo cumque enim dignissimos earum
            placeat nisi? Explicabo sapiente possimus a magnam neque tempora
            iste iure placeat voluptates!
          </p>
          <Image
            src={''}
            alt={''}
            className={
              'aspect-[4/3] lg:aspect-[16/8] w-full h-auto mt-8 rounded-lg overflow-hidden border-2'
            }
          />
          <ul
            className={
              'w-full h-fit md:max-w-[50%] mt-8 flex flex-row items-center justify-between'
            }>
            <li className={'w-full h-full px-2 border-r-2'}>
              <p>
                <span className={'text-xs'}>PREP TIME</span> <br />
                <strong>15 MIN</strong>
              </p>
            </li>
            <li className={'w-full h-full px-2 border-r-2'}>
              <p>
                <span className={'text-xs'}>INGREDIENTS</span> <br />
                <strong>12</strong>
              </p>
            </li>
            <li className={'w-full h-full px-2 border-r-2'}>
              <p>
                <span className={'text-xs'}>SERVINGS</span> <br />
                <strong>4-6</strong>
              </p>
            </li>
            <li className={'w-full h-full px-2'}>
              <IconButton
                width={'full'}
                height={'full'}>
                <FaPrint
                  size={'2rem'}
                  className={'w-fit h-fit mx-auto'}
                />
              </IconButton>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default RecipeViewSummary;
