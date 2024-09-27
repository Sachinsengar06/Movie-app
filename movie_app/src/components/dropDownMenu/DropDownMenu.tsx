import  { useContext, useState } from "react";
import styles from "./DropdownMenu.module.css"; // Importing CSS module
import useFetchData from "../../hooks/useFetchData";
import { AppContext } from "../../context/ContextProvider";
import { useNavigate } from "react-router-dom";

interface DropdownMenuProps {
  title: string;
}

const DropdownMenu = ({ title }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const {handleSetValue} = useContext(AppContext);
  const navigate = useNavigate();
  const API = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const { data: movieMenu } = useFetchData(API);

  const sections = [
    { heading: "Explore", items:[[{id:0,name:'Movie List'},{id:1,name:'Tv List'}]]},
    { heading: "Categories", items: [movieMenu?.genres] },
  ];
  const toggleDropdown = (
    state: boolean | ((prevState: boolean) => boolean)
  ) => {
    setIsOpen(state);
  };
  const handleLoadPage = (genre_id:number) => {
    handleSetValue(genre_id);
    navigate('/home')
  }
  
  return (
    <div
      className={styles.menuContainer}
      onMouseEnter={() => toggleDropdown(true)}
      onMouseLeave={() => toggleDropdown(false)}
    >
      <span className={styles.menuHeading}>{title}</span>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          {sections.map((section, index) => (
            <div className={styles.menuSection} key={index}>
              <h4>{section.heading}</h4>
              <ul className={styles.menulist}>
                {section.items[0].map((item, idx) => (
                  <li key={idx} onClick={()=>handleLoadPage(item.id)}>{item.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
