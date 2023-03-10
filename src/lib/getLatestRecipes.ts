const ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/random.php';

export default async function getLatestRecipes() {
  const latestRecipes: Array<Recipe> = [];

  try {
    for (let i = 0; i < 6; i++) {
      const response = await fetch(ENDPOINT);
      const jsonResult: RandomRecipeResponse = await response.json();
      latestRecipes.push(jsonResult.meals[0]);
    }

    return latestRecipes;
  } catch (error) {
    console.log(error);
    return [];
  }
}
