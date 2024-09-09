import harrypotter from '../../assets/dashboardtiles/captainAmerica.jpg';
import styles from './MovieCard.module.css'
const MovieCard = () => {
  return (
    <div className={styles.container}>
      <img src={harrypotter} alt="" />
    </div>
  )
}

export default MovieCard
