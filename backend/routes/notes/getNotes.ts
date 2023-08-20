import { Request, Response, NextFunction } from 'express';
import db from '../../utils/dbConnection';

export default async function getNotes(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const query = 'SELECT * FROM notes';

  await db.query(query, function (err: any, result: any, fields: any) {
    if (err) throw err;
    res.send(result);
  });
}
