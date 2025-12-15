import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import client from '../api/client';
import Section from '../components/Section.jsx';
import styles from '../styles/App.module.css';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.get('/posts')
      .then(res => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error cargando posts:', err);
        setLoading(false);
      });
  }, []);

  return (
    <Section title="Blog Técnico">
      {loading ? (
        <p style={{ textAlign: 'center' }}>Cargando posts...</p>
      ) : posts.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No hay posts disponibles.</p>
      ) : (
        <div style={{ display: 'grid', gap: '2rem' }}>
          {posts.map(post => (
            <div key={post.id} className={styles.card}>
              <h3 style={{ color: '#00ffff' }}>
                <Link to={`/posts/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {post.title}
                </Link>
              </h3>
              <p style={{ color: '#ff00ff', fontStyle: 'italic', margin: '0.5rem 0' }}>
                {post.date}
              </p>
              <p>{post.content.substring(0, 200)}...</p>
              <Link to={`/posts/${post.id}`} style={{ color: '#00ffff' }}>
                Leer más →
              </Link>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
};

export default BlogList;