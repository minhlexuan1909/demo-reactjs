import React from "react";
import { useParams } from "react-router";

const ProductDetailPage = () => {
  const { id } = useParams();
  return <div>Đây là Product ID: {id}</div>;
};

export default ProductDetailPage;
