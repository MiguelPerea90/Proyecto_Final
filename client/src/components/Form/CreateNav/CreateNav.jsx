import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Select from "react-select";
// import { getActivitesFilter, getHotelsFilter } from '../../../redux/actions';
// import { useAppDispatch, useAppSelector } from '../../../redux/Hooks/Hooks';
// import Logo from "../../Logo/Logo";
import style from "./CreateNav.module.css";

const CreateNav = (props) => {
  //   const params = useParams()
  //   const dispatch = useDispatch()
  //   const state = useSelector((state) => state.hotels)

  //   const [order, setOrder] = useState()
  //   const [filter, setFilter] = useState()

  //   const handlerInfo = (e:any) => {

  //     setFilter(e.value)
  //  }
  //  const handlerOrder = (e:any) => {

  //     setOrder(e.value)
  //  }

  //   useEffect(() => {
  //       dispatch(getHotelsFilter(params.cityName,filter, order) as any)
  //       dispatch(getActivitesFilter(params.cityName,filter, order) as any)
  //   },[dispatch,order,filter])

  return (
    <nav className={style.nav}>
      <Link to={props.url}>
        <button className={style.button}>{props.value}</button>
      </Link>
    </nav>
  );
};

export default CreateNav;
