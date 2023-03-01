const ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/random.php';

export default async function getPopularRecipes() {
  const popularRecipes: Array<Recipe> = [];
  try {
    for (let i = 0; i < 8; i++) {
      const response = await fetch(ENDPOINT);
      const jsonResult: RandomRecipeResponse = await response.json();
      popularRecipes.push(jsonResult.meals[0]);
    }
    return popularRecipes;
  } catch (error) {
    console.log(error);
    return [];
  }
}
