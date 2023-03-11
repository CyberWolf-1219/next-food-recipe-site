import { CategoriesResponse } from '@/Types/RecipeApiTypes';

const ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/categories.php';

export default async function getAllCategories() {
  try {
    const response = await fetch(ENDPOINT);
    const jsonResult: CategoriesResponse = await response.json();
    return jsonResult.categories;
  } catch (error) {
    console.log(error);
    return [];
  }
}
