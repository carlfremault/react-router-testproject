import { Request, Response, NextFunction } from 'express';
import { noteSchema } from '../../schemas/notesSchema';
import { ZodError } from 'zod';
import mysql from 'mysql';
import db from '../../utils/dbConnection';

export default async function postNotes(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const validBody = await noteSchema.parseAsync(req.body);
    const { id, title, category, content } = validBody;

    let query =
      'INSERT INTO notes (id, title, category, content) VALUES (?, ?, ?, ?)';
    query = mysql.format(query, [id, title, category, content]);

    db.query(query, function (err: any, result: any, fields: any) {
      if (err) throw err;
      res.status(201).send({ message: 'Note created!' });
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
