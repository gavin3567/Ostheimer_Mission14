// frontend/src/MovieService.ts

import axios from 'axios';

export interface Movie {
  movieId: number;
  category: string;
  title: string;
  year: number;
  director: string;
  rating: string;
  edited: boolean;
  lentTo: string;
  notes: string;
}

const API_BASE_URL = 'https://localhost:4000';

class MovieService {
  static async fetchMovies(): Promise<Movie[] | null> {
    try {
      const response = await axios.get<Movie[]>(`${API_BASE_URL}/api/movies`);
      console.log('Response data:', response.data); // Add this line to log response data
      return response.data;
    } catch (error) {
      console.error('Error fetching movies:', error);
      return null;
    }
  }
}

export default MovieService;
