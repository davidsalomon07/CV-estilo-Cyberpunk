import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import client from '../api/client';
import Section from '../components/Section.jsx';
import styles from '../styles/App.module.css';

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.get(`/posts/${id}`)
      .then(res => {
        setPost(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error cargando post:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Section title="Cargando post..."><p style={{ textAlign: 'center' }}>Cargando...</p></Section>;
  }

  if (!post) {
    return <Section title="Post no encontrado"><p style={{ textAlign: 'center' }}>El post no existe.</p></Section>;
  }

  return (
    <Section title={post.title}>
      <p style={{ color: '#ff00ff', fontStyle: 'italic', textAlign: 'center', marginBottom: '2rem' }}>
        Publicado el {post.date}
      </p>
      <div className={styles.card} style={{ padding: '2rem' }}>
        <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.8', fontSize: '1.1rem' }}>
          {post.content}
        </div>
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link to="/posts" style={{ color: '#00ffff', fontSize: '1.2rem' }}>
            ← Volver al blog
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default BlogDetail;