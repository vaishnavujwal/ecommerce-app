import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="product-card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="product-img" />
        <h3>{product.name}</h3>
        <p>₹{product.price}</p>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
