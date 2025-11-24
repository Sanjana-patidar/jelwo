import { useState,createContext,useContext } from "react";
// create context
const CartContext = createContext();
// provider function
 export const CartProvider = (({children}) =>{
 const [cart, setCart] = useState([]);
 const [showCart, setShowCart] = useState(false);
    //add to cart
    const addToCart = (product) => {
    const exists = cart.find((item) => item._id === product._id);
    if (exists) {
      alert("Item already in cart!");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

// 👉 Increase quantity
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item._id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // 👉 Decrease quantity (but not below 1)
  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item._id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };
    // remove item
    const removeFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };
  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
// Open/close offcanvas
  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);

  return (
    <CartContext.Provider
      value={{
        totalQty,
        increaseQty,
        decreaseQty,
        cart,
        addToCart,
        removeFromCart,
        showCart,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
})
 // Custom hook for easy access
export const useCart = () => useContext(CartContext);