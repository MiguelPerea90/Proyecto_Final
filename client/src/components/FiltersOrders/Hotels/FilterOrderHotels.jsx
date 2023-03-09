import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { getHotels } from "../../../redux/actions";
import style from "./FilterOrderHotels.module.css";

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

const FilterOrderHotels = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const params = useParams();

  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [city, setCity] = useState("");

  const handlerCategory = (event) => {
    setCategory(event.value);
  };

  const handlerRating = (event) => {
    setRating(event.value);
  };

  const handlerCity = (event) => {
    setCity(event.value);
    navigateTo(`/home/${event.value}/hotels`);
  };

  useEffect(() => {
    dispatch(getHotels(params.city, category, rating));
    // dispatch(getHotels(city, category, rating));
  }, [category, rating, params, city]);

  return (
    <div className={style.filterOrderHotels}>
      <div className={style.filterOrderHotelsContainer}>
        <div className={style.filterOrderHotelsTypes}>
          <label>City</label>
          <hr />
          <Select
            defaultValue={{ label: params.city, value: params.city }}
            options={options}
            onChange={handlerCity}
          />
        </div>
        <div className={style.filterOrderHotelsTypes}>
          <label>Category</label>
          <hr />
          <Select options={options1} onChange={handlerCategory} />
        </div>
        <div className={style.filterOrderHotelsTypes}>
          <label>Rating</label>
          <hr />
          <Select options={options2} onChange={handlerRating} />
        </div>
      </div>
    </div>
  );
};

export default FilterOrderHotels;
