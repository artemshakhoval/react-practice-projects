import React from "react";
import ReactDOM from "react-dom";
import Button from "../UI/button/button";
import Card from "../UI/card/card";

const MyModal = (props) => {
  return (
    <Card>
      <h5>{props.tittle}</h5>
      <p>{props.message}</p>
      <Button onClick={props.hideModal}>Okay</Button>
    </Card>
  );
};

const Modal = ({ hideModal, tittle, message }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <MyModal hideModal={hideModal} tittle={tittle} message={message} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
