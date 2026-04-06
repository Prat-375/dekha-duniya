import { useEffect, useMemo, useState } from 'react';
import GenreSelector from '../components/GenreSelector';
import CulturePicker from '../components/CulturePicker';
import BookCard from '../components/BookCard';

export default function DiscoverPage() {
  const [selectedGenres, setSelectedGenres] = useState(['Thriller']);
  const [selectedCulture, setSelectedCulture] = useState('Russian');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const query = useMemo(() => {
    const params = new URLSearchParams();
    if (selectedCulture) params.set('culture', selectedCulture);
    if (selectedGenres.length) params.set('genres', selectedGenres.join(','));
    return params.toString();
  }, [selectedCulture, selectedGenres]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        setLoading(true);
        setError('');
        const response = await fetch(`/api/books?${query}`);
        if (!response.ok) throw new Error('Could not load books.');
        const data = await response.json();
        setBooks(data.books || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, [query]);

  function toggleGenre(genre) {
    setSelectedGenres((current) => {
      if (current.includes(genre)) {
        return current.length === 1 ? current : current.filter((item) => item !== genre);
      }
      return [...current, genre].slice(-2);
    });
  }

  return (
    <section className="discover-layout">
      <aside className="discover-sidebar glass">
        <div>
          <span className="eyebrow">Your exploration</span>
          <h2>Pick your reading taste</h2>
          <p>Choose up to two genres and a culture to shape today’s recommendations.</p>
        </div>

        <div className="field-block">
          <h3>Genre</h3>
          <GenreSelector selectedGenres={selectedGenres} onToggle={toggleGenre} />
        </div>

        <div className="field-block">
          <h3>Culture</h3>
          <CulturePicker selectedCulture={selectedCulture} onChange={setSelectedCulture} />
        </div>
      </aside>

      <section className="results-area">
        <div className="results-header glass">
          <div>
            <span className="eyebrow">Recommended for you</span>
            <h2>{selectedCulture} books for a Bengali reader</h2>
          </div>
          <p>{selectedGenres.join(' • ')}</p>
        </div>

        {loading && <div className="state-card glass">Loading recommendations…</div>}
        {error && <div className="state-card glass error-card">{error}</div>}
        {!loading && !error && books.length === 0 && (
          <div className="state-card glass">
            No exact match found. Later we can add a fallback recommendation engine here.
          </div>
        )}

        <div className="results-grid">
          {books.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </section>
    </section>
  );
}
