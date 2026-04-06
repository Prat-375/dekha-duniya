import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function BookDetailPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchBook() {
      try {
        setLoading(true);
        const response = await fetch(`/api/books/${id}`);
        if (!response.ok) throw new Error('Book not found.');
        const data = await response.json();
        setBook(data.book);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBook();
  }, [id]);

  if (loading) return <div className="state-card glass">Loading book details…</div>;
  if (error) return <div className="state-card glass error-card">{error}</div>;
  if (!book) return null;

  return (
    <section className="detail-layout glass">
      <div className="detail-headline">
        <span className="eyebrow">{book.originCulture} literature</span>
        <h1>{book.title}</h1>
        <p className="book-author">by {book.author}</p>
      </div>

      <div className="detail-meta-row">
        <span className={`availability ${book.availableInBengali ? 'available' : 'unavailable'}`}>
          {book.availableInBengali ? 'Available in Bengali' : 'Not yet available in Bengali'}
        </span>
        <span className="meta-note">Reading level: {book.readingLevel}</span>
      </div>

      <div className="detail-columns">
        <div>
          <h3>Why it fits</h3>
          <p>{book.whyItFits}</p>

          <h3>Summary</h3>
          <p>{book.summary}</p>
        </div>

        <div>
          <h3>Genres</h3>
          <div className="tag-wrap">
            {book.genres.map((genre) => (
              <span key={genre} className="book-tag">{genre}</span>
            ))}
          </div>

          <h3>Actions</h3>
          <div className="action-stack">
            <a className="cta-solid" href={book.purchaseUrl} target="_blank" rel="noreferrer">
              {book.availableInBengali ? 'Find Bengali edition' : 'Explore available editions'}
            </a>
            <Link className="cta-soft" to="/discover">Back to discovery</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
