import getPopularRecipes from '@/lib/getPopularRecipes';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const recipes = await getPopularRecipes();
  res.status(200).json({ recipes: recipes });
}
