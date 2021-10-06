import React, { useState, useReducer, useEffect } from "react";
import Button from "../UI/button/button";
import Card from "../UI/card/card";
import classes from "./login.module.css";

const reduceEmail = (state, action) => {
  switch (action.type) {
    case "EMAIL_VALUE":
      return { value: action.val, isValid: action.val.includes("@") };
    case "EMAIL_BLUR":
      return { value: state.value, isValid: state.value.includes("@") };
    default:
      return state;
  }
};

const reducePassword = (state, action) => {
  switch (action.type) {
    case "PASSWORD_VALUE":
      return { value: action.val, isValid: action.val.trim().length > 4 };
    case "PASSWORD_BLUR":
      return { value: state.value, isValid: state.value.trim().length > 4 };
    default:
      return state;
  }
};

const Login = ({ loginHandler }) => {
  const [formIsValid, setFormIsValid] = useState();
  const [emailState, dispatchEmail] = useReducer(reduceEmail, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(reducePassword, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState; /// aliases asignment on left side with destructuring obj
  const { isValid: passwordIsValid } = passwordState; /// aliases asignment on left side with destructuring obj

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      console.log("Clean Up");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (e) => {
    dispatchEmail({ type: "EMAIL_VALUE", val: e.target.value });

    // setFormIsValid(e.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (e) => {
    dispatchPassword({ type: "PASSWORD_VALUE", val: e.target.value });

    // setFormIsValid(e.target.value.trim().length > 4 && emailState.isValid);
  };

  const validEmailHandler = () => {
    dispatchEmail({ type: "EMAIL_BLUR" });
  };

  const validPasswordHandler = () => {
    dispatchPassword({ type: "PASSWORD_BLUR" });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    loginHandler(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false && classes.invalid
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false && classes.invalid
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validPasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
