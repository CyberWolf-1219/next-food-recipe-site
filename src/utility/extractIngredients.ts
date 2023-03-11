import { Recipe } from '@/Types/RecipeApiTypes';

export default function extractIngredients(recipe: Recipe) {
  // GET OBJECT KEYS
  const keys = Object.keys(recipe);

  //   FILTER OUT INGREDIENT KEYS
  const ingredientKeys = keys.filter((key) => {
    if (key.includes('strIngredient')) {
      return key;
    }
  });

  //   GET INGREDIENT VALUES
  const ingredients = ingredientKeys.map((key) => {
    const value = recipe[key as keyof Recipe];
    if (value !== '' && value !== null) {
      return value;
    }
  });

  //   FILTERE OUT EMPTY INGREDIENTS
  const filteredIngredients = filterEmpty(ingredients as Array<string>);

  //   FILTER MEASURE KEYS
  const amountKeys = keys.filter((key) => {
    if (key.includes('strMeasure')) {
      return true;
    }
  });

  //   GET MEASURES
  const amounts = amountKeys.map((key) => {
    const value = recipe[key as keyof Recipe];
    if (value !== '' && value !== ' ' && value !== null) {
      return value;
    }
  });

  //   FILTER OUT EMPTY MEASURES
  const filteredAmounts = filterEmpty(amounts as Array<string>);

  //   MAP MEASURES TO INGREDIENTS
  const mappedIngredients = mapLists(filteredIngredients, filteredAmounts);

  return mappedIngredients;
}

function filterEmpty(list: Array<string>) {
  const filteredList = list.filter((item) => {
    if (item !== undefined) {
      return true;
    }
  });
  return filteredList;
}

function mapLists(list_1: Array<string>, list_2: Array<string>) {
  const ingredients = [];
  for (let i = 0; i < list_1.length; i++) {
    ingredients.push({ ingredient: list_1[i], amount: list_2[i] });
  }
  return ingredients;
}
