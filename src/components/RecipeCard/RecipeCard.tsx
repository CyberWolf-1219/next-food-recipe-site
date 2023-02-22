import Image from 'next/image';
import React from 'react';
import {
  FaCalendarDay,
  FaClock,
  FaCommentAlt,
  FaList,
  FaThumbsUp,
  FaUser,
} from 'react-icons/fa';
import { GiCook } from 'react-icons/gi';

import IconButton from '../IconButton/IconButton';

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
      }>
      {/* MAIN IMAGE */}
      <Image
        src={props.image}
        alt={''}
        className={
          'aspect-[1/0.7] w-full h-auto rounded-t-lg shadow-md shadow-accent/30 object-cover'
        }
      />

      {/* DETAILS */}

      <div className={'w-full h-fit p-2'}>
        {/* HEADING */}
        <h3
          className={
            'w-full max-w-full mt-0 mb-2 truncate sm:whitespace-normal text-[1.5rem] sm:text-[2rem]'
          }>
          {props.name}
        </h3>

        {/* AUTHOR DETAILS */}
        <p className={'w-fit h-fit'}>{props.authorName}</p>
        <hr />

        {/* RECIPE DETAILS */}
        <ul
          className={
            'w-full h-fit my-4 flex flex-row items-center justify-between'
          }>
          <li className={'w-fit h-fit flex flex-col items-start justify-start'}>
            <span className={'w-fit h-fit flex flex-row items-center gap-1'}>
              <FaClock /> 12
            </span>
            <span>Minutes</span>
          </li>
          <li className={'w-fit h-fit flex flex-col items-start justify-start'}>
            <span className={'w-fit h-fit flex flex-row items-center gap-1'}>
              <FaList /> 8
            </span>
            <span>Ingredients</span>
          </li>
          <li className={'w-fit h-fit flex flex-col items-start justify-start'}>
            <span className={'w-fit h-fit flex flex-row items-center gap-1'}>
              <FaUser /> 4
            </span>
            <span>Servings</span>
          </li>
        </ul>
        <hr />

        {/* DESCRIPTION */}
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          exercitationem repellat consequuntur magni voluptatum totam accusamus
          porro itaque! Reiciendis doloribus magnam eos nostrum nulla velit
          inventore voluptatem odio quo similique.
        </p>
        <hr className={''} />
        {/* ACTIONS */}
        <IconButton
          classes={
            'flex flex-row items-center justify-center gap-2 my-2 shadow-md shadow-accent/40 bg-accent rounded-md text-white'
          }>
          <GiCook size={'1.2rem'} /> View Recipe
        </IconButton>
        <hr />
        {/* POST DETAILS */}
        <div
          className={
            'w-full max-w-full h-fit flex flex-row items-start sm:items-center justify-between flex-wrap font-semibold'
          }>
          <span
            className={
              'grow basis-[30%] w-fit h-fit flex flex-row items-center justify-start gap-2'
            }>
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
            }>
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
            }>
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
