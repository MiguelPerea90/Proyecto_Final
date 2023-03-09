import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDetailCity, getHotels } from "../../../redux/actions";
import style from "./FilterCities.module.css";
import Select from "react-select";
import { useNavigate, useParams } from "react-router-dom";

const options = [
  {
    label: "Puerto Vallarta",
    value: "Puerto Vallarta",
  },
  {
    label: "Cancun",
    value: "Cancun",
  },
  {
    label: "Playa Paraíso, Tulum",
    value: "Playa Paraíso, Tulum",
  },
];

const FilterCities = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const params = useParams();

  const [city, setCity] = useState("");

  const handlerCity = (event) => {
    setCity(event.value);
    navigateTo(`/home/${event.value}/hotels`);
  };

  useEffect(() => {
    dispatch(getDetailCity(city));
  }, [city]);

  return (
    <div className={style.filterCities}>
      <div className={style.filterCitiesContainer}>
        <div className={style.filterCitiesTypes}>
          <label>City</label>
          <hr />
          <Select
            defaultValue={{ label: params.city, value: params.city }}
            options={options}
            onChange={handlerCity}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterCities;
