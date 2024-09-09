import styles from "./DashBoard.module.css";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { MdDevices } from "react-icons/md";
import Row3_img from "../../assets/dashBoard_Img.png";
import Row4_img from "../../assets/phone img.png";
import DashBoardHeader from "../../components/dashboardHeader/DashBoardHeader";
import lordRings from "../../assets/dashboardtiles/Ringstrilogyposter.webp";
import harrypotter from "../../assets/dashboardtiles/harry-potter-and-the-sorcerers-stone-title-card.png";
import sherlockHolmes from '../../assets/dashboardtiles/sherlock-holmes.avif'
import capAmerica from '../../assets/dashboardtiles/captainAmerica.jpg'
const DashBoard = () => {
 
  return (
    <div className={styles.main_container}>
      <div className={styles.header}>
        <DashBoardHeader />
      </div>
      <div className={`${styles.row1} ${styles.row}`}>
        <div className={styles.row1_img_div}>
          <div className={styles.row1_content_div}>
            <h1>
              Free Movies to Watch,
              <br />
              Anytime AnyWhere.
            </h1>
            <p>
              The search is over! Let Watch More help you find perfect <br />
              movie to watch tonight for free
            </p>
            <button className={styles.btn}>Watch Free</button>
          </div>
        </div>
      </div>

      <div className={`${styles.row2} ${styles.row}`}>
        <div className={styles.row2_content}>
          <div>
            <GiEarthAsiaOceania className={styles.icon} />
          </div>
          <h3>Works Worldwide</h3>
          <p>
            No other free streaming service
            <br /> delivers more content to and from more countries worldwide.
          </p>
        </div>
        <div className={styles.row2_content}>
          <div>
            <MdLocalMovies className={styles.icon} />
          </div>
          <h3>Thousand of Tiles</h3>
          <p>
            No other free streaming service delivers more content to and from
            more countries worldwide.
          </p>
        </div>
        <div className={styles.row2_content}>
          <div>
            <FaMoneyCheckAlt className={styles.icon} />
          </div>
          <h3>Always 100% Free</h3>
          <p>
            No other free streaming service delivers more content to and from
            more countries worldwide.
          </p>
        </div>
        <div className={styles.row2_content}>
          <div>
            <MdDevices className={styles.icon} />
          </div>
          <h3>Device Friendly</h3>
          <p>
            No other free streaming service delivers more content to and from
            more countries worldwide.
          </p>
        </div>
      </div>
      <div className={`${styles.row3} ${styles.row}`}>
        <div className={styles.row3_left_area}>
          <h1>See what’s new on Pluto TV, Tubi, & more.</h1>
          <p>
            Select your favorite streaming services to discover more, search
            faster, and get curated recommendations—all without ever leaving
            Plex. Connect with friends to see who’s watching what, where.
          </p>
          <button className={styles.btn}>Discover More Now</button>
        </div>
        <div className={styles.row3_right_area}>
          <img src={Row3_img} alt="" />
        </div>
      </div>
      <div className={`${styles.row4} ${styles.row}`}>
        <div className={styles.row4_left_area}>
          <div className={styles.circle}>
            <div className={styles.row4_img_div}>
              <img src={Row4_img} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.row4_right_area}>
          <h1>It has never been easier to watch free movies online.</h1>
          <p>
            Once you register for a free account with Plex, we’ll keep your
            place from screen to screen as long as you’re signed in. No matter
            what device you choose, your free movies will pick up where you left
            off with ease.
          </p>
          <button className={styles.btn}>Watch Free</button>
        </div>
      </div>
      <div className={`${styles.row5} ${styles.row}`}>
        <div className={styles.row5_inner_area}>
          <div className={styles.row5_content}>
            <div  className={styles.item1}>
              <h1>We Like Our TV Free</h1>
              <p>
                With over 600 channels free (and Counting) available in US and
                hundreds available worldwide, your inner coach potato will
                rejoice.
              </p>
              <button className={styles.btn}>See What's On Now</button>
            </div>
            

            <div className={styles.item2}>
            <div><img className={styles.tile_img} src={lordRings} alt="" /></div>
            <div><img className={styles.tile_img} src={harrypotter} alt="" /></div>
            <div><img className={styles.tile_img} src={sherlockHolmes} alt="" /></div>
            <div><img className={styles.tile_img} src={capAmerica} alt="" /></div>
            
            </div>
          </div>
        </div>
      </div>
      {/* <div className={`${styles.row6} ${styles.row}`}>row6</div> */} 
    </div>
  );
};

export default DashBoard;
