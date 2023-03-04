import getDBClient from '@/lib/getDB';
import { WithId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('SAVED RECIPE LIST REQUEST =============================');
  const { email } = req.body;
  const dbClient = await getDBClient();
  const db = dbClient.db();
  const collection = db.collection('user-favourites');
  try {
    const userDocument = await collection.findOne({ email: email });
    console.log('DOCUMENT: ', userDocument);
    res.status(200).json({ recipes: userDocument?.recipes });
    dbClient.close();
  } catch (error) {
    console.error(error);
    res.status(510).json({ message: "Huh, Couldn't Fetch Recipes..." });
    dbClient.close();
  }

  console.log('SAVED RECIPE LIST REQUEST END =========================\n');
}
