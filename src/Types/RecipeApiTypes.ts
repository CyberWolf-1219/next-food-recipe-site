type Diet =
  | 'balanced'
  | 'high-fiber'
  | 'high-protien'
  | 'low-carb'
  | 'low-fat'
  | 'low-sodium';

type Health =
  | 'alcohol-cocktail'
  | 'alcohol-free'
  | 'celery-free'
  | 'crustacean-free'
  | 'dairy-free'
  | 'DASH'
  | 'egg-free'
  | 'fish-free'
  | 'fodmap-free'
  | 'gluten-free'
  | 'immuno-supportive'
  | 'keto-friendly'
  | 'kidney-friendly'
  | 'kosher'
  | 'lob-fat-abs'
  | 'low-potassium'
  | 'low-sugar'
  | 'lupine-free'
  | 'Mediterranean'
  | 'mollusk-free'
  | 'mustard-free'
  | 'no-oil-added'
  | 'paleo'
  | 'peanut-free'
  | 'pecatarian'
  | 'pork-free'
  | 'red-meat-free'
  | 'sesame-free'
  | 'shellfish-free'
  | 'soy-free'
  | 'sugar-conscious'
  | 'sulfite-free'
  | 'tree-nut-free'
  | 'vegan'
  | 'vegetarian'
  | 'wheat-free';

type MealType = 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack' | 'Teatime';

type DishType =
  | 'Biscuits and cookies'
  | 'Bread'
  | 'Cereals'
  | 'Condiments and sauces'
  | 'Desserts'
  | 'Drinks'
  | 'Main course'
  | 'Pancake'
  | 'Preps'
  | 'Preserve'
  | 'Salad'
  | 'Sandwiches'
  | 'Side dish'
  | 'Soup'
  | 'Starter'
  | 'Sweets';

type ImageSize = 'LARGE' | 'REGULAR' | 'SMALL';

type Field =
  | 'uri'
  | 'label'
  | 'image'
  | 'images'
  | 'source'
  | 'url'
  | 'shareAs'
  | 'yield'
  | 'dietLabels'
  | 'healthLabels'
  | 'cautions'
  | 'ingredientLines'
  | 'ingredients'
  | 'calories'
  | 'glycemicIndex'
  | 'totalCO2Emissions'
  | 'co2EmissionsClass'
  | 'totalWeight'
  | 'totalTime'
  | 'cuisineType'
  | 'mealType'
  | 'dishType'
  | 'totalNutrients'
  | 'totalDaily'
  | 'digest'
  | 'tags';

export type RecipeRequestParameters = {
  type: 'public';
  beta: false;
  q?: string;
  ingr?: string;
  diet?: Array<Diet>;
  health?: Array<Health>;
  mealType?: Array<MealType>;
  dishType?: Array<DishType>;
  calories?: string;
  time?: string;
  imageSize?: ImageSize;
  random?: boolean;
  field?: Array<Field>;
};

type Link = {
  href: string;
  title: string;
};

type ImageInfo = {
  url: string;
  width: number;
  height: number;
};

type Ingredient = {
  text: string;
  quantity: number;
  measure: string;
  food: string;
  weight: number;
  foodId: string;
};

type CO2EmmissionClass = 'A+' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

type DigestEntry = {
  label: string;
  tag: string;
  schemaOrgTag: string;
  total: number;
  hasRDI: true;
  daily: number;
  unit: string;
  sub: {};
};

export type Recipe = {
  uri: string;
  label: string;
  image: string;
  images: {
    THUMBNAIL: ImageInfo;
    SMALL: ImageInfo;
    REGULAR: ImageInfo;
    LARGE: ImageInfo;
  };
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: Array<string>;
  healthLabels: Array<string>;
  cautions: Array<string>;
  ingredientLines: Array<string>;
  ingredients: Array<Ingredient>;
  calories: number;
  glycemicIndex: number;
  totalCO2Emissions: number;
  co2EmissionsClass: CO2EmmissionClass;
  totalWeight: number;
  cuisineType: Array<string>;
  mealType: Array<string>;
  dishType: Array<string>;
  instructions: Array<string>;
  tags: Array<string>;
  externalId: string;
  totalNutrients: {};
  totalDaily: {};
  digest: Array<DigestEntry>;
};

export type ResponseRecipeObject = {
  recipe: Recipe;
  _links: {
    self?: Link;
    next?: Link;
  };
};

export type RecipeApiResponse = {
  from: number;
  to: number;
  count: number;
  _links: {
    self?: Link;
    next?: Link;
  };
  hits: Array<ResponseRecipeObject>;
};
