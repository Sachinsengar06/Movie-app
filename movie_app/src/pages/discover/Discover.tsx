import MovieCard from "../../components/movie_card/MovieCard";
import useFetchData from "../../hooks/useFetchData";
import styles from "./Discover.module.css";
const Discover = () => {

  const baseUrl = "https://api.themoviedb.org/3";
  const baseImgUrl = "https://image.tmdb.org/t/p/w500";

  const trending_movie_API = `${baseUrl}/trending/movie/week?language=en-US`;
  const top_rated_movie_API = `${baseUrl}/movie/top_rated?language=en-US&page=1`;
  const upcoming_movie_API = `${baseUrl}/movie/upcoming?language=en-US&page=1`;


  const { data: trending_movie_data } = useFetchData(trending_movie_API);
  const { data: top_rated_movie_data } = useFetchData(top_rated_movie_API);
  const { data: upcoming_movie_data} = useFetchData(upcoming_movie_API);

  
  return (
    <div className={styles.container}>
      <div className={styles.row1}>
        <h2>Weekly Trending Movies</h2>
        <div className={styles.row1_div}>
          {trending_movie_data?.results
            ?.filter((item) => item.poster_path !== null)
            .map((it, index) => (
              <MovieCard
                key={index}
                imgUrl={baseImgUrl + it.poster_path}
                movieId={it.id}
              />
            ))}
        </div>
      </div>

      <div className={styles.row1}>
        <h2>Top Rated Movies</h2>
        <div className={styles.row1_div}>
          {top_rated_movie_data?.results
            ?.filter((item) => item.poster_path !== null)
            .map((it, index) => (
              <MovieCard
                key={index}
                imgUrl={baseImgUrl + it.poster_path}
                movieId={it.id}
              />
            ))}
        </div>
      </div>
      
      <div className={styles.row2}>
        <h2>Upcoming Blockbusters</h2>
        <div className={styles.row2_div}>
          {top_rated_movie_data?.results
            ?.filter((item) => item.backdrop_path !== null)
            .map((it, index) => (
              <MovieCard
                key={index}
                imgUrl={baseImgUrl + it.backdrop_path}
                movieId={it.id}
              />
            ))}
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Discover;
