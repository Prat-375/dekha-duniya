import { Link } from 'react-router-dom';

export default function BookCard({ book }) {
  return (
    <article className="book-card glass">
      <div className="book-card-top">
        <span className="book-origin">{book.originCulture}</span>
        <span className={`availability ${book.availableInBengali ? 'available' : 'unavailable'}`}>
          {book.availableInBengali ? 'Available in Bengali' : 'Explore globally'}
        </span>
      </div>
      <h3>{book.title}</h3>
      <p className="book-author">by {book.author}</p>
      <p className="book-hook">{book.hook}</p>
      <div className="tag-wrap">
        {book.genres.map((genre) => (
          <span className="book-tag" key={genre}>{genre}</span>
        ))}
      </div>
      <Link className="primary-link" to={`/books/${book._id}`}>View details</Link>
    </article>
  );
}
