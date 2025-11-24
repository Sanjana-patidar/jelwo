import React, { createContext, useState } from "react";
export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Add/remove product from wishlist
  const toggleWishlist = (luxurie) => {
    const exists = wishlist.find((item) => item._id === luxurie._id);
    if (exists) {
      setWishlist(wishlist.filter((item) => item._id !== luxurie._id));
    } else {
      setWishlist([...wishlist, luxurie]);
    }
  };

  // total wishlist count
  const wishlistCount = wishlist.length;

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, wishlistCount }}>
      {children}
    </WishlistContext.Provider>
  );
};

