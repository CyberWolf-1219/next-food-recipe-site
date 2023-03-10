const ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/random.php';

export default async function getTrendingRecipes() {
  const requestConfig: RequestInit = {
    method: 'GET',
    mode: 'cors',
  };

  const recipes: Array<Recipe> = [];

  try {
    for (let i = 0; i < 10; i++) {
      const response = await fetch(ENDPOINT, requestConfig);
      const result: RandomRecipeResponse = await response.json();
      recipes.push(result.meals[0]);
    }
    return recipes;
  } catch (error) {
    console.log(error);
  }
}
