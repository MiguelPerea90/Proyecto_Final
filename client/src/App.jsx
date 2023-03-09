import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import axios from "axios";
import DetailCity from "./views/Details/DetailCity/DetailCity";
import DetailHotel from "./views/Details/DetailHotel/DetailHotel";
import DetailActivity from "./views/Details/DetailACtivity/DetailActivity";
import Hotels from "./components/Hotel/Hotels";
import Activities from "./components/Activity/Activities";
import CreateHotel from "./views/Forms/CreateHotel/CreateHotel";
import DetailBooking from "./views/Details/DetailBooking/DetailBooking";
//axios.defaults.baseURL = "https://backend-kanehoteltravel-production.up.railway.app";
// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
// axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.baseURL =
  "https://backend-kanehoteltravel-production.up.railway.app/";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/home/:city" element={<DetailCity />} />
        <Route path="/home/:city/hotels" element={<Hotels />} />
        <Route path="/home/:city/activities" element={<Activities />} />
        <Route path="/home/:city/hotel/:hotel" element={<DetailHotel />} />
        <Route
          path="/home/:city/activity/:activity"
          element={<DetailActivity />}
        />
        <Route path="/detail/booking" element={<DetailBooking />} />
        <Route path="/backoffice/hotel/create" element={<CreateHotel />} />
      </Routes>
    </div>
  );
}

export default App;
