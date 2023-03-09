import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCities } from "../../redux/actions";
import CityContainer from "./CityContainer/CityContainer";

const Cities = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);
  return <CityContainer />;
};

export default Cities;
