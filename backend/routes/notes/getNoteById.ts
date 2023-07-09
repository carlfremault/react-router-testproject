import { Request, Response, NextFunction } from 'express';
import { notes as NOTES } from '../../json/notes.json';

export default function getNoteById(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params;
    res.status(201).send(NOTES.filter((note) => note.id === id));
  } catch (error) {
    next(error);
  }
}
