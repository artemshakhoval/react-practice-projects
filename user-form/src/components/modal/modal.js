import React from "react";
import Button from "../UI/button/button";
import Card from "../UI/card/card";

const Modal = ({ hideModal, tittle, message }) => {
  return (
    <>
      <Card>
        <h5>{tittle}</h5>
        <p>{message}</p>
        <Button onClick={hideModal}>Okay</Button>
      </Card>
    </>
  );
};

export default Modal;
