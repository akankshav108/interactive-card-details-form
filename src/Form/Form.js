import React, { useState } from "react";
import Styles from "./Form.module.scss";

const Form = (props) => {
  const formFields = { name: "", cardNo: "", month: "", year: "", cvc: "" };
  let [warning, setWarning] = useState({});
  const [formValues, setFormValues] = useState(formFields);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const onSubmitHandler = (event) => {
    event.preventDefault();
    setWarning(validateValues(formValues));
    props.onAddCard(formValues);

    console.log(formValues)
    console.log(warning)

  };

  const validateValues = (value) => {
    const errors = {};

    if (!value.name) {
      errors.name = "Can't be blank";
      errors.nameOutline = true;
    }

    if (!value.cardNo.replace(/ /g, "").match(/^[0-9]{16}$/)) {
      errors.cardNo = "Wrong format, 16 digit number only";
      errors.cardNoOutline = true;
    }

    if (!value.cardNo) {
      errors.cardNo = "Can't be blank";
      errors.cardNoOutline = true;
    }

    if (
      !value.month.replace(/ /g, "").match("^[0-9]{1,2}") ||
      !value.year.replace(/ /g, "").match("^[0-9]{2}")
    ) {
      errors.monYear = "2 digit number only";
      errors.yearOutline = true;
    }

    if (Number(value.month) > 12 || Number(value.month) < 1) {
      errors.monYear = "Incorrect month";
      errors.monOutline = true;
    }

    if (!value.month) {
      errors.monYear = "Can't be blank";
      errors.monOutline = true;
    }

    if (!value.year) {
      errors.monYear = "Can't be blank";
      errors.yearOutline = true;
    }

    if (!value.cvc.replace(/ /g, "").match("^[0-9]{3}")) {
      errors.cvc = "3 digit number only";
      errors.cvcOutline = true;
    }

    if (!value.cvc) {
      errors.cvc = "Can't be blank";
      errors.cvcOutline = true;
    }

    return errors;
  };

  return (
    <div className={Styles.formWapper}>
      <form className={Styles.form} onSubmit={onSubmitHandler}>
        <div className={Styles.inputWapper}>
          <label>Cardholder Name</label>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            onChange={changeHandler}
            name="name"
            value={formValues.name}
            className={`${warning.nameOutline ? `${Styles.red}` : " "}`}
          />
          <div className={Styles.inputWarning}>{warning.name}</div>
        </div>

        <div className={Styles.inputWapper}>
          <label>Card Number</label>
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={changeHandler}
            name="cardNo"
            maxLength={16}
            value={formValues.cardNo}
            className={`${warning.cardNoOutline ? `${Styles.red}` : " "}`}
          />
          <div className={Styles.inputWarning}>{warning.cardNo}</div>
        </div>

        <div className={Styles.inputWapper}>
          <div className={Styles.expInput}>
            <label>Exp. Date (MM/YY)</label>
            <div>
              <input
                placeholder="MM"
                onChange={changeHandler}
                name="month"
                value={formValues.month}
                maxLength="2"
                className={`${warning.monOutline ? `${Styles.red}` : " "}`}
              />
              <input
                placeholder="YY"
                onChange={changeHandler}
                name="year"
                value={formValues.year}
                maxLength="2"
                className={`${warning.yearOutline ? `${Styles.red}` : " "}`}
              />
            </div>
            <div className={Styles.inputWarning}>{warning.monYear}</div>
          </div>

          <div className={Styles.cvcInput}>
            <label>CVC</label>
            <input
              placeholder="e.g. 123"
              onChange={changeHandler}
              name="cvc"
              value={formValues.cvc}
              maxLength="3"
              className={`${warning.cvcOutline ? `${Styles.red}` : " "}`}
            />
            <div className={Styles.inputWarning}>{warning.cvc}</div>
          </div>
        </div>

        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default Form;
