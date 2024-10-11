import MovieCard from '../movie_card/MovieCard';
import useFetchData from '../../hooks/useFetchData';
import styles from './MoivePage.module.css';
import { MovieApiResponse } from '../../types/tbdmApi';
import { baseImgUrl } from '../../config/apiConfig';



interface MoviePageProps {
  API: string;
}

const MoviePage = ({ API }: MoviePageProps) => {
  console.log("i am movie page")

  const { data, loading } = useFetchData<MovieApiResponse>(API,'MoviePage');
  return (
    <div className={styles.home_grid}>
      {loading
        ? Array.from({ length: 20 }).map((_, index) => (
            <MovieCard
              key={index}
              imgUrl=""
              movieId={0}
              loading={true}
            />
          ))
        : data?.results.map((item, index: number) => (
            <MovieCard
              key={index}
              movieId={item.id}
              imgUrl={baseImgUrl + `${item.poster_path}`}
              loading={false}
            />
          ))}
    </div>
  );
};
export default MoviePage;
