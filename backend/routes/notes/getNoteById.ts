import { Request, Response, NextFunction } from 'express';
import db from '../../utils/dbConnection';

export default async function getNoteById(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { id } = req.params;
  const query = 'SELECT * FROM notes WHERE id = ?';

  await db.query(query, [id], (err: any, result: any, fields: any) => {
    if (err) throw err;
    res.send(result);
  });
}
