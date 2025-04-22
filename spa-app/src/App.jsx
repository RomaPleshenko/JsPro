import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import ErrorBoundary from './components/ErrorBoundary';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <header className="p-4 bg-gray-200 dark:bg-gray-800 flex justify-between">
        <nav className="space-x-4">
          <Link to="/">Головна</Link>
          <Link to="/contacts">Контакти</Link>
          <Link to="/about">Про мене</Link>
        </nav>
        <ThemeToggle />
      </header>
      <main className="p-4">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ErrorBoundary>
      </main>
    </div>
  );
}
