import React from "react";

import Card from "../UI/card/card";
import classes from "./home.module.css";

const Home = () => {
  return (
    <>
      <Card className={classes.home}>
        <h1>Welcome Back</h1>
      </Card>
    </>
  );
};

export default Home;
