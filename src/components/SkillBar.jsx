import React from 'react';
import styles from '../styles/SkillBar.module.css';

const SkillBar = ({ name, level }) => {
  return (
    <div className={styles.skill}>
      <div className={styles.header}>
        <span className={styles.name}>{name}</span>
        <span className={styles.percent}>{level}%</span>
      </div>
      <div className={styles.bar}>
        <div className={styles.fill} style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;