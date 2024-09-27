
import styles from "./HomePage.module.css";
import MoviePage from "../../components/moviePage/MoviePage";
import { API_KEY, baseUrl } from "../../config/apiConfig";
import { useContext } from "react";
import { AppContext } from "../../context/ContextProvider";
import Video from "../../components/videoComponent/Video";


const HomePage = () => {
  const { value } = useContext(AppContext);
  const newApi = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=${value}&language=en-US&page=1`;
  return (
    <div className={styles.home_container}>
      <Video/>
      <MoviePage newApi = {newApi}/>
    </div>
  );
};

export default HomePage;
