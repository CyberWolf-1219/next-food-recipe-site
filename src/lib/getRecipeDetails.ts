const ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

export default async function getRecipeDetails(id: string) {
  try {
    const response = await fetch(ENDPOINT + id);
    const jsonResult: RecipeDetailResponse = await response.json();
    return jsonResult.meals[0];
  } catch (error) {
    console.log(error);
    return {};
  }
}
