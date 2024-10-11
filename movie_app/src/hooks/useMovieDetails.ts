import { useState, useEffect } from 'react';
import { MovieDetailApiResponse } from '../types/tbdmApi';
import { baseUrl } from '../config/apiConfig';

// Use environment variable for API token
const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;

const useMovieDetails = (movieIds: number[]) => {
  const [movieDetails, setMovieDetails] = useState<{ [key: number]: MovieDetailApiResponse }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);
      const details: { [key: number]: MovieDetailApiResponse } = {};

      for (const id of movieIds) {
        try {
          const response = await fetch(`${baseUrl}/movie/${id}?language=en-US`, {
            method: 'GET',
            headers: {
              'accept': 'application/json',
              'Authorization': `Bearer ${API_TOKEN}`
            }
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data: MovieDetailApiResponse = await response.json();
          details[id] = data;
        } catch (error) {
          console.error(`Error fetching details for movie ${id}:`, error);
          setError(`Error fetching movie details. Please try again later.`);
        }
      }

      setMovieDetails(details);
      setLoading(false);
    };

    if (movieIds.length > 0) {
      fetchMovieDetails();
    } else {
      setLoading(false);
    }
  }, [movieIds]);

  return { movieDetails, loading, error };
};

export default useMovieDetails;