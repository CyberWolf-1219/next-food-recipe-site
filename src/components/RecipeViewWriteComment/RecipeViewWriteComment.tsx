import React from 'react';
import Container from '../Container/Container';
import IconButton from '../IconButton/IconButton';

import { RiSendPlaneFill } from 'react-icons/ri';

function RecipeViewWriteComment() {
  return null;

  return (
    <section
      className={
        'md:col-start-1 md:col-end-7 lg:col-end-13 w-full h-fit mb-8 px-4'
      }>
      <Container>
        <h2>Write a comment</h2>
        <form
          action=''
          className={'w-full h-fit p-4 bg-gray-200'}>
          <textarea
            name=''
            id=''
            cols={30}
            rows={10}
            className={'w-full h-fit p-2 rounded-md'}></textarea>
          <IconButton
            classes={
              'flex flex-row items-center justify-center gap-2 bg-accent shadow-sm shadow-accent/30 text-white'
            }>
            <RiSendPlaneFill />
            Post Comment
          </IconButton>
        </form>
      </Container>
    </section>
  );
}

export default RecipeViewWriteComment;
