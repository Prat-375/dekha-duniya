import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DiscoverPage from './pages/DiscoverPage';
import BookDetailPage from './pages/BookDetailPage';
import AppShell from './components/AppShell';

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/books/:id" element={<BookDetailPage />} />
      </Routes>
    </AppShell>
  );
}
