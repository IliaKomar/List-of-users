import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

const Preloader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/users')
    }, 2000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
      <div className={styles.preloader}>
          Hi! We are glad to see you here
      </div>
  );
};

export default Preloader;
