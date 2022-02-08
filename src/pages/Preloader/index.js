import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

const PRELOADER_TIME = 2000;

const Preloader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/users')
    }, PRELOADER_TIME)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
      <div className={styles.preloader}>
          Hi! We are glad to see you here
      </div>
  );
};

export default Preloader;
