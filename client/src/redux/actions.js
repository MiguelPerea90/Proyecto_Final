import axios from "axios";

export const GET_CITIES = "GET_CITIES";
export const GET_CITY_DETAIL = "GET_CITY_DETAIL";
export const GET_HOTEL_DETAIL = "GET_HOTEL_DETAIL";
export const GET_ACTIVITY_DETAIL = "GET_ACTIVITY_DETAIL";
export const GET_HOTELS = "GET_HOTELS";
export const GET_ACTIVITIES = "GET_ACTIVITIES";

export const getCities = () => {
  return async function (dispatch) {
    const dbData = await axios.get("/city");
    const cities = dbData.data;
    dispatch({
      type: GET_CITIES,
      payload: cities,
    });
  };
};

export const getHotels = (city, filter = "", order = "") => {
  return async function (dispatch) {
    const dbData = await axios.get(
      `/hotel?city=${city}&filter=${filter}&order=${order}`
    );
    const hotels = dbData.data;
    dispatch({
      type: GET_HOTELS,
      payload: hotels,
    });
  };
};

export const getActivities = (city, filter = "", order = "") => {
  return async function (dispatch) {
    const dbData = await axios.get(
      `/activity?city=${city}&filter=${filter}&order=${order}`
    );
    const activities = dbData.data;
    dispatch({
      type: GET_ACTIVITIES,
      payload: activities,
    });
  };
};

export const getDetailCity = (city) => {
  return async function (dispatch) {
    const dbData = await axios.get(`/city/${city}`);
    const detailCity = dbData.data;
    dispatch({
      type: GET_CITY_DETAIL,
      payload: detailCity,
    });
  };
};

export const getDetailHotel = (hotel) => {
  return async function (dispatch) {
    const dbData = await axios.get(`/hotel/${hotel}`);
    const detailHotel = dbData.data;
    dispatch({
      type: GET_HOTEL_DETAIL,
      payload: detailHotel,
    });
  };
};

export const getDetailActivity = (activity) => {
  return async function (dispatch) {
    const dbData = await axios.get(`/activity/${activity}`);
    const detailActivity = dbData.data;
    dispatch({
      type: GET_ACTIVITY_DETAIL,
      payload: detailActivity,
    });
  };
};
