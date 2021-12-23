import React from "react";

const cartItemsContext = React.createContext({
  items: [],
  addToCart: (itmes) => {},
  removeToCart: (itemsId) => {},
});

export default cartItemsContext
