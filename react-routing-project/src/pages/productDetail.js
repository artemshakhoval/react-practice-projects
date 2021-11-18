import React from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const params = useParams();
  return (
    <>
      <h2>Product Detail</h2>
      <p>{params.productId}</p>
    </>
  );
};

export default ProductDetail;
