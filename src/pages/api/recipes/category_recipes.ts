import getCategoryRecipes from '@/lib/getCategoryRecipes';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Hanlder(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const categoryName = req.query.category;
  const recipes = await getCategoryRecipes(categoryName as string);
  res.status(200).json({ recipes: recipes });
}
