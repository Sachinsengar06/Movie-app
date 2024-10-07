import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive"; // Import useMediaQuery
import { GoHome } from "react-icons/go";
import { MdOutlineLiveTv } from "react-icons/md";
import { FaTv } from "react-icons/fa";
import { FiCompass } from "react-icons/fi";
import { IoBookmarksSharp } from "react-icons/io5";
import SearchBar from "../searchBar/SearchBar";
import styles from './Header.module.css'
import DropdownMenu from "../dropDownMenu/DropDownMenu";
import Button from "../button/Button";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  const navigate = useNavigate();

  // Media query to check if the screen width is less than 768px (mobile screens)
  const isMobile = useMediaQuery({ query: "(max-width: 992px)" });

  const navToLoginPage = () => {
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.col1}>
        <p>MovieX</p>
        {!isMobile&&<SearchBar width={"250px"} />}
      </div>
      <div className={styles.col2}>
        <div onClick={() => navigate("/home")}>
          <GoHome />
          <p className={styles.icon_text}>Home</p>
        </div>
        {/* For desktop, show dropdown menus. For mobile, render categories directly */}
        {!isMobile ? (
          <>
            <div>
              <MdOutlineLiveTv />
              <div className={styles.icon_text}>
                <DropdownMenu title="Live Tv" />
              </div>
            </div>
            <div>
              <FaTv />
              <div className={styles.icon_text}>
                <DropdownMenu title="On Demand" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div onClick={() => navigate("/Categories")}>
              <MdOutlineLiveTv />
              <p className={styles.icon_text}>Live Tv</p>
            </div>
            <div onClick={() => navigate("/Categories")}>
              <FaTv />
              <p className={styles.icon_text}>On Demand</p>
            </div>
          </>
        )}
        <div onClick={() => navigate("/discover")}>
          <FiCompass />
          <p className={styles.icon_text}>Discover</p>
        </div>
      </div>
      <div className={styles.col3}>
      {isMobile&& <IoIosSearch color="white"/>}
        <div className={styles.bookmarkIcon} onClick={() => navigate("/bookmarked")}>
          <IoBookmarksSharp />
        </div>
        {!isMobile&&<Button
          fun={navToLoginPage}
          textColor={"white"}
          backgroundColor={"rgba(0,0,0,.6)"}
          title={"Sign In"}
        />}
         {isMobile&&<div onClick={navToLoginPage} >
          <FaRegCircleUser color="white"/></div>}
      </div>
    </div>
  );
};

export default Header;
