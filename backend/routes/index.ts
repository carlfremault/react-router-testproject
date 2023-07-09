import { Router } from 'express';
import notesRoutes from './notes';

const routes = Router();

routes.use('/notes', notesRoutes);

routes.get('/', (req, res, next) => {
  res.send('Hello World!');
  next();
});

export default routes;
