import styles from "./CityCard.module.css";
import iconHeart from "../../../images/Icon-Heart.png";

const CityCard = (props) => {
  return (
    <div className={styles.cityCardContainer}>
      <div className={styles.cityCardImage}>
        <img src={props.image} alt="" />
      </div>
      <div className={styles.cityCardInfo}>
        <h4>{props.name}</h4>

        <div className={styles.cityCardPopularity}>
          <img src={iconHeart} />
          <p>{props.popularity}</p>
        </div>
        <button to="/home/" className={styles.cityCardButton}>
          Saber mas
        </button>
      </div>
    </div>
  );
};

export default CityCard;
