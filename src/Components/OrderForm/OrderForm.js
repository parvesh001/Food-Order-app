import React, { useState } from "react";
import classes from "./OrderForm.module.css";
import Button from "../../UI/Buttons/Button";
import useInput from "../../Hooks/use-input";
import useFetch from "../../Hooks/use-fetch";
import Model from "../../UI/Model/Model";
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function OrderForm(props) {
  const [userData, setUserData] = useState({});
  const { isLoading, formSubmitted, backendIntraction: postUser } = useFetch();
  const {
    inputValue: firstNameValue,
    inputIsValid: firstNameIsValid,
    inputIsInvalid: firstNameIsInvalid,
    inputChangeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    inputValue: lastNameValue,
    inputIsValid: lastNameIsValid,
    inputIsInvalid: lastNameIsInvalid,
    inputChangeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    inputValue: emailValue,
    inputIsValid: emailIsValid,
    inputIsInvalid: emailIsInvalid,
    inputChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;
    setUserData({
      firsName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
    });
    postUser({
      url: "https://food-order-9ea7b-default-rtdb.firebaseio.com/usersdata.json",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: userData,
    });
    firstNameReset();
    lastNameReset();
    emailReset();
    setTimeout(() => {
      props.onFormReset();
    }, 2500);
  };

  const firstNameClass = firstNameIsInvalid
    ? `${classes["form-control"]} ${classes["invalid"]}`
    : classes["form-control"];
  const lastNameClass = lastNameIsInvalid
    ? `${classes["form-control"]} ${classes["invalid"]}`
    : classes["form-control"];
  const emailClass = emailIsInvalid
    ? `${classes["form-control"]} ${classes["invalid"]}`
    : classes["form-control"];

  return (
    <Model>
      <form
        onSubmit={formSubmitHandler}
        className={classes["form-container"]}
        autoComplete="off"
      >
       {formSubmitted && <div className={classes['form-submitted']}>
        <p>Submitted <BsFillCheckCircleFill/></p>
        </div>}
        <div className={classes["name-field"]}>
          <div className={firstNameClass}>
            <label htmlFor="first-name">First Name</label>
            <input
              onChange={firstNameChangeHandler}
              value={firstNameValue}
              onBlur={firstNameBlurHandler}
              type="text"
              id="first-name"
              name="first-name"
            />
          </div>

          <div className={lastNameClass}>
            <label htmlFor="last-name">Last Name</label>
            <input
              onChange={lastNameChangeHandler}
              value={lastNameValue}
              onBlur={lastNameBlurHandler}
              type="text"
              id="last-name"
              name="last-name"
            />
          </div>
        </div>
        <div className={emailClass}>
          <label htmlFor="user-email">Enter Your EMail</label>
          <input
            onChange={emailChangeHandler}
            value={emailValue}
            onBlur={emailBlurHandler}
            type="email"
            id="user-email"
            name="user-email"
          />
        </div>
        <div className={classes.actions}>
          <Button
            disabled={!formIsValid}
            type="submit"
            className={classes["btn"]}
          >
            {isLoading ? "loading..." : "Submit"}
          </Button>
          <Button
            type="button"
            onClick={props.onFormReset}
            className={classes["btn"]}
          >
            Back
          </Button>
        </div>
      </form>
    </Model>
  );
}
