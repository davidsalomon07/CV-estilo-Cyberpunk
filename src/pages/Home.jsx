import { useEffect, useState } from 'react';
import client from '../api/client';
import Header from '../components/Header.jsx';
import Section from '../components/Section.jsx';
import SkillBar from '../components/SkillBar.jsx';
import ContactItem from '../components/ContactItem.jsx';
import Footer from '../components/Footer.jsx';
import styles from '../styles/App.module.css';

// Datos personales y habilidades locales (puedes moverlos a API después si quieres)
const personal = {
  name: "DAVID SALOMÓN",
  title: "Estudiante de Desarrollo de Software | Next-Gen Web Creator",
  description: "Estudiante de Desarrollo de Software (3.º semestre) obsesionado con crear interfaces futuristas, código limpio y experiencias digitales que parecen sacadas de una distopía neon.",
  location: "Quito, Ecuador",
  email: "ldsalomon@puce.edu.ec",
  phone: "+593 998 171 028",
  linkedin: "linkedin.com/in/davidsalomon07",
  github: "github.com/davidsalomon07"
};

const skills = [
  { name: "React + Vite", level: 88 },
  { name: "JavaScript ES6+", level: 90 },
  { name: "HTML5 + CSS3", level: 92 },
  { name: "Tailwind / CSS Modules", level: 85 },
  { name: "Git + GitHub", level: 90 },
  { name: "Node.js básico", level: 70 },
  { name: "Figma (UI/UX)", level: 82 },
  { name: "Responsive Design", level: 95 },
  { name: "APIs REST", level: 80 },
  { name: "Lógica y Algoritmos", level: 85 }
];

const Home = () => {
  const [experiencia, setExperiencia] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.get('/experiencia')
      .then(res => {
        setExperiencia(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error cargando experiencia:', err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header data={personal} />

      <Section title="Experiencia Laboral">
        {loading ? (
          <p style={{ textAlign: 'center' }}>Cargando experiencia desde API...</p>
        ) : experiencia.length === 0 ? (
          <p style={{ textAlign: 'center' }}>No hay experiencia disponible.</p>
        ) : (
          experiencia.map((exp) => (
            <div key={exp.id} className={styles.card}>
              <h3>{exp.role} <span>@ {exp.company}</span></h3>
              <p className={styles.period}>{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))
        )}
      </Section>

      <Section title="Habilidades">
        {skills.map((skill, i) => (
          <SkillBar key={i} name={skill.name} level={skill.level} />
        ))}
      </Section>

      <Section title="Contacto">
        <div style={{ textAlign: 'center', fontSize: '1.3rem' }}>
          <ContactItem icon="✉️" text={personal.email} link={`mailto:${personal.email}`} />
          <ContactItem icon="🔗" text={personal.linkedin} link={`https://${personal.linkedin}`} />
          <ContactItem icon="💻" text={personal.github} link={`https://${personal.github}`} />
        </div>
      </Section>

      <Footer />
    </>
  );
};

export default Home;