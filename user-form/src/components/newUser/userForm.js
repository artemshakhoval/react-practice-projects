import React from "react";
import styles from "./userForm.module.css";

const UserForm = () => {
  return (
    <form>
      <div className={styles.input}>
        <label htmlFor="name">Username</label>
        <input id="name" />
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" />
      </div>
    </form>
  );
};

export default UserForm;
