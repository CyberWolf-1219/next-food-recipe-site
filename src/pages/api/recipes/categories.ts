import getAllCategories from '@/lib/getAllCategories';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const categories = await getAllCategories();
  res.status(200).json({ categories: categories });
}
