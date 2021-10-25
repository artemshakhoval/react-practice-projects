import React from "react";
import ReactDOM from "react-dom";
import classes from "./modal.module.css";

const BackDrop = () => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div>{children}</div>
    </div>
  );
};

const Modal = ({ children }) => {
  const modalElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, modalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        modalElement
      )}
    </>
  );
};

export default Modal;
