import Image from 'next/image';
import React from 'react';
import Avatar from '../Avatar/Avatar';
import { FaCalendarDay, FaCommentAlt, FaThumbsUp } from 'react-icons/fa';

interface iRecipeCard {
  image: string;
  name: string;
  likes: number;
  comments: number;
  createdDate: number;
  authorName: string;
  authorImage: string;
}

function RecipeCard(props: iRecipeCard) {
  return (
    <article
      className={
        'aspect-[1/1.2] w-full h-fit shadow-md rounded-md border-x-[1px] border-t-[1px]'
      }
    >
      {/* MAIN IMAGE */}
      <div className={`relative aspect-[1/0.7] w-full h-auto`}>
        <Image
          src={props.image}
          alt={''}
          fill={true}
          className={'object-cover'}
        />
      </div>
      {/* DETAILS */}
      <div className={'w-full h-fit p-2'}>
        <h3>{props.name}</h3>
        {/* AUTHOR DETAILS */}
        <div
          className={
            'w-fit h-fit mb-2 flex flex-row items-center justify-start gap-3'
          }
        >
          <Avatar
            image={''}
            size={'sm'}
          />
          <em>Author: </em>
          <span>{props.authorName}</span>
        </div>
        {/* POST DETAILS */}
        <div
          className={
            'w-full h-fit mt-[2rem] flex flex-row items-center justify-end gap-4 font-semibold'
          }
        >
          <span
            className={
              'w-fit h-fit flex flex-row items-center justify-center gap-2'
            }
          >
            <span>
              <FaThumbsUp />
            </span>
            <span>
              {props.likes > 999 ? `${props.likes / 1000}K` : props.likes}
            </span>
          </span>
          <span
            className={
              'w-fit h-fit flex flex-row items-center justify-center gap-2'
            }
          >
            <span>
              <FaCommentAlt />
            </span>
            <span>
              {props.comments > 999
                ? `${props.comments / 1000}K`
                : props.comments}
            </span>
          </span>
          <span
            className={
              'w-fit h-fit flex flex-row items-center justify-center gap-2'
            }
          >
            <span>
              <FaCalendarDay />
            </span>
            <span>{new Date(props.createdDate).toDateString()}</span>
          </span>
        </div>
      </div>
    </article>
  );
}

export default RecipeCard;
