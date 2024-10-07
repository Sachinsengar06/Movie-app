import { Key } from "react";
import MovieCard from "../../components/movie_card/MovieCard";
import { baseImgUrl, baseUrl } from "../../config/apiConfig";
import useFetchData from "../../hooks/useFetchData";
import { getList } from "../../localStorage/watchList";
import { MovieDetailApiResponse } from "../../types/tbdmApi";
import styles from "./BookMarkedItems.module.css";

const BookMarkedItems = () => {
  // getting id's of movies from local
  const arr = getList();
  // console.log(arr);
  const getImgUrl = (movieId: any) => {
    const API = `${baseUrl}/movie/${movieId}?language=en-US`;
    const { data, loading } = useFetchData<MovieDetailApiResponse>(API);
    console.log("i am form watchlist ")
    return { link: `${baseImgUrl}${data?.poster_path}`, loader: loading };
  };

  return (
    <div className={styles.home_grid}>
      {arr.map((item: { id: number }, index: Key | null | undefined) => (
        <div>
          (
            <MovieCard
              key={index}
              imgUrl={getImgUrl(item.id).link}
              movieId={item.id}
              loading={false}
            />
          )
        </div>
      ))}
    </div>
  );
};

export default BookMarkedItems;
