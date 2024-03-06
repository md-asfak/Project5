import React, { createContext, useReducer, useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

export const cartContext = createContext();
export const cartItemContext = createContext();

export default function Product() {
  const [cart, setCart] = useState([]);
  function addtoCart(item) {
    window.open("./cart");
    setCart([...cart, item]);
    dispatch("Increment");
  }
  function removeCart(index) {
    const del = [...cart];
    del.splice(index, 1);
    setCart(del);
    dispatch("Decrement");
  }
  const init = 0;
  function reduce(current, action) {
    switch (action) {
      case "Increment":
        return current + 1;
      case "Decrement":
        return current - 1;
      default:
        return current;
    }
  }
  const [state, dispatch] = useReducer(reduce, init);
  console.log(cart);
  return (
    <div>
      <cartContext.Provider value={{ cart, addtoCart, state, removeCart }}>
        <ProductList />
        <Cart />
      </cartContext.Provider>
    </div>
  );
}
