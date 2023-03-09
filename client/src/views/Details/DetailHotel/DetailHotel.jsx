import Button from "react-bootstrap/Button";
import style from "./DetailHotel.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getDetailHotel } from "../../../redux/actions";
import { Link } from "react-router-dom";
import styles from "./DetailHotel.module.css";
import NavBar from "../../../components/NavBar/NavBar";
import {useNavigate} from "react-router-dom"

const DetailHotel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  const detailHotel = useSelector((state) => state.detailHotel);
  console.log(detailHotel)
  useEffect(() => {
    dispatch(getDetailHotel(params.hotel));
  }, []);

  return (
    <div className={styles.containerDetailHotel}>
      <NavBar />
      <h1 className={styles.titleDescription}>Descripción del hotel</h1>
      <div className={styles.containerDivDetail}>
        <h4 className={styles.title}>{detailHotel.name}</h4>

        <div className={styles.containerDivImg}>
          <img src={detailHotel.image} alt="" />
        </div>

        <div className={styles.containerServicesDescription}>
          <h4 className={styles.categoryRating}>{detailHotel.category}</h4>
          <h4 className={styles.categoryRatingBlack}>{detailHotel.rating}</h4>
          <h4 className={styles.categoryRating}>Servicios:</h4>
          <p >{detailHotel.services}</p>
          <h4 className={styles.categoryRating}>Descripción</h4>
          <p>{detailHotel.description}</p>

          <div className={styles.containerButton}>

          <button 
            className={styles.buttonMoreHotels} 
            onClick={()=>navigate(-1)}
          >
              Volver
          </button>

            <Link
              to="/detail/booking"
              state={{
                name: detailHotel.name,
                image: detailHotel.image,
                rooms: detailHotel.rooms,
                description: detailHotel.description
              }}
            >
              <Button
                className={style.buttonBooking}
                variant="primary"
                type="submit"
              >
                Booking
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

// const navigate = useNavigate();
{/* <a onClick={() => navigate(-1)}>Volver</a> */}

export default DetailHotel;
