export const getCart = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  };
  
  export const addToCart = (product) => {
    const cart = getCart();
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  
  export const removeFromCart = (id) => {
    const cart = getCart().filter((p) => p.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  