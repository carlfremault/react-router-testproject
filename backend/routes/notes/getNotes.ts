import { Request, Response, NextFunction } from 'express';
import { notes as NOTES } from '../../json/notes.json';

export default function getNotes(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    res.send(NOTES);
  } catch (error) {
    next(error);
  }
}
