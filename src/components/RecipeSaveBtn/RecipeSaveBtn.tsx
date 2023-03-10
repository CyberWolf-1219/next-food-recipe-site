import useFetch from '@/hooks/useFetch';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import IconButton from '../IconButton/IconButton';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const sizeOptions = {
  fit: 'fit',
  full: 'full',
};

interface iRecipeSaveBtn {
  recipeId: string;
  recipeName: string;
  recipeImage: string;
  saved: boolean;
  classes?: string;
  width?: keyof typeof sizeOptions;
  height?: keyof typeof sizeOptions;
}

function RecipeSaveBtn(props: iRecipeSaveBtn) {
  const execute = useFetch();
  const { data: authData, status: authStatus } = useSession();
  const [saved, setSaved] = useState(props.saved);

  function saveRecipe() {
    execute('/api/user/saveRecipe', {
      method: 'POST',
      body: JSON.stringify({
        email: authData!.user!.email!,
        recipeId: props.recipeId,
        recipeName: props.recipeName,
        recipeThumb: props.recipeImage,
      }),
    });
    setSaved(true);
  }

  function removeRecipe() {
    execute('/api/user/removeRecipe', {
      method: 'POST',
      body: JSON.stringify({
        email: authData!.user!.email!,
        recipeId: props.recipeId,
      }),
    });
    setSaved(false);
  }

  function saveBtnHanlder() {
    if (saved) {
      return removeRecipe();
    } else {
      return saveRecipe();
    }
  }

  useEffect(() => {
    setSaved(props.saved);
  }, [props.saved]);

  return (
    <IconButton
      width={props.width ?? 'fit'}
      height={props.height ?? 'fit'}
      classes={`${props.classes}`}
      action={saveBtnHanlder}>
      {saved ? (
        <AiFillHeart
          size={'2rem'}
          color={'var(--clr-accent)'}
          className={'mx-auto'}
        />
      ) : (
        <AiOutlineHeart
          size={'2rem'}
          color={'var(--clr-accent)'}
          className={'mx-auto'}
        />
      )}
    </IconButton>
  );
}

export default RecipeSaveBtn;
