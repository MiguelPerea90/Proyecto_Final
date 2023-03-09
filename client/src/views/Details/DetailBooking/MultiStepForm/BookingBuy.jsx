import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import style from "./DetailBuy.module.css";
import Modal from "react-bootstrap/Modal";
import CheckoutForm from "../../../../components/CheckoutForm/CheckoutForm";

const BookingBuy = ({
  location,
  data,
  show,
  stripePromise,
  handleClose,
  amountHardCode,
  descriptionHardCode,
  setSuccessfulReservation,
  setReservationResponse,
}) => {
  return (
    <div className={style.detailBookingContainer}>
      <div>
        <div>
          <Form>
            <Modal show={show} onHide={handleClose} className={style.modal}>
              <Modal.Header closeButton className={style.tituloBooking}>
                <Modal.Title>Detalle de la Reserva</Modal.Title>
              </Modal.Header>
              <Modal.Body className={style.body}>
                <div className={style.containerDiv}>
                  <div className={style.h3Div}>
                  <h3 className={style.h3}>Hotel:</h3>
                  <p className={style.titleBooking}>{location.state.name}</p>
                  </div>
                  <div className={style.h3Div}>
                  <h3 className={style.h3}>Nombre:</h3>
                  <p className={style.titleBooking}>                    
                    {data.name}
                  </p>
                  </div>
                  <div className={style.h3Div}>
                  <h3 className={style.h3}>Apellido:</h3> 
                    <p className={style.titleBooking}>
                      {data.lastname}
                    </p>
                  </div>

                  <div className={style.h3Div}>
                  <h3 className={style.h3}>ID:</h3>
                    <p className={style.titleBooking}>
                       {data.id}
                    </p>
                  </div>

                  <div className={style.h3Div}>
                  <h3 className={style.h3}>Habitaciones:</h3>
                     {data.rooms.map((e) => {
                        return <p className={style.p} key={e}>{e}</p>;
                      })}
                  </div>

                  <div className={style.h3Div}>
                  <h3 className={style.h3}>Precio Total:</h3> 
                    <p className={style.titleBooking}>
                      ${data.price}
                    </p>
                  </div>
                </div>

                <div className={style.stripe}>
                  <Form.Group className="mb-3" controlId="formGridEmail">
                    <Elements stripe={stripePromise}>
                      <CheckoutForm
                        totalPayment={amountHardCode}
                        descriptionPayment={descriptionHardCode}
                        formData={data}
                        successfulReservation={setSuccessfulReservation}
                        reservationResponse={setReservationResponse}
                      />
                    </Elements>
                  </Form.Group>
                </div>
              </Modal.Body>
              <Modal.Footer className={style.footer}>
                <Link to={`/`}>
                  <Button className={style.button} variant="secondary">
                    Cancelar
                  </Button>
                </Link>
                <Button variant="secondary" onClick={handleClose}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default BookingBuy;
