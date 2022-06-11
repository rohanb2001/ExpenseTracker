import React, { createContext, useState } from "react";
import { GenericButton } from "../GenericButton/GenericButton";
import { MainForm } from "./Form.styles";

export const FormContext = createContext(null);

const Form = ({ children, initialValues, handleSubmit }) => {
  const [formValue, setFormValue] = useState(initialValues);

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <MainForm onSubmit={(e) => handleSubmit(e, formValue)}>
      <FormContext.Provider value={{ formValue: formValue, handleChange }}>
        {children}
      </FormContext.Provider>
      <GenericButton type="submit">Add transaction</GenericButton>
    </MainForm>
  );
};

export default Form;
