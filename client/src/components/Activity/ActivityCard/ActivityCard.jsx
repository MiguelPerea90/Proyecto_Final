import styles from "./ActivityCard.module.css";

const ActivityCard = (props) => {
  return (
    <div className={styles.activityCardContainer}>
      <img
        src={props.image}
        alt={props.name}
        className={styles.activityCardImage}
      />
      <div className={styles.activityCardInfo}>
        <h4>{props.name}</h4>
        <h4>{props.category}</h4>
        <h4>{props.price}</h4>
        {/* <h4>{props.duration}</h4>
        <h4>{props.description}</h4> */}
        <button to={`/`} className={styles.activityCardButton}>
          Saber más
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;
