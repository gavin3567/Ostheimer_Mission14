import React from 'react';
import MovieList from '../components/Movies';
import styles from './MovieCollection.module.css'; // Import the CSS styles

const MovieCollection: React.FC = () => {
  return (
    <div className={styles.movieCollection}>
      <h1>Movie Collection</h1>
      <p>This is my movie collection.</p>
      <MovieList />
    </div>
  );
};

export default MovieCollection;
