import getDBClient from '@/lib/getDB';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Hanlder(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('RECIPE ADD REQUEST ===============================');
  console.log(req.body);
  const { email, recipeId, recipeName, recipeThumb } = JSON.parse(req.body);
  console.log(
    `EMAIL:${email}, RECIPEID:${recipeId}, RECIPENAME:${recipeName},RECIPETHUMB:${recipeThumb}`
  );

  const dbClient = await getDBClient();
  try {
    const db = dbClient.db();
    const collection = db.collection('user-favourites');

    const userDocument = await collection.findOne({ email: email });
    console.log(userDocument);

    if (userDocument) {
      const result = await collection.updateOne(
        { email: email },
        {
          $push: { recipes: { recipeId, recipeName, recipeThumb } },
        }
      );
      console.log(result);
    } else {
      const result = await collection.insertOne({
        email: email,
        recipes: [
          {
            recipeId: recipeId,
            recipeName: recipeName,
            recipeThumb: recipeThumb,
          },
        ],
      });
      console.log(result);
    }
    dbClient.close();
    res.status(200).json({ message: 'Recipe Saved!' });
  } catch (error) {
    dbClient.close();
    console.error(error);
    res.status(510).json({ message: 'Failed To Save Recipe' });
  }
  console.log('RECIPE ADD REQUEST END ===========================\n');
}
