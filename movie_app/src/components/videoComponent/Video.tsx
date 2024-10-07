import  { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import styles from "./Video.module.css";
import { baseUrl } from "../../config/apiConfig";
import { VideoResponseAPI } from "../../types/tbdmApi";
const Video = () => {

  const defaultVideoId = 1352821;
  const { movieId } = useParams();
  const videoRef = useRef<HTMLIFrameElement | null>(null); // Create a ref for the iframe
  const [isPlaying, setIsPlaying] = useState(true); // State to track if the video should play
  const API = `${baseUrl}/movie/${movieId || defaultVideoId}/videos?language=en-US`;
  const { data } = useFetchData<VideoResponseAPI>(API);
  const teaserVideo = data?.results?.find((video: { type: string }) => video.type === "Trailer");
  const videoKey = teaserVideo?.key;

  const observerOptions = {
    root: null, // Use the browser viewport as the container
    rootMargin: "0px",
    threshold: 0.3, // Trigger when at least 50% of the video is visible
  };
  useEffect(() => {
    
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsPlaying(entry.isIntersecting)
    }, observerOptions);

    // Observe the video container
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [observerOptions]);

  return (
    <div className={styles.videoContainer}>
      {videoKey ? (
        <iframe
          ref={videoRef} // Attach the ref to the iframe
          className={styles.videoIframe}
          src={
            isPlaying
              ? `https://www.youtube.com/embed/${videoKey}?rel=0&autoplay=1&controls=0&showinfo=0&modestbranding=1&disablekb=1&loop=1&playlist=${videoKey}&iv_load_policy=3&fs=0&cc_load_policy=0&mute=0`
              : "" // Remove the src when not playing to stop the video
          }
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
