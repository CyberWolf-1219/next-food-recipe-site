import Image from 'next/image';
import React, {
  useRef,
  useContext,
  useEffect,
  useCallback,
  useState,
} from 'react';
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
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import RecipeSaveBtn from '../RecipeSaveBtn/RecipeSaveBtn';
import { SavedRecipeContext } from '@/store/SavedRecipeContext';

import { gsap } from 'gsap/dist/gsap';

interface iRecipeCard {
  id: string;
  image: string;
  name: string;
  likes?: number;
  comments?: number;
  createdDate?: number;
  authorName?: string;
  authorImage?: string;
}

function RecipeCard(props: iRecipeCard) {
  const router = useRouter();
  const { data: authData, status: authStatus } = useSession();
  const { getSavedRecipes, recipeIds } = useContext(SavedRecipeContext);
  const [saved, setSaved] = useState(false);
  const card = useRef(null);
  // const timeline = useRef<GSAPTimeline>();

  // HOVER ANIMATION
  useEffect(() => {
    const gsapContext = gsap.context(() => {
      const cardHoverAnimation = gsap.to(card.current, {
        scale: 1.1,
        boxShadow: '0px 0px 30px 0px hsla(15, 100%, 59%, 0.3)',
        paused: true,
        duration: 0.3,
        zIndex: 20,
      });

      (card.current! as HTMLElement).addEventListener('mouseenter', () => {
        cardHoverAnimation.play();
      });

      (card.current! as HTMLElement).addEventListener('mouseleave', () => {
        cardHoverAnimation.reverse();
      });
    }, card);

    return () => {
      gsapContext.revert();
    };
  }, [props, card]);

  const checkIfSaved = useCallback(() => {
    const result = recipeIds.find((id) => {
      return id == props.id;
    });
    if (result) {
      setSaved(true);
    }
  }, [props.id, recipeIds]);

  useEffect(() => {
    checkIfSaved();
  }, [checkIfSaved]);

  function viewRecipe() {
    router.replace(`/recipes/${props.id}`);
  }

  return (
    <article
      ref={card}
      className={
        'recipe_card relative w-full h-fit shadow-sm shadow-black/50 rounded-md border-x-[1px] border-t-[1px] bg-white overflow-hidden'
      }>
      {/* SAVE BUTTON */}
      {authStatus == 'authenticated' ? (
        <RecipeSaveBtn
          recipeId={props.id}
          recipeName={props.name}
          recipeImage={props.image}
          saved={saved}
          classes={'absolute top-4 right-4 z-[50]'}
        />
      ) : null}

      {/* MAIN IMAGE */}
      <div className={'relative aspect-[1/0.5] w-full h-auto rounded-t-md'}>
        <Image
          src={props.image}
          alt={''}
          fill={true}
          className={'w-full h-full object-cover'}
        />
      </div>

      {/* DETAILS */}
      <div className={'w-full h-fit p-2'}>
        {/* HEADING */}
        <h3
          className={
            'w-full max-w-full min-h-[.75em] h-fit mt-0 mb-[0.5rem] truncate text-[1.5rem] sm:text-[2rem]'
          }>
          {props.name}
        </h3>

        {/* AUTHOR DETAILS */}
        {/* <p className={'w-fit h-fit'}>{props.authorName}</p> */}
        {/* <hr /> */}

        {/* RECIPE DETAILS */}
        {/* <ul
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
        <hr /> */}

        {/* DESCRIPTION */}
        {/* <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          exercitationem repellat consequuntur magni voluptatum totam accusamus
          porro itaque! Reiciendis doloribus magnam eos nostrum nulla velit
          inventore voluptatem odio quo similique.
        </p> */}
        {/* <hr className={''} /> */}
        {/* ACTIONS */}
        <IconButton
          action={viewRecipe}
          classes={
            'flex flex-row items-center justify-center gap-2 my-0 bg-accent rounded-md text-white'
          }>
          <GiCook size={'1.2rem'} /> View Recipe
        </IconButton>
        {/* <hr /> */}
        {/* POST DETAILS */}
        <div
          className={
            'w-full max-w-full h-fit flex flex-row items-start sm:items-center justify-between flex-wrap font-semibold'
          }>
          {/* LIKES */}
          {/* <span
            className={
              'grow basis-[30%] w-fit h-fit flex flex-row items-center justify-start gap-2'
            }>
            <span>
              <FaThumbsUp />
            </span>
            <span>
              {props.likes > 999 ? `${props.likes / 1000}K` : props.likes}
            </span>
          </span> */}
          {/* COMMENTS */}
          {/* <span
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
          </span> */}
          {/* CREATED DATE */}
          {/* <span
            className={
              'grow basis-[30%] w-fit h-fit flex flex-row items-center justify-start gap-2'
            }>
            <span>
              <FaCalendarDay />
            </span>
            <span>
              {new Date(props.createdDate).toLocaleDateString('en-us')}
            </span>
          </span> */}
        </div>
      </div>
    </article>
  );
}

export default RecipeCard;
