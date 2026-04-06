import Book from '../models/Book.js';
import { sampleBooks } from '../data/books.js';

function filterBooks(books, culture, genres) {
  return books.filter((book) => {
    const cultureMatch = culture ? book.originCulture.toLowerCase() === culture.toLowerCase() : true;
    const genreMatch = genres.length
      ? genres.some((genre) => book.genres.map((g) => g.toLowerCase()).includes(genre.toLowerCase()))
      : true;
    return cultureMatch && genreMatch;
  });
}

export async function getBooks(req, res) {
  const culture = req.query.culture || '';
  const genres = req.query.genres ? req.query.genres.split(',').filter(Boolean) : [];

  try {
    const dbBooks = await Book.find({}).lean();
    const sourceBooks = dbBooks.length ? dbBooks : sampleBooks;
    const filtered = filterBooks(sourceBooks, culture, genres);
    return res.json({ books: filtered });
  } catch (error) {
    const filtered = filterBooks(sampleBooks, culture, genres);
    return res.json({ books: filtered, fallback: true });
  }
}

export async function getBookById(req, res) {
  const { id } = req.params;

  try {
    const book = await Book.findById(id).lean();
    if (book) return res.json({ book });

    const fallbackBook = sampleBooks.find((item) => item._id === id);
    if (fallbackBook) return res.json({ book: fallbackBook, fallback: true });

    return res.status(404).json({ message: 'Book not found.' });
  } catch (error) {
    const fallbackBook = sampleBooks.find((item) => item._id === id);
    if (fallbackBook) return res.json({ book: fallbackBook, fallback: true });
    return res.status(404).json({ message: 'Book not found.' });
  }
}
