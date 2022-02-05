import React from 'react';
import styles from './styles.module.scss';

const AplicationLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default AplicationLayout;
