import { useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import styles from "./DashBoardHeader.module.css";
const DashBoardHeader = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.header_container}>
      <div className={styles.col1}>
        <p>MovieX</p>
        <SearchBar width={'350px'}/>
      </div>

      <div className={styles.col2}>
        <h5>Free Movies & TV</h5>
        <h5>Live TV</h5>
        <h5>Features</h5>
        <h5>Download</h5>
      </div>

      <div className={styles.col3}>
        <h5>sign In</h5>
        <button className={styles.btn} onClick={()=>navigate('/login')}>Sign Up</button>
      </div>
    </div>
  );
};

export default DashBoardHeader;
