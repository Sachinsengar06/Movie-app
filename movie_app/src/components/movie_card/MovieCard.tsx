import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './MovieCard.module.css';

interface MovieCardProps {
  imgUrl: string;
  movieId: number;
  loading: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ imgUrl, movieId, loading }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      const img = new Image();
      img.src = imgUrl;
      img.onload = () => setImageLoaded(true);
    }
  }, [loading, imgUrl]);

  const handleClick = () => {
    navigate(`/detail/${movieId}`);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      {(loading || !imageLoaded) && (
        <div className={styles.skeletonWrapper}>
          <SkeletonTheme baseColor="#202020"  highlightColor="#444" >
          <Skeleton className={styles.skeleton} />
          </SkeletonTheme>
        </div>
      )}
      {!loading && (
        <img
          src={imgUrl}
          alt="Movie Thumbnail"
          onLoad={() => setImageLoaded(true)}
          style={{ display: imageLoaded ? 'block' : 'none' }}
          className={styles.imgCard}
        />
      )}
    </div>
  );
};

export default MovieCard;