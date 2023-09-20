import { SavedRecipe } from '@/Types/RecipeApiTypes';
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
  const { data: authData, status } = useSession();
  const execute = useFetch();
  const [savedRecipes, setSavedRecipes] = useState<Array<string>>([]);

  const getSavedRecipes = useCallback(async () => {
    const result = await execute(
      `/api/user/getSavedRecipes?email=${authData?.user?.email}`,
      {}
    );
    const savedRecipeIds = (result.recipes as Array<SavedRecipe>).map(
      (recipeObj) => {
        return recipeObj.recipeId;
      }
    );
    setSavedRecipes(savedRecipeIds);
  }, [execute, authData?.user]);

  return (
    <SavedRecipeContext.Provider
      value={{ recipeIds: savedRecipes, getSavedRecipes: getSavedRecipes }}>
      {props.children}
    </SavedRecipeContext.Provider>
  );
}

export default SavedRecipeContextProvider;
export { SavedRecipeContext };
