import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Select from "react-select";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import style from "./DetailBooking.module.css";
import Modal from "react-bootstrap/Modal";
import CheckoutForm from "../../../components/CheckoutForm/CheckoutForm";

function validate(data, dateValue) {
  const errors = {};
  if (!data.name) errors.name = "The Name is required";
  if (!data.lastname) errors.lastname = "The Last Name id required";
  if (!data.email) errors.email = "The E-mail is required";
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!data.email || regex.test(data.email) === false)
    errors.typeEmail = " / The type E-mail is invalid";
  if (!data.phone) errors.phone = "The Phone is required";
  if (data.phone.length > 10 || isNaN(data.phone))
    errors.typePhone = "The type Phone is invalid";
  if (!data.id) errors.id = "Id is required";
  if (isNaN(data.id) || data.id.length > 8)
    errors.idType = "Id type is invalid";
  if (!data.rooms.length) errors.rooms = "Pleace select Room";
  if (!dateValue[0]) errors.checkin = "Date Check-In is required";
  return errors;
}

const Respaldo = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const amountHardCode = 10; //10usd
  const descriptionHardCode = "Descripcion del pago"; //10usd
  const [dateValue, setCheckIn] = useState(new Date());
  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: 0,
    id: "",
    checkin: "",
    checkout: "",
    rooms: [],
    price: [],
  });
  0;
  // const stripePromise = loadStripe(import.meta.env.VITE_KEY_STRIPE)
  const stripePromise = loadStripe(
    "pk_test_51MeUSYJo5kAZGuTWTiN6NsA5FRMyqId8smjQOgEObJw8rbCeHijt3N58dI0J5HfF48lROYvHLIzLE2QjAk8skODA00D3KU6iNb"
  );
  //Validacion
  const [error, setError] = useState({});
  const [botonActive, setActive] = useState(false);
  useEffect(() => {
    const validations = validate(data, dateValue);
    setError(validations);
  }, [data]);
  useEffect(() => {
    if (
      !error.name &&
      !error.lastname &&
      !error.email &&
      !error.typeEmail &&
      !error.phone &&
      !error.typePhone &&
      !error.id &&
      !error.idType &&
      !error.rooms &&
      !error.checkin
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [error]);

  //formato de fecha
  const formatDate = (date) => {
    return dayjs(date).format("DD/MM/YYYY");
  };
  useEffect(() => {
    let checkInDate = dayjs(dateValue[0]).format("DD/MM/YYYY");
    let checkOutDate = dayjs(dateValue[1]).format("DD/MM/YYYY");
    setData({ ...data, checkin: checkInDate, checkout: checkOutDate });
  }, [dateValue]);
  

  //handler Functions
  const handlerInputName = (event) => {
    const input = event.target.name;
    const value = event.target.value;
    setData({ ...data, [input]: value });
  };
  const handlerInputLastname = (event) => {
    const input = event.target.name;
    const value = event.target.value;
    setData({ ...data, [input]: value });
  };
  const handlerInputEmail = (event) => {
    const input = event.target.name;
    const value = event.target.value;
    setData({ ...data, [input]: value });
  };
  const handlerInputCity = (event) => {
    const input = event.target.name;
    const value = event.target.value;
    setData({ ...data, [input]: value });
  };
  const handlerInputId = (event) => {
    const input = event.target.name;
    const value = event.target.value;
    setData({ ...data, [input]: value });
  };

  let totalPrice = 0;

  const datosRoom = location.state.rooms?.map((e) => {
    return { label: e.name, value: e.name };
  });
  const handlerOption = (event) => {
    const roomName = event.value;
    let newArray = data.rooms;
    let find = newArray?.filter((e) => e === roomName);
    ser
    if (find.length > 0) {
      setData({ ...data });
    } else {
      setData({ ...data, rooms: [...data.rooms, roomName] });
    }
  };

  const handleDelete = (event) => {
    setData({
      ...data,
      rooms: data.rooms.slice().filter((e) => e !== event),
    });
  };

  return (
    <div className={style.containerBookingGeneral}>
      <div className={style.detailBookingContainer}>
        <div>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label className={style.titleBooking}>
                  First Name
                </Form.Label>
                <Form.Control
                  onChange={(e) => handlerInputName(e)}
                  name="name"
                  type="text"
                  placeholder="Your Name"
                />
              </Form.Group>
              {error.name && <span className={style.fail}>{error.name}</span>}

              <Form.Group as={Col}>
                <Form.Label className={style.titleBooking}>
                  Last Name
                </Form.Label>
                <Form.Control
                  onChange={(e) => handlerInputLastname(e)}
                  name="lastname"
                  type="text"
                  placeholder="Your Last Name"
                />
                {error.lastname && (
                  <span className={style.fail}>{error.lastname}</span>
                )}
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridEmail">
              <Form.Label className={style.titleBooking}>Your Email</Form.Label>
              <Form.Control
                onChange={(e) => handlerInputEmail(e)}
                name="email"
                placeholder="user@email"
              />
              {error.email && <span className={style.fail}>{error.email}</span>}
              {error.typeEmail && (
                <span className={style.fail}>{error.typeEmail}</span>
              )}
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label className={style.titleBooking}>Phone</Form.Label>
                <Form.Control
                  placeholder="Input Only Numbers Max: 10"
                  onChange={(e) => handlerInputCity(e)}
                  name="phone"
                />
                {error.phone && (
                  <span className={style.fail}>{error.phone}</span>
                )}
                {error.typePhone && (
                  <span className={style.fail}>{error.typePhone}</span>
                )}
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className={style.titleBooking}>ID</Form.Label>
                <Form.Control onChange={(e) => handlerInputId(e)} name="id" />
                {error.id && <span className={style.fail}>{error.id}</span>}
                {error.idType && (
                  <span className={style.fail}>{error.idType}</span>
                )}
              </Form.Group>
            </Row>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label className={style.titleBooking}>Rooms</Form.Label>
              <Select
                options={datosRoom}
                placeholder="Choice Room"
                onChange={handlerOption}
              />
              {error.rooms && <span className={style.fail}>{error.rooms}</span>}
            </Form.Group>

            <Form.Label className={style.titleBooking}>
              Check-In / Check-Out
            </Form.Label>
            <div>
              <Calendar
                minDate={new Date()}
                selectRange={true}
                onChange={(e) => setCheckIn(e)}
                value={dateValue}
              />
              {error.checkin && <span className={style.fail}>{error.checkin}</span>}
              {error.checkout && <span className={style.fail}>{error.checkout}</span>}
            </div>
            <div>
              <div>
                {dateValue[0] && dateValue[1] > 1 && (
                  <>
                    <Form.Label className={style.titleBooking}>
                      <p>Check In: {formatDate(dateValue[0])}</p>
                      <p>Check Out: {formatDate(dateValue[1])}</p>
                    </Form.Label>
                  </>
                )}
              </div>
            </div>
            <div className={style.modal}>
              <>
                <Link to={`/`}>
                  <Button className={style.button} variant="primary">
                    Cancel
                  </Button>
                </Link>
                <Button
                  id="btn-Summit"
                  disabled={!botonActive}
                  variant="primary"
                  onClick={handleShow}
                  className={style.button}
                >
                  Finalize Reservation
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Booking Summary</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <ul className={style.titleBooking}>
                      <p className={style.titleBooking}>
                        Hotel: {location.state.name}
                      </p>
                      <p className={style.titleBooking}>Name: {data.name}</p>
                      <p className={style.titleBooking}>
                        Last Name: {data.lastname}
                      </p>
                      <p className={style.titleBooking}>ID: {data.id}</p>
                      <p className={style.titleBooking}>
                        Rooms:{" "}
                        {data.rooms?.map((e) => {
                          return <p key={e}>{e}</p>;
                        })}
                      </p>
                      <p className={style.titleBooking}>
                        Total Price: ${data.price}
                      </p>
                    </ul>
                    <div className={style.stripe}>
                      <Form.Group className="mb-3" controlId="formGridEmail">
                        <Elements stripe={stripePromise}>
                          <CheckoutForm
                            totalPayment={amountHardCode}
                            descriptionPayment={descriptionHardCode}
                          />
                        </Elements>
                      </Form.Group>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            </div>
            {/* <Button className={style.button} variant="primary" type="submit">
              Submit
            </Button> */}
          </Form>
        </div>
        <div className={style.hotel}>
          <div className={style.image}>
            <h2 className={style.title1}>{location.state.name}</h2>

            <img src={location.state.image} alt="Imagen" />
          </div>
          <div className={style.hotel}>
            {data.rooms?.map((e) => {
              return (
                <div key={e}>
                  <div className={style.title1}>
                    <button
                      type="button"
                      onClick={() => handleDelete(e)}
                      className={style.btnDelete}
                    >
                      X
                    </button>
                    <h2>{e}</h2>
                  </div>
                  {/* <div className={style.image}>
                    <img src={e[0]?.image} alt="Imagen" />
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Respaldo;