import React from "react";
import styles from "./userList.module.css";

const userList = (props) => {
  const { name, age, deleteHandler } = props;
  //console.log(name, age);

  return (
    <p className={styles.content_data}>
      {/* onDelete={deleteHandler} */}
      {`${name} (${age} years old)`}
    </p>
  );
};

export default userList;
