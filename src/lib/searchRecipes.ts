const ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export default async function searchRecipes(query: string) {
  try {
    const response = await fetch(ENDPOINT + query);
    const jsonResult: RecipeSearchResponse = await response.json();
    return jsonResult.meals;
  } catch (error) {
    console.log(error);
    return [];
  }
}
