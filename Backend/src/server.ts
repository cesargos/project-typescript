import express from 'express';
// import routes from './routes';

const app = express();

app.get('/', (req, res) =>
  res.json({ message: 'Servidor rodando na porta 3333' }),
);

app.listen(3333, () => {
  global.console.log('  🚀 Server started on port 3333! 🚀');
});
