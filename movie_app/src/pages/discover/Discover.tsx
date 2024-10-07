import MovieCard from "../../components/movie_card/MovieCard";
import useFetchData from "../../hooks/useFetchData";
import { MovieApiResponse } from "../../types/tbdmApi";
import styles from "./Discover.module.css";

const Discover = () => {
  const baseUrl = "https://api.themoviedb.org/3";
  const baseImgUrl = "https://image.tmdb.org/t/p/w500";

  const trending_movie_API = `${baseUrl}/trending/movie/week?language=en-US`;
  const top_rated_movie_API = `${baseUrl}/movie/top_rated?language=en-US&page=1`;
  const upcoming_movie_API = `${baseUrl}/movie/upcoming?language=en-US&page=1`;

  const { data: trending_movie_data, loading: trendingLoading } =
    useFetchData<MovieApiResponse>(trending_movie_API);
  const { data: top_rated_movie_data, loading: topRatedLoading } =
    useFetchData<MovieApiResponse>(top_rated_movie_API);
  const { data: upcoming_movie_data, loading: upcomingLoading } =
    useFetchData<MovieApiResponse>(upcoming_movie_API);

  return (
    <div className={styles.container}>
      {/* Trending Movies */}
      <div className={styles.row1}>
        <h2>Weekly Trending Movies</h2>
        <div className={styles.row1_div}>
          {trendingLoading ? (
           Array.from({ length: 20 }).map((_, index) => (
                <MovieCard
                  key={index}
                  imgUrl=""
                  movieId={0}
                  loading={true}
                />
              ))
          ) : (
            trending_movie_data?.results
              ?.filter((item) => item.poster_path !== null)
              .map((it, index) => (
                <MovieCard
                  key={`trending-${index}`} // Use unique keys for each section
                  imgUrl={baseImgUrl + it.poster_path}
                  movieId={it.id}
                  loading={false}
                />
              ))
          )}
        </div>
      </div>

      {/* Top Rated Movies */}
      <div className={styles.row1}>
        <h2>Top Rated Movies</h2>
        <div className={styles.row1_div}>
          {topRatedLoading ? (
            <p>Loading...</p>
          ) : (
            top_rated_movie_data?.results
              ?.filter((item) => item.poster_path !== null)
              .map((it, index) => (
                <MovieCard
                  key={`toprated-${index}`} // Use unique keys for each section
                  imgUrl={baseImgUrl + it.poster_path}
                  movieId={it.id}
                  loading={false}
                />
              ))
          )}
        </div>
      </div>

      {/* Upcoming Blockbusters */}
      <div className={styles.row2}>
        <h2>Upcoming Blockbusters</h2>
        <div className={styles.row2_div}>
          {upcomingLoading ? (
            <p>Loading...</p>
          ) : (
            upcoming_movie_data?.results
              ?.filter((item) => item.backdrop_path !== null)
              .map((it, index) => (
                <MovieCard
                  key={`upcoming-${index}`} // Use unique keys for each section
                  imgUrl={baseImgUrl + it.backdrop_path}
                  movieId={it.id}
                  loading={false}
                />
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Discover;
