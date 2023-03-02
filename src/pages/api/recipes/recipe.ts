import getRecipeDetails from '@/lib/getRecipeDetails';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const recipeID = req.query.id;
  const recipe = await getRecipeDetails(recipeID as string);
  res.status(200).json({ recipe: recipe });
}
