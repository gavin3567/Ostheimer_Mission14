// frontend/src/components/Movies.tsx
import React, { useState, useEffect } from 'react';
import MovieService, { Movie } from '../MovieService';
import styles from './Movies.module.css'; // Import the CSS styles

function MovieList() {
  const [listOMovies, setListOMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedMovies = await MovieService.fetchMovies();
      console.log('Fetched movies:', fetchedMovies); // Add this line to log fetched data
      if (fetchedMovies) {
        setListOMovies(fetchedMovies);
      }
    };
    fetchData();
  }, []);

  console.log('Rendered listOMovies:', listOMovies);

  return (
    <>
      <div className={styles.movies}>
        <h3>Joel Hilton's Movie Collection</h3>

        <table>
          <thead>
            <tr>
              <th>Movie ID</th>
              <th>Category</th>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Edited</th>
              <th>Lent To</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {listOMovies.map((m) => (
              <tr key={m.movieId}>
                <td>{m.movieId}</td>
                <td>{m.category}</td>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.edited}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
