import getDBClient from '@/lib/getDBClient';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('RECIPE COMMENTS REQUEST ========================');
  console.log(req.query);
  const { recipeId } = req.query;
  const dbClient = await getDBClient();
  try {
    const db = dbClient.db();
    const collection = db.collection('recipe_comments');
    const document = await collection.findOne({ recipeId: recipeId });
    console.log(document);

    if (document) {
      res.status(200).json({ comments: document.comments });
    } else {
      res.status(200).json({ comments: [] });
    }

    dbClient.close();
  } catch (error) {
    dbClient.close();
    console.log(error);
    res.status(500).json({ message: 'Oops! Something went wrong. Sorry.' });
  }
  console.log('RECIPE COMMENTS REQUEST END ====================\n');
}
