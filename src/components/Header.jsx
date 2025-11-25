import React from 'react';
import styles from '../styles/Header.module.css';

const Header = ({ data }) => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1 className={`${styles.name} glow`}>{data.name}</h1>
        <h2 className={`${styles.title} glow-purple`}>{data.title}</h2>
        <p className={styles.description}>{data.description}</p>
        <div className={styles.info}>
          <p>📍 {data.location}</p>
          <p>✉️ {data.email}</p>
          <p>📱 {data.phone}</p>
        </div>
      </div>
      <div className={styles.scanline}></div>
    </header>
  );
};

export default Header;