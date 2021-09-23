import React, { useState } from "react";
import UserForm from "./userForm/userForm";
import UserList from "./userList/userList";
import styles from "./user.module.css";

const Index = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const addUserData = (data) => {
    setData((prev) => {
      return [data, ...prev];
    });
  };

  const deleteUserHandler = (userId) => {
    setData((prev) => {
      const updatedUser = prev.filter((user) => user.id !== userId);
      return updatedUser;
    });
  };

  return (
    <>
      <UserForm onSaveUserData={addUserData} />
      {data && data.length ? (
        <div className={styles.content}>
          {data.map((el) => {
            return (
              <UserList
                onDelete={deleteUserHandler}
                key={el.id}
                name={el.userName}
                age={el.userAge}
              />
            );
          })}
        </div>
      ) : (
        <div className={styles.empty}>Users not found.</div>
      )}
    </>
  );
};

export default Index;
