import getTrendingCategories from '@/lib/getTrendingCategories';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const categories = await getTrendingCategories();
  res.status(200).json({ categories: categories });
}
