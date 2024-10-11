import { useState, useEffect } from 'react';
import MovieCard from "../../components/movie_card/MovieCard";
import { baseUrl, baseImgUrl } from "../../config/apiConfig";
import { getList } from "../../localStorage/watchList";
import { MovieDetailApiResponse } from "../../types/tbdmApi";
import styles from "./BookMarkedItems.module.css";

const BookMarkedItems = () => {
  const [movieDetails, setMovieDetails] = useState<{ [key: number]: MovieDetailApiResponse }>({});
  const [loading, setLoading] = useState(true);
  const wishlist = getList();
  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      const details: { [key: number]: MovieDetailApiResponse } = {};
      for (const item of wishlist) {
        try {
          const response = await fetch(`${baseUrl}/movie/${item.id}?language=en-US`, {
            method: 'GET',
            headers: {
              'accept': 'application/json',
              'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTcxOGQ5MGVlOGIxMjMyN2Q1ZmQ0ODNkNTFkYTY4MiIsIm5iZiI6MTcyNTg3NTk1Ni4yNDk4NzMsInN1YiI6IjY2ZGU4NzFjZTA1MDA5NTQ5MWMyNjA4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Sz-TF7UfN_JU2J2Cesh1LQbSVJyAaL_XXWwKi6ozaw`
            }
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data: MovieDetailApiResponse = await response.json();
          details[item.id] = data;
        } catch (error) {
          console.error(`Error fetching details for movie ${item.id}:`, error);
        }
      }
      setMovieDetails(details);
      setLoading(false);
    };

    fetchMovieDetails();
  }, []);

  if (loading) {
    return <div className={styles.home_grid}>
      { Array.from({ length: 20 }).map((_, index) => (
            <MovieCard
              key={index}
              imgUrl=""
              movieId={0}
              loading={true}
            />
          ))}
    </div>
  }

  return (
    <div className={styles.home_grid}>
      {wishlist.map((item:{ id: number }) => (
        <MovieCard
          key={item.id}
          imgUrl={movieDetails[item.id]?.poster_path ? `${baseImgUrl}${movieDetails[item.id].poster_path}` : ''}
          movieId={item.id}
          loading={!movieDetails[item.id]}
        />
      ))}
    </div>
  );
};

export default BookMarkedItems;