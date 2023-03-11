import { CategoryRecipesResponse } from '@/Types/RecipeApiTypes';

const ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

export default async function getCategoryRecipes(categoryName: string) {
  try {
    const response = await fetch(ENDPOINT + categoryName);
    const jsonResult: CategoryRecipesResponse = await response.json();
    return jsonResult.meals;
  } catch (error) {
    console.log(error);
    return [];
  }
}
