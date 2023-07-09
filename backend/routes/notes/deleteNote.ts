import { Request, Response, NextFunction } from 'express';
import { notes as NOTES } from '../../json/notes.json';

export default function deleteNote(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params;
    const index = NOTES.findIndex((el) => el.id === id);
    NOTES.splice(index, 1);
    res.status(201).send({ message: 'Note deleted!' });
  } catch (error) {
    next(error);
  }
}
