import { IoIosSearch } from "react-icons/io";
import styles from "./Search.module.css";
import { useState } from "react";
import SearchDropDown from "../searchDropDown/SearchDropDown";
interface searchBarProps {
  width: string;
}
const SearchBar = ({ width }: searchBarProps) => {
  const [searchData, setSearchData] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(() => e.target.value);
    if (e.target.value.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  const handleFocus = () => {
    if (searchData.length > 0) {
      setIsOpen(true);
    }
  };
  const handleBlur = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };
  return (
    <div style={{ width: `${width}` }} className={styles.search_div}>
      <div className={styles.icon}>
        <IoIosSearch />
      </div>
      <input
        type="text"
        placeholder="Find Movies & Tv"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={searchData}
      />
      {/* <div className={styles.cross}>x</div> */}
      <div className={styles.searchList}>
        {isOpen && <SearchDropDown query={searchData} />}
      </div>
    </div>
  );
};

export default SearchBar;
