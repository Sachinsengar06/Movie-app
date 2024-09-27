import { useState } from 'react';
import styles from './MovieCard.module.css';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface MovieCardProps {
  imgUrl: string;
  movieId: number;
  skeletonHeight?: string; // Add optional props for skeleton dimensions
  skeletonWidth?: string;
}

const MovieCard = ({ imgUrl, movieId, skeletonHeight = '100%', skeletonWidth = '100%' }: MovieCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Navigate to the detail page
  const handleClick = () => {
    navigate(`/detail/${movieId}`);
  };

  // Handle image load event
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      {/* Display skeleton loader while the image is loading */}
      {isLoading ? (
        <Skeleton 
          height={skeletonHeight}
          width={skeletonWidth}
          style={{ padding: '2px', borderRadius: '11px' }} 
        />
      ) : (
        <img
          src={imgUrl}
          alt="Movie Thumbnail"
          onLoad={handleImageLoad}
          style={{ display: isLoading ? 'none' : 'block' }}
          className={styles.imgCard}
        />
      )}
    </div>
  );
};

export default MovieCard;
