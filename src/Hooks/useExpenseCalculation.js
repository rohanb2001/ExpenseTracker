import React, { useState } from "react";

const useExpenseCalculation = () => {
  const [amountValue, setAmountValue] = useState(0);
  const [textValue, setTextValue] = useState("");

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmountValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTextValue("");
    console.log(textValue);
    setAmountValue(0);
    console.log(amountValue);
  };

  return {
    InputTextValue: textValue,
    InputAmountValue: amountValue,
    handleTextChange,
    handleSubmit,
    handleAmountChange,
  };
};

export default useExpenseCalculation;
