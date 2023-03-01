import getLatestRecipes from '@/lib/getLatestRecipes';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const recipes = await getLatestRecipes();
  res.status(200).json({ recipes: recipes });
}
