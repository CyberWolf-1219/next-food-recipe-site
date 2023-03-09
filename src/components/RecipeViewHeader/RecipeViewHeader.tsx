import React, { useContext, useEffect, useState } from 'react';
import Container from '../Container/Container';
import IconButton from '../IconButton/IconButton';
import Avatar from '../Avatar/Avatar';
import { FaCalendarDay, FaComment, FaDownload, FaHeart } from 'react-icons/fa';
import { SavedRecipeContext } from '@/store/SavedRecipeContext';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import RecipeSaveBtn from '../RecipeSaveBtn/RecipeSaveBtn';
import { useSession } from 'next-auth/react';

interface iRecipeViewHeader {
  id: string;
  recipeName: string;
  recipeImage: string;
}

function RecipeViewHeader(props: iRecipeViewHeader) {
  const savedRecipeContext = useContext(SavedRecipeContext);
  const [saved, setSaved] = useState(false);
  const { data: authData, status: authStatus } = useSession();

  useEffect(() => {
    if (savedRecipeContext.recipeIds.includes(props.id)) {
      setSaved(true);
    }
  }, [savedRecipeContext, setSaved, props.id]);

  return (
    <section
      className={
        'recipe_view_header md:col-start-1 md:col-end-7 lg:col-end-13 w-full h-fit px-4 '
      }>
      <Container>
        <div
          className={
            'w-full h-fit grid grid-cols-6 lg:grid-cols-12 auto-rows-auto gap-4'
          }>
          <h1
            className={
              'recipe_view_header__heading col-start-1 col-end-7 lg:col-end-11 w-full h-fit'
            }>
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

          {/* DOWNLOAD BUTTON */}
          <IconButton
            classes={
              'col-start-5 col-end-6 lg:col-start-11 lg:col-end-12 w-full h-full flex flex-row items-center justify-center'
            }>
            <FaDownload
              size={'1.5rem'}
              color={'var(--clr-accent)'}
            />
          </IconButton>

          {/* FAVOURITE BUTTON */}
          {authStatus == 'authenticated' ? (
            <RecipeSaveBtn
              width={'full'}
              height={'full'}
              recipeId={props.id}
              recipeName={props.recipeName}
              recipeImage={props.recipeImage}
              saved={saved}
              classes={'col-start-5 col-end-6 lg:col-start-12 lg:col-end-13'}
            />
          ) : null}
        </div>
        <hr />
      </Container>
    </section>
  );
}

export default RecipeViewHeader;
