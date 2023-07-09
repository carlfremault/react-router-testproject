import { Request, Response, NextFunction } from 'express';
import { notes as NOTES } from '../../json/notes.json';
import { noteSchema } from '../../schemas/notesSchema';
import { ZodError } from 'zod';

export default async function postNotes(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const validBody = await noteSchema.parseAsync(req.body);
    const { id, title, category, content } = validBody;

    NOTES.push({ id, title, category, content });

    res.status(201).send({ message: 'Note created!' });
  } catch (error) {
    if (error instanceof ZodError)
      return res.status(422).json({
        message: 'Saving note failed due to validation errors:',
        errors: error.flatten(),
      });
    else next(error);
  }
}
