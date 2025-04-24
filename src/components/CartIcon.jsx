import { Link } from "react-router-dom";

const CartIcon = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <Link to="/cart" className="cart-icon">
      🛒 Cart ({cart.length})
    </Link>
  );
};

export default CartIcon;
