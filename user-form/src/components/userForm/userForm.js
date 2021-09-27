import React, { useRef, useState } from "react";
import Modal from "../modal/modal";
import Button from "../UI/button/button";
import Card from "../UI/card/card";
import styles from "./userForm.module.css";

const UserForm = ({ onSaveUserData }) => {
  const userNameInputRef = useRef();
  const userAgeInputRef = useRef();

  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isError, setIsError] = useState(false);

  // const getUserNameHandler = (e) => {
  //   setName(e.target.value);
  // };

  // const getUserAgeHandler = (e) => {
  //   setAge(e.target.value);
  // };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = userNameInputRef.current.value;
    const enteredAge = userAgeInputRef.current.value;
    // if (name.trim().length > 0 && age.trim() > 0) { ------ listen input with state
    //   setIsValid(true);
    // }
    if (enteredName.trim().length > 0 && enteredAge.trim() > 0) {
      ///// -----  listen input with Ref
      setIsValid(true);
    }

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsValid(false);
      setIsError({
        title: "Invalid input",
        message: "Enter a valid name and age (non-empty field)",
      });
      return;
    }
    if (enteredAge <= 0) {
      setIsValid(false);
      setIsError({
        title: "Invalid age",
        message: "age has be greater then 0 ( > 0)",
      });
      return;
    }

    const userData = {
      id: Math.floor(Math.random() * 100),
      userName: enteredName,
      userAge: enteredAge,
    };
    onSaveUserData(userData);

    // setName("");
    // setAge("");
    userNameInputRef.current.value = "";
    userAgeInputRef.current.value = "";
  };

  const hideModal = () => {
    setIsError(null);
  };

  return (
    <>
      {isError && (
        <Modal
          hideModal={hideModal}
          title={isError.title}
          message={isError.message}
        />
      )}
      <Card>
        <form onSubmit={submitHandler}>
          <div className={styles.input}>
            <label htmlFor="name" style={{ color: !isValid ? "red" : "black" }}>
              Username
            </label>
            <input
              id="name"
              // value={name}
              // onChange={getUserNameHandler}
              style={{
                background: !isValid ? "salmon" : "transparent",
                borderColor: !isValid ? "red" : "#ccc",
              }}
              ref={userNameInputRef}
            />
            <label htmlFor="age" style={{ color: !isValid ? "red" : "black" }}>
              Age(Years)
            </label>
            <input
              id="age"
              // value={age}
              type="number"
              // onChange={getUserAgeHandler}
              style={{
                background: !isValid ? "salmon" : "transparent",
                borderColor: !isValid ? "red" : "#ccc",
              }}
              ref={userAgeInputRef}
            />
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default UserForm;
