import getDBClient from '@/lib/getDBClient';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('POST COMMENT REQUEST ===========================');
  console.log(req.body);
  const { userId, userName, recipeId, content, date } = JSON.parse(req.body);
  const dbClient = await getDBClient();
  try {
    const db = dbClient.db();
    const collection = db.collection('recipe_comments');
    const document = await collection.findOne({ recipeId: recipeId });
    if (document) {
      await collection.updateOne(
        { recipeId: recipeId },
        {
          $push: {
            comments: {
              userId: userId,
              userName: userName,
              comment: content,
              commentDate: date,
            },
          },
        }
      );
    } else {
      await collection.insertOne({
        recipeId: recipeId,
        comments: [
          {
            userId: userId,
            userName: userName,
            comment: content,
            commentDate: date,
          },
        ],
      });
    }
    res.status(200).json({ message: 'OK' });
    dbClient.close();
  } catch (error) {
    dbClient.close();
    console.log(error);
    res.status(500).json({ message: 'Failed to post your comment. Sorry.' });
  }
  console.log('POST COMMENT REQUEST END =======================\n');
}
