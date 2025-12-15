import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import BlogList from './pages/BlogList.jsx';
import BlogDetail from './pages/BlogDetail.jsx';
import { useTheme } from './contexts/ThemeContext.jsx';
import styles from './styles/App.module.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  const cyan = theme === 'dark' ? '#00ffff' : '#00aaff';
  const magenta = theme === 'dark' ? '#ff00ff' : '#ff66aa';

  return (
    <div className={styles.app}>
      <header style={{
        padding: '1.5rem 2rem',
      }}>
        <nav style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '1.3rem'
        }}>
          <div style={{ display: 'flex', gap: '3rem' }}>
            <Link to="/" style={{ color: cyan, textDecoration: 'none', fontWeight: '600' }}>
              Hoja de Vida
            </Link>
            <Link to="/posts" style={{ color: magenta, textDecoration: 'none', fontWeight: '600' }}>
              Blog Técnico
            </Link>
          </div>
          <button
            onClick={toggleTheme}
            style={{
              background: 'transparent',
              border: `2px solid ${cyan}`,
              color: cyan,
              padding: '0.6rem 1.2rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
          >
            {theme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
          </button>
        </nav>
      </header>

      <main style={{ minHeight: '80vh', padding: '2rem 0' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<BlogList />} />
          <Route path="/posts/:id" element={<BlogDetail />} />
        </Routes>
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '3rem 1rem',
        color: cyan,
        fontSize: '1.1rem'
      }}>
        © 2025 David Salomón • Portafolio Cyberpunk con React + JSON Server
      </footer>
    </div>
  );
}

export default App;