import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import { useEffect } from "react";
import Select from "react-select";
import Calendar from "react-calendar";
import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import style from "./DetailRoom.module.css";
import Row from "react-bootstrap/esm/Row";

const RoomSelect = ({
  setActive,
  data,
  error,
  datosRoom,
  handlerOption,
  handleDelete,
  formatDate,
  setCheckIn,
  dateValue,
  page,
}) => {
  
  useEffect(() => {
    
    if (
      !error.rooms &&
      !error.checkin
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [page]);
  return (
    <div className={style.detailBookingContainer}>
      <div>
        <Form>
          <Row>
            <Form.Group>
              <Form.Label className={style.titleBooking}>
                Habitaciones
              </Form.Label>
              <Select
                className={style.select}
                value={data.rooms[0] ? data.rooms[0] : ""}
                options={datosRoom}
                placeholder="Seleccione la Habitacion"
                onChange={handlerOption}
              />
              {error.rooms && <span className={style.fail}>{error.rooms}</span>}
            </Form.Group>

            <Form.Label className={style.titleBooking}>
              Fechas de Check-In / Check-Out
            </Form.Label>
            <Form.Group as={Col}>
              <Calendar
                minDate={new Date()}
                selectRange={true}
                onChange={(e) => setCheckIn(e)}
                value={dateValue}
              />
              {error.checkin && (
                <span className={style.fail}>{error.checkin}</span>
              )}
              {error.checkout && (
                <span className={style.fail}>{error.checkout}</span>
              )}
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
            </Form.Group>
            <Form.Group className={style.checkList}>
              <Form.Label className={style.titleBooking}>
                Servicios Includos
              </Form.Label>
              <div className={style.input}>
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label className={style.lista} for="flexCheckChecked">
                   Vista
                  </label>
                </div>
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label className={style.lista} for="flexCheckChecked">
                   Frigo Bar
                  </label>
                </div>
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label className={style.lista} for="flexCheckChecked">
                  Wifi gratis
                  </label>
                </div>
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label className={style.lista} for="flexCheckChecked">
                    Lavanderia
                  </label>
                </div>
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label className={style.lista} for="flexCheckChecked">
                    Concergeria 24/7
                  </label>
                </div>
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label className={style.lista} for="flexCheckChecked">
                    Caja de Seguridad
                  </label>
                </div>
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label className={style.lista} for="flexCheckChecked">
                    Aire Acondicionado
                  </label>
                </div>
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label className={style.lista} for="flexCheckChecked">
                   Servicio a la Habitacion
                  </label>
                </div>
              </div>
            </Form.Group>
            <Form.Group className={style.checkList1}>
            <Form.Label className={style.titleBooking}>
                Nuestras Habitaciones
              </Form.Label>
            <div className={style.input}>
                <div>
                </div>
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label className={style.lista} for="flexCheckChecked">
                   1-Persona / Cama individual
                  </label>
                </div>
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label className={style.lista} for="flexCheckChecked">
                    2-Personas / Cama Doble
                  </label>
                </div>
              </div>
            </Form.Group>
          </Row>
        </Form>
      </div>
      <div>
        <h3 className={style.title1}>Habitaciones selecionadas</h3>
        <div className={style.image}>
          {data.rooms?.map((element) => {
            return data.image?.map((f) => {
              if (element === f.name) {
                return (
                  <div>
                    <div key={f.name} className={style.roomTitle}>
                      <button
                        type="button"
                        onClick={() => handleDelete(f.name)}
                        className={style.btnDelete}
                      >
                        X
                      </button>
                      <h2>{f.name}</h2>
                    </div>
                    <div className={style.roomTitle}>
                      <img key={f.image} src={f.image} alt="Image" />
                      <h5>{f.description}</h5>
                    </div>
                  </div>
                );
              }
            });
          })}
        </div>
      </div>
    </div>
  );
};
export default RoomSelect;
