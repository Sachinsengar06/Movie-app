import { baseImgUrl, baseUrl } from "../../config/apiConfig";
import useFetchData from "../../hooks/useFetchData";
import { MovieApiResponse } from "../../types/tbdmApi";
import MovieCard from "../movie_card/MovieCard";
import styles from "./MovieList.module.css";

interface MovieListProps{
  movieId:string;
  type_keyword:string;
}
const MovieList = ({movieId,type_keyword}:MovieListProps) => {
  const API = `${baseUrl}/movie/${movieId}/${type_keyword}?language=en-US&page=1`
  const {data:movieListData, loading} = useFetchData<MovieApiResponse>(API);

  return (
    <div className={styles.list}>
      <h2>{type_keyword} movies</h2>
      <div className={styles.list_div}>
        {movieListData?.results
          ?.filter((item) => item.poster_path !== null).slice(0, 10)
          .map(
            (it, index) =>
             (
                <MovieCard
                key={index}
                imgUrl={baseImgUrl + it.poster_path}
                movieId={it.id} 
                loading={false}                />
              )
          )}
      </div>
    </div>
  );
};

export default MovieList;
