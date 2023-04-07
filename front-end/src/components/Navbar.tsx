import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Import the CSS styles

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Podcasts">Podcasts</Link>
        </li>
        <li>
          <Link to="/MovieCollection">Movie Collection</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
