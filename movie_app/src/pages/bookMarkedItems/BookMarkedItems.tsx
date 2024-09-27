import MovieCard from "../../components/movie_card/MovieCard";
import { baseImgUrl, baseUrl } from "../../config/apiConfig";
import useFetchData from "../../hooks/useFetchData";
import { getList } from "../../localStorage/watchList";
import styles from './BookMarkedItems.module.css';

const BookMarkedItems = () => {
    const arr = getList();
  const getImgUrl = (movieId) => {
    const API = `${baseUrl}/movie/${movieId}?language=en-US`
    const { data } = useFetchData(API);
    return(`${baseImgUrl}${data?.poster_path}`)
  }

  return (
    <div className={styles.home_grid}>
      {arr.map((item, index) => (
        <MovieCard key={index} imgUrl={getImgUrl(item.id)} movieId={item.id} />
      ))}
    </div>
  );
};

export default BookMarkedItems;
