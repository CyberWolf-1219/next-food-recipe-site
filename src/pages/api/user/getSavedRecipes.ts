import getDBClient from '@/lib/getDBClient';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('SAVED RECIPE LIST REQUEST =============================');
  console.log(req.query);
  const { email } = req.query;
  const dbClient = await getDBClient();
  try {
    const db = dbClient.db();
    const collection = db.collection('user-favourites');
    const userDocument = await collection.findOne({ email: email });
    console.log('DOCUMENT: ', userDocument);
    res.status(200).json({ recipes: userDocument?.recipes ?? [] });
    dbClient.close();
  } catch (error) {
    console.error(error);
    res.status(510).json({ message: "Huh, Couldn't Fetch Recipes..." });
    dbClient.close();
  }

  console.log('SAVED RECIPE LIST REQUEST END =========================\n');
}
