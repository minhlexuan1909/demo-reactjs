import React from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to="/product/1">Product 1</Link>
      <Link to="/product/2">Product 2</Link>
      <Link to="/product/3">Product 3</Link>
    </div>
  );
};

export default ProductPage;
