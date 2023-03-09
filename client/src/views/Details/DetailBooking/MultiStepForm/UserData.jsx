import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import style from "./DetailUser.module.css";

const UserData = ({
  data,
  error,
  handlerInputName,
  handlerInputLastname,
  handlerInputEmail,
  handlerInputCity,
  handlerInputId,
}) => {
  return (
    <div>
      <div className={style.detailContainer}>
        <div >
          <Form>
            <Row class="w-50">
              <Form.Group as={Col}>
                <Form.Label className={style.titleBooking}>
                  Nombre
                </Form.Label>
                <Form.Control
                  value={data.name ? data.name : ""}
                  onChange={(e) => handlerInputName(e)}
                  name="name"
                  type="text"
                  placeholder="Ingrese su nombre"
                />
                {error.name && <span className={style.fail}>{error.name}</span>}
           
              </Form.Group>
              <Form.Group as={Col}>
                  <Form.Label className={style.titleBooking}>
                    Apellido
                  </Form.Label>
                  <Form.Control
                    value={data.lastname ? data.lastname : ""}
                    onChange={(e) => handlerInputLastname(e)}
                    name="lastname"
                    type="text"
                    placeholder="Ingrese su apellido"
                  />
                  {error.lastname && (
                    <span className={style.fail}>{error.lastname}</span>
                  )}
                </Form.Group>
            </Row>

            <Form.Group class="w-75">
              <Form.Label className={style.titleBooking}>Correo Electronico</Form.Label>
              <Form.Control
                value={data.email ? data.email : ""}
                onChange={(e) => handlerInputEmail(e)}
                name="email"
                placeholder="usuario@email"
              />
              {error.email && <span className={style.fail}>{error.email}</span>}
              {error.typeEmail && (
                <span className={style.fail}>{error.typeEmail}</span>
              )}
            </Form.Group>

            <Row>
              <Form.Group as={Col}>
                <Form.Label className={style.titleBooking}>Numero de Telefono</Form.Label>
                <Form.Control
                  value={data.phone ? data.phone : ""}
                  placeholder="Ingrese solo numeros y max=10"
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
                <Form.Label className={style.titleBooking}>Dni / Pasaporte</Form.Label>
                <Form.Control
                 placeholder="Ingrese solo numeros"
                 value={data.id ? data.id : ""}
                 onChange={(e) => handlerInputId(e)} 
                 name="id" />
                {error.id && <span className={style.fail}>{error.id}</span>}
                {error.idType && (
                  <span className={style.fail}>{error.idType}</span>
                )}
              </Form.Group>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default UserData;
