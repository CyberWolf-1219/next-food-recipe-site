import searchRecipes from '@/lib/searchRecipes';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.query.q;
  const recipes = await searchRecipes(query as string);
  res.status(200).json({ recipes: recipes });
}
