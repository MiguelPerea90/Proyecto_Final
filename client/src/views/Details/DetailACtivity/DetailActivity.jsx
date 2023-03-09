import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailActivity } from "../../../redux/actions";
import styles from "./DetailActivity.module.css"
import NavBar from "../../../components/NavBar/NavBar";
import {useNavigate} from "react-router-dom"

const DetailActivity = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const detailActivity = useSelector((state) => state.detailActivity);

  useEffect(() => {
    dispatch(getDetailActivity(params.activity));
  }, []);
  return (
    <div className={styles.containerDivDetail}>
      < NavBar />
      <h1 className={styles.titleDescription}>Descripción de la actividad</h1>
      <div className={styles.containerDetailActivity}>

        <h4 className={styles.title}>{detailActivity.name}</h4>

        <div className={styles.containerDivImg}>
          <img src={detailActivity.image} alt="" />
        </div>

        <div className={styles.containerDescription}>
          <h5 className={styles.info}>{detailActivity.category}</h5>
          <h5 className={styles.infoBlack}>{detailActivity.duration + " Min"}</h5>
          <h5 className={styles.infoBlack}>{detailActivity.price + "$"}</h5>
          <h5 className={styles.info}>Descripción</h5>
          <p>{detailActivity.description + "."}</p>
          <button 
            className={styles.buttonMoreActivities} 
            onClick={()=>navigate(-1)}
          >
              Volver
          </button>
        </div>

      </div>

    </div>

  );
};

export default DetailActivity;
