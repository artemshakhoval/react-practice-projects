import React, { useState } from "react";
import styles from "./userForm.module.css";

const UserForm = (props) => {
  const { onSaveUserData } = props;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const getUserNameHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setName(e.target.value);
  };

  const getUserAgeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      id: Math.floor(Math.random() * 100),
      userName: name,
      userAge: age,
    };

    if (name.trim().length === 0 || age.trim().length === 0) {
      setIsValid(false);
      return;
    }

    onSaveUserData(userData);

    setName("");
    setAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.input}>
        <label htmlFor="name" style={{ color: !isValid ? "red" : "black" }}>
          Username
        </label>
        <input
          id="name"
          value={name}
          onChange={getUserNameHandler}
          style={{
            background: !isValid ? "salmon" : "transparent",
            borderColor: !isValid ? "red" : "#ccc",
          }}
        />
        <label htmlFor="age" style={{ color: !isValid ? "red" : "black" }}>
          Age(Years)
        </label>
        <input
          id="age"
          value={age}
          type="number"
          onChange={getUserAgeHandler}
          style={{
            background: !isValid ? "salmon" : "transparent",
            borderColor: !isValid ? "red" : "#ccc",
          }}
        />
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default UserForm;
