import { Link, useLocation } from 'react-router-dom';

export default function AppShell({ children }) {
  const location = useLocation();

  return (
    <div className="app-frame">
      <div className="background-grid" />
      <div className="background-orb orb-1" />
      <div className="background-orb orb-2" />
      <div className="background-orb orb-3" />

      <header className="topbar glass">
        <Link to="/" className="brand">
          <span className="brand-mark">গ</span>
          <div>
            <strong>Golpo Setu</strong>
            <p>Read the world in Bengali</p>
          </div>
        </Link>

        <nav className="nav-links">
          <Link className={location.pathname === '/' ? 'nav-active' : ''} to="/">Home</Link>
          <Link className={location.pathname.startsWith('/discover') ? 'nav-active' : ''} to="/discover">Discover</Link>
        </nav>
      </header>

      <main className="page-wrap">{children}</main>
    </div>
  );
}
