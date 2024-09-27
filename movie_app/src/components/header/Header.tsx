import Button from "../button/Button";
import SearchBar from "../searchBar/SearchBar";
import styles from "./Header.module.css";
import { GoHome } from "react-icons/go";
import { MdOutlineLiveTv } from "react-icons/md";
import { FaTv } from "react-icons/fa6";
import { FiCompass } from "react-icons/fi";
import DropdownMenu from "../dropDownMenu/DropDownMenu";
import { useNavigate } from "react-router-dom";
import { IoBookmarksSharp } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();
  const navToLoginPage = () => {
    navigate("/login");
  };
  return (
    <div className={styles.container}>
      <div className={styles.col1}>
        <p>MovieX</p>
        <SearchBar width={"250px"} />
      </div>
      <div className={styles.col2}>
        <div onClick={() => navigate("/home")}>
          <GoHome />
          <p className={styles.icon_text}>Home</p>
        </div>
        <div>
          <MdOutlineLiveTv />
          <div className={styles.icon_text}><DropdownMenu title="Live Tv" /></div>
        </div>
        <div>
          <FaTv />
          <div className={styles.icon_text}><DropdownMenu title="On Demand" /></div>
        </div>
        <div  onClick={() => navigate("/discover")}>
          <FiCompass />
          <p className={styles.icon_text}>Discover</p>
        </div>
      </div>
      <div className={styles.col3}>
        <div className={styles.bookmarkIcon} onClick={()=>navigate('/bookmarked')}>
          <IoBookmarksSharp />
        </div>
        <Button
          fun={navToLoginPage}
          textColor={"white"}
          backgroundColor={"rgba(0,0,0,.6)"}
          title={"Sign In"}
        />
      </div>
    </div>
  );
};

export default Header;
