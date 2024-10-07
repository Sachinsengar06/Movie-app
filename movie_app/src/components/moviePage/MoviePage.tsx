import MovieCard from '../movie_card/MovieCard';
import useFetchData from '../../hooks/useFetchData';
import styles from './MoivePage.module.css';
import { MovieApiResponse } from '../../types/tbdmApi';



interface MoviePageProps {
  newApi: string;
}

const baseImgUrl = 'https://image.tmdb.org/t/p/w500';

const MoviePage = ({ newApi }: MoviePageProps) => {
  const { data, loading } = useFetchData<MovieApiResponse>(newApi);
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
