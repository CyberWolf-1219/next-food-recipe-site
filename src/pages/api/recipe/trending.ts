import getTrendingRecipes from '@/lib/getTrendingRecipes';
import { NextApiRequest, NextApiResponse } from 'next';

const ENDPOINTS = {
  search: 'www.themealdb.com/api/json/v1/1/search.php?s=',
  details: 'www.themealdb.com/api/json/v1/1/lookup.php?i=',
  categories: 'www.themealdb.com/api/json/v1/1/categories.php',
  mainIngredient: 'www.themealdb.com/api/json/v1/1/filter.php?i=',
  filterByCategory: 'www.themealdb.com/api/json/v1/1/filter.php?i=',
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const recipes = await getTrendingRecipes();
  res.status(200).json({ recipes: recipes });
}
