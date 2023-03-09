import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getCities, getDetailHotel } from "../../../redux/actions";
import styleForm from "./Form.module.css";
import style from "./CreateHotel.module.css";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/Form/Input/Input";
import Button from "../../../components/Form/Button/Button";
import CreateNav from "../../../components/Form/CreateNav/CreateNav";

const CreateHotel = () => {
  const [record, setRecord] = useState({});
  const dispatch = useDispatch();
  const allCities = useSelector((state) => state.cities);

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
      services: "",
      description: "",
      category: "",
      city: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Nombre obligatorio")
        .max(100, "El nombre debe tener como máximo 100 caracteres"),
      image: Yup.string().url("La imagen debe ser una URL válida"),
    }),

    onSubmit: (formData) => {
      // fetch(`${import.meta.env.VITE_URL_BACKEND}/hotel`, {
      fetch(`https://backend-kanehoteltravel-production.up.railway.app/hotel`, {
      // fetch(`http://localhost:3001/hotel`, {
        method: "POST",
        body: JSON.stringify({ ...formData, rooms: ["Habitación Deluxe"] }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
        //{...formData, rooms: ['Habitación Deluxe']}
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.hasOwnProperty("error")) {
            setRecord({ error: res.error });
          } else {
            setRecord({
              registered: true,
              response: { ...res, message: "¡Hotel registrado exitosamente!" },
            });
          }
        })
        .catch((err) => setRecord({ error: err.message }));
    },
  });

  const navigate = useNavigate();

  // const handlerSubmit = () => {
  //   navigate(`/${record.response?.city}/hotel/${record.response?.name}`);
  // };

  return record.registered === true ? (
    <p>
      Vamos a cargar el componente HotelDetail {JSON.stringify(record.response)}{" "}
      {/* {handlerSubmit()} */}
    </p>
  ) : (
    <div className={style.formContainer}>
      <CreateNav value="Regresar" url="/" />
      <form onSubmit={formik.handleSubmit}>
        <h3 className={style.formNote}>Campos con * son obligatorios.</h3>
        {record.error && <h2 className="errorMessage">{record.error}</h2>}
        <Input
          name="name"
          type="text"
          placeholder="Nombre(*): Maximo 100 letras"
          onChange={formik.handleChange}
          value={formik.values.name}
          error={formik.errors.name}
        />
        <Input
          name="image"
          type="text"
          placeholder="Imagen: (Url)"
          onChange={formik.handleChange}
          value={formik.values.image}
          error={formik.errors.image}
        />
        <Input
          name="services"
          type="text"
          placeholder="Servicios"
          onChange={formik.handleChange}
          value={formik.values.services}
          error={formik.errors.services}
        />
        <Input
          name="description"
          type="text"
          placeholder="Descripción"
          onChange={formik.handleChange}
          value={formik.values.description}
          error={formik.errors.description}
        />
        <Input
          name="category"
          type="text"
          placeholder="Categoría"
          onChange={formik.handleChange}
          value={formik.values.category}
          error={formik.errors.category}
        />
        <div>
          <select
            name="city"
            onChange={formik.handleChange}
            value={formik.values.city}
            className={style.select}
          >
            <option value="">Ciudad</option>
            {allCities.map((cityDb) => (
              <option value={cityDb.name} key={cityDb.id}>
                {cityDb.name}
              </option>
            ))}
          </select>
          <p className={styleForm.errorMessage}>
            {formik.errors.city && formik.errors.city}
          </p>
        </div>

        <section className={style.buttonContainer}>
          <Button type="submit" value="Registrar" />
          <Button type="reset" value="Limpiar" onClick={formik.handleReset} />
        </section>
      </form>
      <br />
      <Link to={`/`}>
        <button>REGRESAR</button>
      </Link>
    </div>
  );
};

export default CreateHotel;
