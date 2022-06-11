import React, { useContext } from "react";
import { FormContext } from "./Form";
import { Label, Input } from "./Form.styles";

const FormInput = ({ type, placeholder, name, labelContent }) => {
  const { formValue, handleChange } = useContext(FormContext);
  return (
    <>
      <Label>{labelContent}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        value={formValue[name]}
        onChange={handleChange}
      />
    </>
  );
};

export default FormInput;
