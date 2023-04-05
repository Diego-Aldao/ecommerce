import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

const Contenedor = styled.section`
  width: 100%;
  padding: 0px 15px;
  header {
    margin: 50px 0px 30px;
    h3 {
      text-transform: uppercase;
      font-size: 16px;
      line-height: 1.5;
      text-align: center;
    }
  }
`;

const FormularioRegistro = styled(Form)`
  width: 100%;
  fieldset {
    border: none;
    margin-bottom: 20px;
  }
  .field-general {
    display: contents;
  }
  .field-grid-completo {
    grid-column: 1 / 3;
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 15px;
  }
`;

const Campo = styled.div`
  width: 100%;
  margin-bottom: 25px;
  font-size: 13px;
  font-weight: 700;
  color: #646464;
  letter-spacing: 1px;
  max-width: 500px;
  margin: 0 auto 25px;
  position: relative;
  label {
    text-transform: uppercase;
    margin-bottom: 10px;
    display: block;
  }
  input {
    width: 100%;
    padding: 15px 10px;
    border: 1px solid black;
    border: ${({ valid }) =>
      valid ? "1px solid #ce1948" : "1px solid var(--color-gris)"};
  }
  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
  span {
    display: block;
    font-size: 12px;
    margin-top: 10px;
    font-weight: 400;
    line-height: 1.4;
  }
  span:first-letter {
    text-transform: uppercase;
  }
  &.checkbox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
    input {
      width: 20px;
      height: 20px;
    }
    label {
      margin: 0px;
      text-transform: capitalize;
    }
  }
`;

const HeaderInterior = styled.div`
  width: 100%;

  p:first-letter,
  h3:first-letter {
    text-transform: uppercase;
  }
  h3 {
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
  }
  @media (min-width: 768px) {
    min-height: 72px;
  }
`;

const Terminos = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
  input {
    display: inline-block;
    margin-right: 20px;
  }
  p {
    font-size: 15px;
  }
  p:first-letter {
    text-transform: uppercase;
  }
  span {
    display: inline-block;
    text-decoration: underline;
  }
  span::first-letter {
    text-transform: uppercase;
  }
`;

const BtnSubmit = styled.button`
  width: 100%;
  padding: 15px 0px 13px;
  background: black;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  &:disabled {
    background: var(--color-gris);
  }
`;

const MensajeError = styled.div`
  width: 100%;
  background: #fae7ec;
  position: absolute;
  top: -48px;
  right: 0;
  padding: 10px 10px;
  max-width: 280px;
  border: 2px solid #ce1948;
  p {
    font-size: 14px;
  }
  :after {
    content: "";
    width: 20px;
    height: 20px;
    bottom: -12px;
    left: 20px;
    position: absolute;
    background: #fae7ec;
    transform: rotate(45deg);
    border-bottom: 2px solid #ce1948;
    border-right: 2px solid #ce1948;
  }
  &.especial {
    right: auto;
    left: 0;
    top: -75px;
  }
  @media (min-width: 768px) {
    top: -55px;
    p {
      font-size: 16px;
    }
    &.especial {
      top: -85px;
    }
  }
`;

const Formulario = () => {
  registerLocale("es", es);
  const [startDate, setStartDate] = useState();
  const [maxDate, setMaxDate] = useState();

  useEffect(() => {
    function subtractYears(date, years) {
      date.setFullYear(date.getFullYear() - years);
      return date;
    }
    const date = new Date();
    const newDate = subtractYears(date, 16);
    setStartDate(newDate);
    setMaxDate(newDate);
  }, []);

  const validacionRegistro = Yup.object().shape({
    email: Yup.string()
      .email("¡Error en el email! Escribe tu direccion de email correctamente")
      .required("¡Vaya! Tienes que escribir tu email aqui"),
    nombre: Yup.string()
      .required("¡Vaya! Tienes que escribir tu nombre aqui")
      .min(3, "¡El nombre debe tener al menos 3 caracteres!"),
    apellido: Yup.string()
      .required("¡Vaya! Tienes que escribir tu apellido aqui")
      .min(3, "¡El apellido debe tener al menos 3 caracteres!"),
    contraseña: Yup.string()
      .required("¡Vaya! Tienes que escribir tu contraseña aqui")
      .min(8, "¡La contraseña debe tener al menos 8 caracteres!"),
    terminos: Yup.bool().oneOf(
      [true],
      "¡Tienes que aceptar los terminos y condiciones!"
    ),
  });

  return (
    <Contenedor>
      <header>
        <h3>o regístrate con una direccion de email</h3>
      </header>
      <Formik
        initialValues={{
          email: "",
          nombre: "",
          apellido: "",
          contraseña: "",
          terminos: false,
        }}
        validationSchema={validacionRegistro}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <FormularioRegistro>
            <fieldset className="field-general">
              <fieldset className="field-grid-completo">
                <Campo
                  valid={
                    props.errors.email &&
                    props.initialValues.email !== props.values.email
                  }
                >
                  <label htmlFor="email">direccion de email</label>
                  <Field type="email" name="email" id="email" />
                  <span>enviaremos la confirmacion de tu pedido aqui</span>
                  <ErrorMessage
                    name="email"
                    render={(msg) => (
                      <MensajeError>
                        <p>{msg}</p>
                      </MensajeError>
                    )}
                  />
                </Campo>
                <Campo
                  valid={
                    props.errors.nombre &&
                    props.initialValues.nombre !== props.values.nombre
                  }
                >
                  <label htmlFor="nombre">nombre:</label>
                  <Field type="text" name="nombre" id="nombre" />
                  <ErrorMessage
                    name="nombre"
                    render={(msg) => (
                      <MensajeError>
                        <p>{msg}</p>
                      </MensajeError>
                    )}
                  />
                </Campo>
                <Campo
                  valid={
                    props.errors.apellido &&
                    props.initialValues.apellido !== props.values.apellido
                  }
                >
                  <label htmlFor="apellido">apellido:</label>
                  <Field type="text" name="apellido" id="apellido" />
                  <ErrorMessage
                    name="apellido"
                    render={(msg) => (
                      <MensajeError>
                        <p>{msg}</p>
                      </MensajeError>
                    )}
                  />
                </Campo>
                <Campo
                  valid={
                    props.errors.contraseña &&
                    props.initialValues.contraseña !== props.values.contraseña
                  }
                >
                  <label htmlFor="contraseña">contraseña:</label>
                  <Field type="password" name="contraseña" id="contraseña" />
                  <span>debe tener un minimo de 8 caracteres</span>
                  <ErrorMessage
                    name="contraseña"
                    render={(msg) => (
                      <MensajeError>
                        <p>{msg}</p>
                      </MensajeError>
                    )}
                  />
                </Campo>
              </fieldset>
              <fieldset className="field-grid-completo">
                <Campo>
                  <label htmlFor="fecha">fecha de nacimiento</label>
                  <DatePicker
                    name="fecha"
                    id="fecha"
                    locale="es"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    showYearDropdown
                    dateFormatCalendar="MMMM"
                    yearDropdownItemNumber={35}
                    scrollableYearDropdown
                    dateFormat="dd/MM/yyyy"
                    maxDate={maxDate}
                  />
                  <span>
                    solo puedes registrarte en asos si tienes a partir de 16
                    años
                  </span>
                </Campo>
              </fieldset>
              <fieldset>
                <HeaderInterior>
                  <h3>me interesa sobre todo</h3>
                </HeaderInterior>
                <Campo className="checkbox genero">
                  <label htmlFor="mujer">ropa de mujer</label>
                  <input type="checkbox" name="mujer" id="mujer" />
                </Campo>
                <Campo className="checkbox genero">
                  <label htmlFor="mujer">ropa de hombre</label>
                  <input type="checkbox" name="hombre" id="hombre" />
                </Campo>
              </fieldset>
              <fieldset>
                <HeaderInterior>
                  <h3>preferencias de contacto</h3>
                  <p>dinos acerca de que quieres que te informemos</p>
                </HeaderInterior>
                <Campo className="checkbox newsletter">
                  <label htmlFor="descuentos">descuentos y rebajas</label>
                  <input type="checkbox" name="descuentos" id="descuentos" />
                </Campo>
                <Campo className="checkbox newsletter">
                  <label htmlFor="novedades">novedades</label>
                  <input type="checkbox" name="novedades" id="novedades" />
                </Campo>
                <Campo className="checkbox newsletter">
                  <label htmlFor="para-ti">solo para ti</label>
                  <input type="checkbox" name="para-ti" id="para-ti" />
                </Campo>
                <Campo className="checkbox newsletter">
                  <label htmlFor="partners">asos partners</label>
                  <input type="checkbox" name="partners" id="partners" />
                </Campo>
              </fieldset>
              <Terminos className="field-grid-completo">
                <Field type="checkbox" name="terminos" id="terminos" />
                <p>
                  al crear tu cuenta, aceptas nuestros{" "}
                  <span>terminos y condiciones</span> &{" "}
                  <span>politica de privacidad</span>
                </p>
                <ErrorMessage
                  name="terminos"
                  render={(msg) => (
                    <MensajeError className="especial">
                      <p>{msg}</p>
                    </MensajeError>
                  )}
                />
              </Terminos>
              <BtnSubmit
                className="field-grid-completo"
                type="submit"
                disabled={!props.isValid}
              >
                únete a asos
              </BtnSubmit>
            </fieldset>
          </FormularioRegistro>
        )}
      </Formik>
    </Contenedor>
  );
};

export default Formulario;
