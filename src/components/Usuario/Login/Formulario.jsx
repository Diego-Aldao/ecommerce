import React from "react";
import styled from "styled-components";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const FormularioLogin = styled(Form)`
  width: 100%;
  padding: 0px 15px;
  margin-top: 40px;
  @media (min-width: 768px) {
    max-width: 390px;
    margin: 60px auto 0px;
  }
`;

const Campo = styled.div`
  width: 100%;
  margin-bottom: 50px;
  font-size: 13px;
  font-weight: 700;
  color: #646464;
  letter-spacing: 1px;
  position: relative;
  label {
    text-transform: uppercase;
    margin-bottom: 10px;
    display: block;
  }
  input {
    width: 100%;
    padding: 15px 10px;
    border: ${({ valid }) =>
      valid ? "1px solid #ce1948" : "1px solid var(--color-gris)"};
  }
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

const BtnAcceder = styled.button`
  display: block;
  text-align: center;
  background: black;
  color: #fff;
  padding: 15px 0px 13px;
  width: 100%;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;

  &:disabled {
    background: var(--color-gris);
  }
`;

const ClaveOlvidada = styled.div`
  width: 100%;
  margin-top: 20px;
  p {
    text-align: center;
    font-size: 14px;
  }
  p:first-letter {
    text-transform: uppercase;
  }
  @media (min-width: 768px) {
    margin-top: 30px;
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
  @media (min-width: 768px) {
    top: -55px;
    p {
      font-size: 16px;
    }
  }
`;

const Formulario = () => {
  const navigate = useNavigate();
  const validacionLogin = Yup.object().shape({
    email: Yup.string()
      .email("¡Error en el email! Escribe tu direccion de email correctamente")
      .required("¡Vaya! Tienes que escribir tu email aqui"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        contraseña: "",
      }}
      validationSchema={validacionLogin}
      onSubmit={(values) => {
        navigate("/");
      }}
    >
      {(props) => (
        <FormularioLogin>
          <Campo
            valid={
              props.errors.email &&
              props.initialValues.email !== props.values.email
            }
          >
            <label htmlFor="email">direccion de email: </label>
            <Field type="email" name="email" />
            <ErrorMessage
              name="email"
              render={(msg) => (
                <MensajeError>
                  <p>{msg}</p>
                </MensajeError>
              )}
            />
          </Campo>
          <Campo>
            <label htmlFor="contraseña">contraseña:</label>
            <Field type="password" name="contraseña" />
          </Campo>
          <BtnAcceder type="submit" disabled={!props.isValid}>
            acceder
          </BtnAcceder>
          <ClaveOlvidada>
            <p>has olvidado la contraseña?</p>
          </ClaveOlvidada>
        </FormularioLogin>
      )}
    </Formik>
  );
};

export default Formulario;
