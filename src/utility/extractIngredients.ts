export default function extractIngredients(recipe: Recipe) {
  // GET OBJECT KEYS
  const keys = Object.keys(recipe);
  console.log(keys);

  //   FILTER OUT INGREDIENT KEYS
  const ingredientKeys = keys.filter((key) => {
    if (key.includes('strIngredient')) {
      return key;
    }
  });
  console.log(ingredientKeys);

  //   GET INGREDIENT VALUES
  const ingredients = ingredientKeys.map((key) => {
    const value = recipe[key as keyof Recipe];
    if (value !== '' && value !== null) {
      return value;
    }
  });
  console.log(ingredients);

  //   FILTERE OUT EMPTY INGREDIENTS
  const filteredIngredients = filterEmpty(ingredients as Array<string>);
  console.log(filteredIngredients);

  //   FILTER MEASURE KEYS
  const amountKeys = keys.filter((key) => {
    if (key.includes('strMeasure')) {
      return true;
    }
  });
  console.log(amountKeys);

  //   GET MEASURES
  const amounts = amountKeys.map((key) => {
    const value = recipe[key as keyof Recipe];
    if (value !== '' && value !== ' ' && value !== null) {
      return value;
    }
  });
  console.log(amounts);

  //   FILTER OUT EMPTY MEASURES
  const filteredAmounts = filterEmpty(amounts as Array<string>);
  console.log(filteredAmounts);

  //   MAP MEASURES TO INGREDIENTS
  const mappedIngredients = mapLists(filteredIngredients, filteredAmounts);
  console.log(mappedIngredients);

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
