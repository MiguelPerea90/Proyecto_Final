import {
  GET_CITIES,
  GET_CITY_DETAIL,
  GET_HOTEL_DETAIL,
  GET_ACTIVITY_DETAIL,
  GET_HOTELS,
  GET_ACTIVITIES,
} from "./actions";

const initialState = {
  cities: [],
  detailCity: [],
  detailHotel: [],
  detailActivity: [],
  hotels: [],
  activities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIES:
      return {
        ...state,
        cities: action.payload,
      };

    case GET_CITY_DETAIL:
      return {
        ...state,
        detailCity: action.payload,
      };

    case GET_HOTEL_DETAIL:
      return {
        ...state,
        detailHotel: action.payload,
      };
    case GET_ACTIVITY_DETAIL:
      return {
        ...state,
        detailActivity: action.payload,
      };
    case GET_HOTELS:
      return {
        ...state,
        hotels: action.payload,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
