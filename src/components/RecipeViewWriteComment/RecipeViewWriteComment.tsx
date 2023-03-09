import React, { useEffect, useRef, useState } from 'react';

import Container from '../Container/Container';
import IconButton from '../IconButton/IconButton';
import useFetch from '@/hooks/useFetch';

import { RiSendPlaneFill } from 'react-icons/ri';
import { useSession } from 'next-auth/react';

interface iRecipeViewWriteComment {
  recipeId: string;
}

function RecipeViewWriteComment({ recipeId }: iRecipeViewWriteComment) {
  const [disabled, setDisabled] = useState(false);
  const execute = useFetch();
  const { data: authData, status: authStatus } = useSession();
  const [commentContent, setCommentContent] = useState<string>('');

  async function postComment(e: React.MouseEvent) {
    e.preventDefault();
    const fetchResult = execute('/api/community/post_comment', {
      method: 'POST',
      body: JSON.stringify({
        userId: authData!.user!.email!,
        recipeId: recipeId,
        content: commentContent,
      }),
    });
  }

  useEffect(() => {
    if (authStatus == 'unauthenticated' || commentContent.length <= 20) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [authStatus, commentContent]);

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
            placeholder={
              'Make sure your comment is longer than 20 characters. OK?'
            }
            onInput={(e) => {
              setCommentContent(e.currentTarget.value);
            }}
            className={'w-full h-fit p-2 rounded-md'}></textarea>
          <IconButton
            disabled={disabled}
            action={(e) => {
              postComment(e);
            }}
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
