import React from 'react';
import headshot from '../JoelHiltonHeadshot (1).jpg';
import styles from './Home.module.css'; // Import the CSS styles

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <h1>The Joel Hilton Website</h1>
      <p>Welcome to the website dedicated to Joel Hilton.</p>
      <img src={headshot} alt="Joel Hilton Headshot" />
    </div>
  );
};

export default Home;
