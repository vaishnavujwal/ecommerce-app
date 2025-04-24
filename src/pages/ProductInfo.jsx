import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { addToCart } from "../utils/cart";
import "./ProductInfo.css";

const ProductInfo = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="product-info">
      <div className="info-text">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>
        <p>{product.description}</p>
        <div className="btn-group">
          <Link to="/shop" className="back-arrow" title="Back to Shop">
            ←
          </Link>
          <button
            onClick={() => {
              addToCart(product);
              alert("Product added to cart!");
            }}
            className="add-to-cart-btn"
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
      <img src={product.image} alt={product.name} />
    </div>
  );
};

export default ProductInfo;
