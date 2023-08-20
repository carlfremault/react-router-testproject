import { Request, Response, NextFunction } from 'express';
import { noteSchema } from '../../schemas/notesSchema';
import { ZodError } from 'zod';
import mysql from 'mysql';
import db from '../../utils/dbConnection';

export default async function patchNote(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params;
    const validBody = await noteSchema.parseAsync(req.body);
    const { title, category, content } = validBody;

    let query =
      'UPDATE notes SET title = ?, category = ?, content = ? WHERE id = ?';
    query = mysql.format(query, [title, category, content, id]);

    await db.query(query, function (err: any, result: any, fields: any) {
      if (err) throw err;
      res.status(201).send({ message: 'Note edited!' });
    });
  } catch (error) {
    if (error instanceof ZodError)
      return res.status(422).json({
        message: 'Saving note failed due to validation errors:',
        errors: error.flatten(),
      });
    else next(error);
  }
}
