import { Router } from 'express';
import getNotes from './getNotes';
import postNotes from './postNotes';
import getNoteById from './getNoteById';
import patchNote from './patchNote';
import deleteNote from './deleteNote';

const notesRoutes = Router();

notesRoutes.get('/', getNotes);
notesRoutes.post('/', postNotes);
notesRoutes.get('/:id', getNoteById);
notesRoutes.patch('/:id', patchNote);
notesRoutes.delete('/:id', deleteNote);

export default notesRoutes;
