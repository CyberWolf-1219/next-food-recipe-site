import React from 'react';

interface iCommentCard {
  userName: string;
  commentDate: number;
  comment: string;
}

function CommentCard({ userName, commentDate, comment }: iCommentCard) {
  return (
    <article
      className={
        'w-full h-fit p-[0.5rem] rounded-lg border-[1px] border-accent bg-white'
      }>
      <div
        className={'w-full h-fit flex flex-row items-center justify-between'}>
        <span>
          <strong>{userName}</strong>
        </span>
        <span>{new Date(commentDate).toLocaleDateString('en-lk')}</span>
      </div>
      <hr className={'mt-[0.5rem]'} />
      <p>{comment}</p>
    </article>
  );
}

export default CommentCard;
