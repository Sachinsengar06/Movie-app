import MovieCard from '../movie_card/MovieCard';
import useFetchData from '../../hooks/useFetchData';
import styles from './MoivePage.module.css';
import { MovieApiResponse } from '../../types/tbdmApi';



interface MoviePageProps {
  newApi: string;
}

const baseImgUrl = 'https://image.tmdb.org/t/p/w500';

const MoviePage = ({ newApi }: MoviePageProps) => {
  const { data:data } = useFetchData(newApi);

  return (
    <div className={styles.home_grid}>
      {(data as MovieApiResponse)?.results.map((item, index: number) => (
        <MovieCard
          key={index}
          movieId={item.id}
          imgUrl={baseImgUrl + `${item.poster_path}`}
          skeletonHeight="300px" // Pass the desired height for the skeleton
          skeletonWidth="100%"  // Adjust width as needed for grid context
        />
      ))}
    </div>
  );
};

export default MoviePage;
