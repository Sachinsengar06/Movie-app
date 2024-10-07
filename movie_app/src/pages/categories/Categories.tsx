import React, { useContext } from 'react';
import useFetchData from "../../hooks/useFetchData";
import styles from "./Categories.module.css";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';

const Categories = () => {
  const gradientArr = [
    "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)",
    "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
    "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)",
    "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%)",
    "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)",
    "linear-gradient(90deg, #FDBB2D 0%, #3A1C71 100%)",
    "linear-gradient(90deg, #FDBB2D 0%, #22C1C3 100%)",
    "linear-gradient(90deg, #4b6cb7 0%, #182848 100%)",
    "linear-gradient(90deg, #9ebd13 0%, #008552 100%)",
    "linear-gradient(90deg, #0700b8 0%, #00ff88 100%)",
    "linear-gradient(90deg, #d53369 0%, #daae51 100%)",
    "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)",
    "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)",
    "linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%)",
    "linear-gradient(90deg, #fcff9e 0%, #c67700 100%)",
  ];

  const API = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const { data: movieMenu, loading } = useFetchData(API);
  const genres = movieMenu?.genres || [];
  const navigate = useNavigate();
  const {handleSetValue} = useContext(AppContext);
  const handleLoadPage = (genre_id:number) => {
    handleSetValue(genre_id);
    navigate('/home')
  }
  return (
    <div className={styles.container}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        genres.map((genre, index) => (
          <div 
            onClick={()=>handleLoadPage(genre.id)}
            key={genre.id}
            className={styles.category_box} 
            style={{ background: gradientArr[index % gradientArr.length] }}
          >
            {genre.name}
          </div>
        ))
      )}
    </div>
  );
};

export default Categories;