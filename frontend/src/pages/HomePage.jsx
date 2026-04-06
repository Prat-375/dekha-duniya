import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <section className="hero-layout">
      <div className="hero-copy">
        <span className="eyebrow">Global literature. Bengali-first discovery.</span>
        <h1>Find books from other cultures that already speak your language.</h1>
        <p className="hero-text">
          Golpo Setu helps Bengali readers discover Russian, Japanese, Latin American, and European books
          through taste, genre, and language availability.
        </p>
        <div className="hero-actions">
          <Link className="cta-solid" to="/discover">Start exploring</Link>
          <a className="cta-soft" href="#how-it-works">How it works</a>
        </div>
      </div>

      <div className="hero-panel glass">
        <div className="hero-panel-badge">Today’s discovery path</div>
        <div className="story-path">
          <div>
            <span>1</span>
            <p>Choose a genre you love</p>
          </div>
          <div>
            <span>2</span>
            <p>Explore books from another culture</p>
          </div>
          <div>
            <span>3</span>
            <p>Read only what exists in Bengali</p>
          </div>
        </div>
      </div>

      <section className="info-strip" id="how-it-works">
        <div className="info-card glass">
          <h3>Taste-led</h3>
          <p>Readers begin with genre, not exact titles.</p>
        </div>
        <div className="info-card glass">
          <h3>Culture-aware</h3>
          <p>Recommendations highlight where the story comes from.</p>
        </div>
        <div className="info-card glass">
          <h3>Language-safe</h3>
          <p>Surface books already available in Bengali first.</p>
        </div>
      </section>
    </section>
  );
}
