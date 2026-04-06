import express from 'express';
import cors from 'cors';
import booksRouter from './routes/books.js';

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL?.split(',') || '*',
  })
);
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'golposetu-api' });
});

app.use('/api/books', booksRouter);

export default app;
