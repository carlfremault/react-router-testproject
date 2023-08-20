import { Request, Response, NextFunction } from 'express';
import db from '../../utils/dbConnection';

export default async function deleteNote(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { id } = req.params;
  const query = 'DELETE FROM notes WHERE id = ?';

  await db.query(query, [id], function (err: any, result: any, fields: any) {
    if (err) throw err;
    res.status(201).send({ message: 'Note deleted!' });
  });
}
