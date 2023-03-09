import styles from "./HotelCard.module.css";

const HotelCard = (props) => {
  return (
    <div className={styles.hotelCardContainer}>
      <img
        src={props.image}
        alt={props.name}
        className={styles.hotelCardImage}
      />
      <div className={styles.hotelCardInfo}>
        <h4>{props.name}</h4>
        <h4>{props.category}</h4>
        <h4>{props.rating}</h4>
        {/* <h4>{props.services}</h4>
        <h4>{props.description}</h4> */}
        <button to={`/`} className={styles.hotelCardButton}>
          Saber más
        </button>
      </div>
    </div>
  );
};

export default HotelCard;
