import { Router } from 'express';
import { getBookById, getBooks } from '../controllers/booksController.js';

const router = Router();

router.get('/', getBooks);
router.get('/:id', getBookById);

export default router;
