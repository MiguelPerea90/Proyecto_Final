import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { getActivities } from "../../../redux/actions";

import style from "./FilterOrderActivities.module.css";

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

const options1 = [
  { label: "All", value: "" },
  { label: "Economic", value: "Economic" },
  {
    label: "Regular",
    value: "Regular",
  },
  {
    label: "VIP",
    value: "VIP",
  },
];

const options2 = [
  { label: "ASC", value: "ASC" },
  {
    label: "DESC",
    value: "DESC",
  },
];

const FilterOrderActivities = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const params = useParams();

  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");

  const handlerCategory = (event) => {
    setCategory(event.value);
  };

  const handlerPrice = (event) => {
    setPrice(event.value);
  };

  const handlerCity = (event) => {
    setCity(event.value);
    navigateTo(`/${event.value}/activities`);
  };

  useEffect(() => {
    dispatch(getActivities(params.city, category, price));
  }, [category, price, params, city]);

  const handlerButton = () => {
    window.history.back();
  };

  return (
    <div className={style.filterOrderActivities}>
      <div className={style.filterOrderActivitiesContainer}>
        <div className={style.filterOrderActivitiesTypes}>
          <label>City</label>
          <hr />
          <Select
            defaultValue={{ label: params.city, value: params.city }}
            options={options}
            onChange={handlerCity}
          />
        </div>
        <div className={style.filterOrderActivitiesTypes}>
          <label>Category</label>
          <hr />
          <Select options={options1} onChange={handlerCategory} />
        </div>
        <div className={style.filterOrderActivitiesTypes}>
          <label>Price</label>
          <hr />
          <Select options={options2} onChange={handlerPrice} />
        </div>
      </div>
    </div>
  );
};

export default FilterOrderActivities;
