import React, { useState } from "react";
import UserForm from "./userForm/userForm";
import UserList from "./userList/userList";
import styles from "./user.module.css";
import Card from "./UI/card/card";

const Index = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const addUserData = (data) => {
    setData((prev) => {
      return [data, ...prev];
    });
  };

  // const deleteUserHandler = (userId) => {
  //   setData((prev) => {
  //     const updatedUser = prev.filter((user) => user.id !== userId);
  //     return updatedUser;
  //   });
  // };

  return (
    <>
      <UserForm onSaveUserData={addUserData} />
      {data && data.length ? (
        <Card>
          {data.map((el) => {
            return (
              <UserList
                // deleteHandler={deleteUserHandler}
                key={el.id}
                name={el.userName}
                age={el.userAge}
              />
            );
          })}
        </Card>
      ) : (
        <div className={styles.empty}>Users not found.</div>
      )}
    </>
  );
};

export default Index;
