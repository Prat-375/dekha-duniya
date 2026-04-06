const genres = [
  'Thriller',
  'Mystery',
  'Philosophical',
  'Emotional',
  'Historical',
  'Magical Realism',
  'Adventure',
  'Classic Drama',
];

export default function GenreSelector({ selectedGenres, onToggle }) {
  return (
    <div className="genre-grid">
      {genres.map((genre) => {
        const active = selectedGenres.includes(genre);
        return (
          <button
            key={genre}
            type="button"
            className={`genre-pill ${active ? 'genre-pill-active' : ''}`}
            onClick={() => onToggle(genre)}
          >
            {genre}
          </button>
        );
      })}
    </div>
  );
}
