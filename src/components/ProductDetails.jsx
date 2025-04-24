import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import products from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-details-wrapper">
      <div className="product-details-content">
        <div className="product-text">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h3>₹{product.price}</h3>
          <button>Add to Cart 🛒</button>
        </div>
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
