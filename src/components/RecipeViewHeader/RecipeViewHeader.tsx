import React from 'react';
import Container from '../Container/Container';
import IconButton from '../IconButton/IconButton';
import Avatar from '../Avatar/Avatar';
import { FaCalendarDay, FaComment, FaDownload, FaHeart } from 'react-icons/fa';

interface iRecipeViewHeader {
  recipeName: string;
}

function RecipeViewHeader(props: iRecipeViewHeader) {
  return (
    <section
      className={
        'md:col-start-1 md:col-end-7 lg:col-end-13 w-full h-fit px-4 '
      }>
      <Container>
        <div
          className={
            'w-full h-fit grid grid-cols-6 lg:grid-cols-12 auto-rows-auto gap-4'
          }>
          <h1 className={'col-start-1 col-end-7 lg:col-end-11 w-full h-fit'}>
            {props.recipeName}
          </h1>
          {/* <ul
            className={
              'col-start-1 col-end-5 w-full h-full flex flex-row items-center justify-between gap-4 font-semibold text-xs'
            }>
            <li
              className={
                'w-full h-full flex flex-row items-center justify-start  gap-1 whitespace-nowrap'
              }>
              <Avatar
                size={'sm'}
                image={''}
                classes={'hidden sm:block'}
              />
              User Name
            </li>
            <li
              className={
                'w-full h-full flex flex-row items-center justify-start gap-1'
              }>
              <FaCalendarDay />
              2022/10/08
            </li>
            <li
              className={
                'w-full h-full flex flex-row items-center justify-start gap-1'
              }>
              <FaComment />
              100
            </li>
          </ul> */}
          <IconButton
            classes={
              'col-start-5 col-end-6 lg:col-start-11 lg:col-end-12 w-full h-full flex flex-row items-center justify-center'
            }>
            <FaDownload size={'1.5rem'} />
          </IconButton>
          <IconButton
            classes={
              'col-start-6 col-end-7 lg:col-start-12 lg:col-end-13 w-full h-full flex flex-row items-center justify-center'
            }>
            <FaHeart size={'1.5rem'} />
          </IconButton>
        </div>
        <hr />
      </Container>
    </section>
  );
}

export default RecipeViewHeader;
