import styles from "./DashBoardHeader.module.css";
import { IoIosSearch } from "react-icons/io";

const DashBoardHeader = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.col1}>
        <p>MovieX</p>
        <div className={styles.search_div}>
          <div className={styles.icon}>
            <IoIosSearch />
          </div>
          <input type="text" placeholder="Find Movies & Tv" />
        </div>
      </div>

      <div className={styles.col2}>
        <h5>Free Movies & TV</h5>
        <h5>Live TV</h5>
        <h5>Features</h5>
        <h5>Download</h5>
      </div>

      <div className={styles.col3}>
        <h5>sign In</h5>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default DashBoardHeader;
