import getTrendingRecipes from '@/lib/getTrendingRecipes';
import { NextApiRequest, NextApiResponse } from 'next';

const APP_ID = 'a44d6944';
const APP_KEY = '12829287bd94e89f6de603daf7aa19e2';
const ENDPOINT = `https://api.edamam.com/api/recipes/v2?app_id=${APP_ID}&app_key=${APP_KEY}&`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const recipeObjects = await getTrendingRecipes(ENDPOINT);
  res.status(200).json(recipeObjects);
}
