import getDBClient from '@/lib/getDB';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('RECIPE REMOVE REQUEST ===============================');
  const { email, recipeId } = JSON.parse(req.body);
  console.log('EMAIL: ', email, 'RECIPEID: ', recipeId);

  const dbClient = await getDBClient();
  try {
    const db = dbClient.db();
    const collection = db.collection('user-favourites');
    const result = await collection.updateOne(
      { email: email },
      { $pull: { recipes: { recipeId: recipeId } } }
    );
    console.log(result);
    dbClient.close();
    res.status(200).json({ message: 'Recipe Removed From Favourites!' });
  } catch (error) {
    dbClient.close();
    console.error(error);
    res
      .status(510)
      .json({ message: "Sorry, Couldn't Remove the Recipe From Favourites." });
  }
  console.log('RECIPE REMOVE REQUEST END ===========================\n');
}
