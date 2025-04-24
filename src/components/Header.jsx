import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";


function Header() {
  return (
    <header className="header">
      <motion.div
        className="logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link to="/">🤑ShopMart</Link>
      </motion.div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">
          <FaUserAlt />
        </Link>
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
