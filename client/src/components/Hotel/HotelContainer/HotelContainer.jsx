import { Link, useParams } from "react-router-dom";
import HotelCard from "../HotelCard/HotelCard";
import styles from "./HotelContainer.module.css";

const HotelContainer = (props) => {
  const params = useParams();

  const city = params.city;

  const hotels = props.hotels;

  return (
    <div className={styles.hotelContainer}>
      <h1>Hoteles</h1>
      <div className={styles.hotelContainerCards}>
        {hotels?.length ? (
          hotels.map((c) => {
            return (
              <div key={c.id}>
                <Link to={`/home/${city}/hotel/${c.name}`}>
                  <HotelCard
                    id={c.id}
                    name={c.name}
                    image={c.image}
                    category={c.category}
                    rating={c.rating}
                    description={c.description}
                    services={c.services}
                  />
                </Link>
              </div>
            );
          })
        ) : (
          <h4>No se encontraron Hoteles</h4>
        )}
      </div>
    </div>
  );
};

export default HotelContainer;
