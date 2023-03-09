import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getActivities } from "../../redux/actions";
import FilterOrderActivities from "../FiltersOrders/Activities/FilterOrderActivities";
import Paged from "../Paged/Paged";
import ActivityContainer from "./ActivityContainer/ActivityContainer";
import style from "./Activities.module.css";
import NavBar from "../NavBar/NavBar";
import {useNavigate} from "react-router-dom"

const Activities = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities(params.city));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [activitiesInPage, setActivitiesInPage] = useState(6);
  const indexLastActivity = currentPage * activitiesInPage;
  const indexFirstActivity = indexLastActivity - activitiesInPage;
  const currentActivity = activities.activities?.slice(
    indexFirstActivity,
    indexLastActivity
  );

  const paged = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <NavBar />

      <FilterOrderActivities />

      <ActivityContainer activities={currentActivity} />

      <div className={style.activitiesPaged}>
        <Paged
          itemsInPage={activitiesInPage}
          allItems={activities.activities}
          paginado={paged}
          currentPage={currentPage}
        />
      </div>
      <div className={style.containerButtonVolver}>
        <button 
              className={style.buttonMoreActivities} 
              onClick={()=>navigate(-1)}
            >
                Volver
        </button>
      </div>
    </div>
  );
};

export default Activities;
