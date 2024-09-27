import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import styles from "./Video.module.css";

const Video = () => {
  const baseUrl = "https://api.themoviedb.org/3";
  const defaultVideoId = 1352821;
  const { movieId } = useParams();
  console.log('videoId:', movieId);

  const API = `${baseUrl}/movie/${movieId || defaultVideoId}/videos?language=en-US`;
  const { data } = useFetchData(API);
  const teaserVideo = data?.results?.find((video: { type: string; }) => video.type === "Trailer");
  const videoKey = teaserVideo?.key;

  return (
    <div className={styles.videoContainer}>
      {videoKey ? (
        <iframe
          className={styles.videoIframe}
          src={`https://www.youtube.com/embed/${videoKey}?rel=0&autoplay=1&controls=0&showinfo=0&modestbranding=1&disablekb=1&loop=1&playlist=${videoKey}&iv_load_policy=3&fs=0&cc_load_policy=0&mute=0`}
          title="Movie Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p className={styles.loadingText}>Loading video...</p>
      )}
    </div>
  );
};

export default Video;