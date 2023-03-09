import React, { useEffect, useState } from 'react';
import Container from '../Container/Container';
import CommentCard from '../CommentCard/CommentCard';
import IconButton from '../IconButton/IconButton';
import useFetch from '@/hooks/useFetch';
import { Comment } from '@/Types/OtherTypes';

interface iRecipeViewComments {
  recipeId: string;
}

function RecipeViewComments({ recipeId }: iRecipeViewComments) {
  const execute = useFetch();
  const [comments, setComments] = useState<{ comments: Array<Comment> }>({
    comments: [],
  });

  useEffect(() => {
    if (comments.comments.length > 0) return;
    (async () => {
      const fetchResult = await execute(
        `/api/community/get_comments?recipeId=${recipeId}`,
        {}
      );
      console.log(fetchResult);
      setComments(fetchResult);
    })();
  }, [recipeId, execute, comments]);

  return (
    <section
      className={'recipe_view_comments col-start-1 col-end-13 w-full h-fit'}>
      <Container>
        <h2>Comments</h2>
        <hr className={''} />
        <div
          className={
            'w-full h-fit mt-[1rem] flex flex-col items-start justify-start'
          }>
          {/* COMMENT CARD */}
          {comments.comments.length > 0 ? (
            <ul className={'w-full h-fit'}>
              {comments.comments.map((commentObj) => {
                return (
                  <CommentCard
                    key={`comment_${Math.random()}`}
                    userName={commentObj.userName}
                    commentDate={commentObj.commentDate}
                    comment={commentObj.comment}
                  />
                );
              })}
            </ul>
          ) : (
            <p className={'w-full h-fit text-center text-gray-400'}>
              <strong>Wanna be the first one to comment?</strong>
            </p>
          )}
        </div>
        <hr />
        <IconButton
          width={'full'}
          height={'fit'}
          classes={'bg-accent text-white font-semibold'}>
          View More Comments
        </IconButton>
      </Container>
    </section>
  );
}

export default RecipeViewComments;
