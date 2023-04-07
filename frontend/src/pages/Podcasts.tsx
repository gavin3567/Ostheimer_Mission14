import React from 'react';
import styles from './Podcasts.module.css'; // Import the CSS styles

const Podcasts: React.FC = () => {
  return (
    <div className={styles.podcasts}>
      <h1>My Podcasts</h1>
      <p>
        Click here for my podcast:{' '}
        <a
          href="https://baconsale.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://baconsale.com
        </a>
      </p>
    </div>
  );
};

export default Podcasts;
