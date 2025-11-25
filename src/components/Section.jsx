import React from 'react';
import styles from '../styles/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={`${styles.title} glow-purple`}>{title}</h2>
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
};

export default Section;