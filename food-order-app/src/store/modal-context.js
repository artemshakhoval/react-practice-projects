import React from "react";

const ModalContext = React.createContext({
  isShow: false,
  showModalHandler: () => {},
  hideModalHandler: () => {},
});

export default ModalContext;
