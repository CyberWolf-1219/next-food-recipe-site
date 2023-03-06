import useFetch from '@/hooks/useFetch';
import { useSession } from 'next-auth/react';
import React, {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';

const initialValu = {
  recipeIds: [],
  getSavedRecipes: () => {},
};

const SavedRecipeContext = createContext<{
  recipeIds: Array<string>;
  getSavedRecipes: () => void;
}>(initialValu);

interface iSavedRecipeContextProvider {
  children: ReactNode | ReactNode[];
}

function SavedRecipeContextProvider(props: iSavedRecipeContextProvider) {
  const { data, status } = useSession();
  const [execute, result] = useFetch();
  const [savedRecipes, setSavedRecipes] = useState<Array<string>>([]);

  const getSavedRecipes = useCallback(async () => {
    await execute(`/api/user/getSavedRecipes?email=${data?.user?.email}`, {});
  }, [execute, data?.user]);

  useEffect(() => {
    if (!result?.recipes) return;
    const savedRecipeIds = (result.recipes as Array<SavedRecipe>).map(
      (recipeObj) => {
        return recipeObj.recipeId;
      }
    );
    setSavedRecipes(savedRecipeIds);
  }, [result]);

  return (
    <SavedRecipeContext.Provider
      value={{ recipeIds: savedRecipes, getSavedRecipes: getSavedRecipes }}>
      {props.children}
    </SavedRecipeContext.Provider>
  );
}

export default SavedRecipeContextProvider;
export { SavedRecipeContext };
