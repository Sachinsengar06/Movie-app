import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaPlay, FaBookmark, FaRegBookmark } from "react-icons/fa";
import styles from "./Detailed.module.css";
import Button from "../../components/button/Button";
import useFetchData from "../../hooks/useFetchData";
import { API_KEY, baseImgUrl, baseUrl } from "../../config/apiConfig";
import { getList, removeItem, saveList } from "../../localStorage/watchList";
import MovieList from "../../components/movieList/MovieList";
import { MovieDetailApiResponse } from "../../types/tbdmApi";

const DetailPage = () => {
  const navigate = useNavigate();
  const { movieId } = useParams<{ movieId: string }>();
  const API = `${baseUrl}/movie/${movieId}?api_key=${API_KEY}`;
  const { data } = useFetchData<MovieDetailApiResponse>(API);
  
  const isBookmarked = (id: string | undefined) => {
    const arr = getList();
    return arr.some((ele: { id: string }) => ele.id === id);
  };

  const [bookMarked, setBookMarked] = useState(false);

  useEffect(() => {
    setBookMarked(isBookmarked(movieId));
  }, [movieId]);

  const handleBookmark = () => {
    const itemId = movieId ?? "";
    if (bookMarked) {
      removeItem({ id: itemId });
    } else {
      saveList({ id: itemId });
    }
    setBookMarked(!bookMarked);
  };
  const playVideo = () => {
    navigate(`/video/${movieId}`);
  };
  const backdropImg = (data)?.backdrop_path
    ? baseImgUrl + (data).backdrop_path
    : "";
  if (!movieId) {
    return <div>Error: Invalid Movie ID</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.row1}>
        <div className={styles.col1}>
          <div className={styles.bkImg}>
            <img src={backdropImg} alt="" />
            <div className={styles.imgOverlay}></div>
          </div>
        </div>

        <div className={styles.col2}>
          <div className={styles.title}>
            {(data)?.title}
          </div>
          <div className={`${styles.director_name} ${styles.detail}`}>
            {(data)?.director
              ? `Directed by ${(data).director}`
              : "Director information not available"}
          </div>
          <div className={`${styles.release_date} ${styles.detail}`}>
            {(data)?.release_date
              ? new Date(
                  (data).release_date
                ).getFullYear()
              : ""}{" "}
            {(data)?.runtime
              ? `${Math.floor(
                  (data).runtime / 60
                )}h ${(data).runtime % 60}m`
              : ""}
          </div>
          <div className={`${styles.movie_type} ${styles.detail}`}>
            {(data)?.genres
              ?.map((genre) => genre.name)
              .join(", ")}
          </div>
          <div className={styles.rating}>
            <span>
              Vote Average{" "}
              {(data)?.vote_average?.toFixed(1)}
            </span>
            <span>
              Vote Count{" "}
              {(data)?.vote_count
                ? `${Math.round(
                    ((data).vote_count / 100000) * 100
                  )}%`
                : ""}{" "}
            </span>
            <span>
              Popularity{" "}
              {(data)?.popularity
                ? `${Math.round(
                    ((data).popularity / 1000) * 100
                  )}%`
                : ""}
            </span>
          </div>
          <div className={styles.buttons}>
            <Button
              icon={FaPlay}
              backgroundColor="white"
              title="Watch Free"
              textColor="black"
              fun={playVideo}
            />
            <Button
              icon={bookMarked ? FaBookmark : FaRegBookmark}
              backgroundColor="white"
              title={bookMarked ? "Saved" : "Save to Watchlist"}
              textColor="black"
              fun={handleBookmark}
            />
          </div>
          <div>{(data)?.overview}</div>
        </div>
      </div>
      <MovieList movieId={movieId} type_keyword="similar" />
      <MovieList movieId={movieId} type_keyword="recommendations" />
    </div>
  );
};

export default DetailPage;
