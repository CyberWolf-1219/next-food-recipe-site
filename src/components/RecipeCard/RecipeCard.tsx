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
        'relative w-full h-fit shadow-sm shadow-black/50 rounded-lg border-x-[1px] border-t-[1px] overflow-hidden'
      }
    >
      {/* MAIN IMAGE */}
      <div className={`relative aspect-[1/0.6] w-full h-auto overflow-hidden`}>
        <Image
          src={props.image}
          alt={''}
          fill={true}
          className={'object-cover'}
        />
      </div>

      {/* DETAILS */}
      <div className={'w-full h-fit p-2'}>
        <h3
          className={
            'w-full max-w-full truncate sm:whitespace-normal text-[1.5rem] sm:text-[2rem]'
          }
        >
          {props.name}
        </h3>

        {/* AUTHOR DETAILS */}
        <div
          className={
            'w-fit h-fit mb-8 flex flex-row items-center justify-start gap-3'
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
            'w-full max-w-full h-fit flex flex-row items-start sm:items-center justify-between flex-wrap font-semibold'
          }
        >
          <span
            className={
              'grow basis-[30%] w-fit h-fit flex flex-row items-center justify-start gap-2'
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
              'grow basis-[30%] w-fit h-fit flex flex-row items-center justify-start gap-2'
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
              'grow basis-[30%] w-fit h-fit flex flex-row items-center justify-start gap-2'
            }
          >
            <span>
              <FaCalendarDay />
            </span>
            <span>
              {new Date(props.createdDate).toLocaleDateString('en-us')}
            </span>
          </span>
        </div>
      </div>
    </article>
  );
}

export default RecipeCard;
