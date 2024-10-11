import { Key} from "react";
import styles from "./SearchDropDown.module.css";
import useFetchData from "../../hooks/useFetchData";
import MovieCard from "../movie_card/MovieCard";
import { baseImgUrl } from "../../config/apiConfig";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { SearchResult } from "../../types/tbdmApi";

interface SearchDropDownProps {
  query: string;
}
const SearchDropDown = ({ query }: SearchDropDownProps) => {
  const API = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  const { data: searchData,loading } = useFetchData<SearchResult>(API);
  if (loading) {
    return  (
      <div className={styles.container}>
        {Array.from({length:10}).map(
          (_, index: Key | null | undefined) => (
            <li key={index} className={styles.search_list}>
              <div className={styles.movie_tile}>
                <MovieCard
                  key={index}
                  imgUrl={''}
                  movieId={0} 
                  loading={true}              />
              </div>
              <SkeletonTheme baseColor="#202020"  highlightColor="#444" >
          <Skeleton width={'100%'} />
          </SkeletonTheme>
            </li>
          )
        )}
      </div>
    );
  }
  return (
    <div className={styles.container}>
      {searchData?.results.filter((it)=>it.poster_path!== null).map(
        (item) => (
          <li key={item.id} className={styles.search_list}>
            <div className={styles.movie_tile}>
              <MovieCard
                key={item.id}
                imgUrl={baseImgUrl + item.poster_path}
                movieId={item.id} 
                loading={false}              />
            </div>
            <div className={styles.movie_title}>{item.title}</div>
          </li>
        )
      )}
    </div>
  );
};

export default SearchDropDown;
