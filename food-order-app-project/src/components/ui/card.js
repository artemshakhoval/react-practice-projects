import React from "react";

import classes from "./card.module.css";
const Card = (props) => {
  return (
    <section className={`${classes.card} ${props.className}`}>
      {props.children}
    </section>
  );
};

export default Card;