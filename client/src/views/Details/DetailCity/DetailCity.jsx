import style from "./DetailCity.module.css";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetailCity } from "../../../redux/actions";
import { useEffect } from "react";
import NavBar from "../../../components/NavBar/NavBar";

import HotelContainer from "../../../components/Hotel/HotelContainer/HotelContainer";
import ActivityContainer from "../../../components/Activity/ActivityContainer/ActivityContainer";
import FilterCities from "../../../components/FiltersOrders/Cities/FilterCities";

const DetailCity = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const detailCity = useSelector((state) => state.detailCity);

  const city = params.city;

  useEffect(() => {
    dispatch(getDetailCity(params.city));
  }, []);

  return (
    <div className={style.detailCityBackground}>
      <NavBar />
      <FilterCities />
      <HotelContainer hotels={detailCity.hotels} />
      <div className={style.detailCityMore}>
        <Link to={`/home/${city}/hotels`}>MORE HOTELS {"-->"} </Link>
      </div>

      <ActivityContainer activities={detailCity.activities} />
      <div className={style.detailCityMore}>
        <Link to={`/home/${city}/activities`}>MAS ACTIVIDADES {"-->"}</Link>
      </div>
    </div>
  );
};
export default DetailCity;
