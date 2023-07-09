import { Request, Response, NextFunction } from 'express';
import { notes as NOTES } from '../../json/notes.json';

export default function postNotes(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { id, title, category, content } = req.body;
  NOTES.push({ id, title, category, content });
  res.status(201).send({ message: 'Note created!' });
}
