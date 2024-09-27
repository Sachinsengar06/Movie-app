import { Key, useState } from "react";
import styles from "./SearchDropDown.module.css";
import useFetchData from "../../hooks/useFetchData";
import MovieCard from "../movie_card/MovieCard";
import { baseImgUrl } from "../../config/apiConfig";

interface SearchDropDownProps {
  query: string;
}
const SearchDropDown = ({ query }: SearchDropDownProps) => {
  const API = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  const { data: searchData } = useFetchData(API);
  return (
    <div className={styles.container}>
      {searchData?.results.filter((it)=>it.poster_path!== null).map(
        (item: { poster_path: string }, index: Key | null | undefined) => (
          <li key={index} className={styles.search_list}>
            <div className={styles.movie_tile}>
              <MovieCard
                key={index}
                imgUrl={baseImgUrl + item.poster_path}
                movieId={item.id}
              />
            </div>
            <div className={styles.movie_title}>{item.title}</div>
          </li>
        )
      )}
    </div>
  );
};

export default SearchDropDown;
