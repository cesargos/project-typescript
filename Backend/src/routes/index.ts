import { Router } from 'express';
import appointments from './appointments.routes';

const routes = Router();

routes.get('/', (req, res) =>
  res.json({ message: 'Servidor rodando na porta 3333' }),
);

routes.use('/appointments', appointments);

export default routes;
