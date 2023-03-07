import useFetch from '@/hooks/useFetch';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import IconButton from '../IconButton/IconButton';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface iRecipeSaveBtn {
  recipeId: string;
  recipeName: string;
  recipeImage: string;
  saved: boolean;
}

function RecipeSaveBtn(props: iRecipeSaveBtn) {
  console.log(props.saved);
  const [execute, result] = useFetch();
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
      width={'fit'}
      height={'fit'}
      classes={'absolute top-4 right-0 z-[10]'}
      action={saveBtnHanlder}>
      {saved ? (
        <AiFillHeart
          size={'2rem'}
          color={'#fc037b'}
        />
      ) : (
        <AiOutlineHeart
          size={'2rem'}
          color={'#fc037b'}
        />
      )}
    </IconButton>
  );
}

export default RecipeSaveBtn;
