import MovieCard from "../../components/movie_card/MovieCard";
import styles from "./HomePage.module.css";

const HomePage = () => {
    const num_arry = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18];
    const currentPage = 2;
    const itemPerPage = 16;
    const lastIndex = currentPage*itemPerPage;
    const firstIndex = lastIndex - itemPerPage;
    const itemData = num_arry.slice(firstIndex,lastIndex)
  return (
    <div className={styles.home_container}>
      <div>header</div>
      <div>live video</div>
      <div className={styles.home_grid}>
        {
            itemData.map(() =>(
                <div className={styles.item}><MovieCard/></div>
            ))
        }
        <div className={styles.item}></div>
      </div>
    </div>
  );
};

export default HomePage;
