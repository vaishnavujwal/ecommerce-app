import { useState } from "react";
import products from "../data/products";
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import ProductGallery from "../pages/ProductGallery";
import { FaStar } from "react-icons/fa";

import "./Shop.css";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = (count) => {
    return [...Array(count)].map((_, i) => <FaStar key={i} className="star" />);
  };

  return (
    <div className="shop-page">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="🔍 Search for products e.g. Shoes, T-Shirt..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ProductGallery />
      <h1>Suggested For You</h1>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />

              
              <div className="star-rating">
                {renderStars(product.rating || 0)}
              </div>

              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <Link to={`/product/${product.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))
        ) : (
          <p className="no-results">No products found for "{searchTerm}"</p>
        )}
      </div>

      <h1> Big Sales Are Comming...🎅</h1>
      <ImageSlider />
    </div>
  );
};

export default Shop;
