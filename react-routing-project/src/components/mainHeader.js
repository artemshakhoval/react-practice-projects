import React from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <ul>
      <li>
        <a href="/welcome">Welcome</a>
      </li>
      <li>
        <a href="/products">Products</a>
      </li>
    </ul>
  );
};

export default MainHeader;
