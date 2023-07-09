import { Request, Response, NextFunction } from 'express';
import { notes as NOTES } from '../../json/notes.json';

export default function patchNote(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params;
    const { title, category, content } = req.body;
    const index = NOTES.findIndex((note) => note.id === id);
    NOTES[index] = { id, title, category, content };
    res.status(201).send({ message: 'Note edited!' });
  } catch (error) {
    next(error);
  }
}
