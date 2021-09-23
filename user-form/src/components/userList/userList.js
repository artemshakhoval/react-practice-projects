import React from "react";
import styles from "./userList.module.css";

const userList = (props) => {
  const { name, age, onDelete } = props;
  //console.log(name, age);

  return (
    <div>
      <p
        onDelete={onDelete}
        className={styles.content_data}
      >{`${name} (${age} years old)`}</p>
    </div>
  );
};

export default userList;
