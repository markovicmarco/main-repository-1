import { useEffect, useState } from 'react';
import { calculateTimeLeft } from '../utils/counter-util';

import styles from "./counter.module.css";

export const Counter = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
  }, [timeLeft]);

  return (
    <div className={styles.container}> 
      <h1 className={styles.h1}>Initial coin offering ends in</h1>
     <div className={styles.counter}>
      <div className={styles.counterItem}>
        <span className={styles.value}>
          {String(timeLeft.days).padStart(2, '0')}
        </span>
        <span className={styles.label}>Days</span>
      </div>

      <div className={styles.counterItem}>
        <span className={styles.value}>
          {String(timeLeft.hours).padStart(2, '0')}
        </span>
        <span className={styles.label}>Hours</span>
      </div>

      <div className={styles.counterItem}>
        <span className={styles.value}>
          {String(timeLeft.minutes).padStart(2, '0')}
        </span>
        <span className={styles.label}>Minutes</span>
      </div>

      <div className={styles.counterItem}>
        <span className={styles.value}>
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
        <span className={styles.label}>Seconds</span>
      </div>

      <div className={styles.counterItem}>
      <a href="https://foundico.com/ico/izzzy.html" target="_blank" rel="nofollow" title="IZZZY on Foundico.com">
        <img className={styles.img} src="https://foundico.com/widget/?p=35543&f=s" alt="IZZZY score on Foundico.com" />
      </a>
      <span className={styles.label}>ICO Score</span>
      </div>
     </div>
    </div>
  );
};