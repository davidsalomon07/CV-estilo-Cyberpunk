import React from 'react'
import Header from './components/Header.jsx'
import Section from './components/Section.jsx'
import SkillBar from './components/SkillBar.jsx'
import ContactItem from './components/ContactItem.jsx'
import Footer from './components/Footer.jsx'
import { cvData } from './data/cvData.js'
import styles from './styles/App.module.css'

function App() {
  const { personal, education, experience, skills } = cvData

  return (
    <div className={styles.app}>
      <Header data={personal} />

      <Section title="Educación">
        {education.map((edu, i) => (
          <div key={i} className={styles.card}>
            <h3>{edu.degree}</h3>
            <p><strong>{edu.school}</strong> • {edu.year}</p>
            <p>{edu.description}</p>
          </div>
        ))}
      </Section>

      <Section title="Experiencia">
        {experience.map((exp, i) => (
          <div key={i} className={styles.card}>
            <h3>{exp.role} <span>@ {exp.company}</span></h3>
            <p className={styles.period}>{exp.period}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </Section>

      <Section title="Habilidades">
        {skills.map((skill, i) => (
          <SkillBar key={i} name={skill.name} level={skill.level} />
        ))}
      </Section>

      <Section title="Contacto">
        <div style={{ textAlign: 'center', fontSize: '1.3rem' }}>
          <ContactItem icon="Correo" text={personal.email} link={`mailto:${personal.email}`} />
          <ContactItem icon="LinkedIn" text={personal.linkedin} link={`https://${personal.linkedin}`} />
          <ContactItem icon="GitHub" text={personal.github} link={`https://${personal.github}`} />
        </div>
      </Section>

      <Footer />
    </div>
  )
}

export default App