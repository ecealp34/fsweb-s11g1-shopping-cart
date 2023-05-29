import { createContext } from "react";
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("shoppingCart", []);

  const addItem = (item) => {
    setCart([...cart, item]);
    console.log("item sepete eklendi.", item, cart);
  };

  const removeItem = (id) => {
    const yeniKart = [...cart];
    const indexToRemove = yeniKart.findIndex((item) => item.id === id);
    console.log(
      "removeItemPre",
      "id",
      id,
      "indexToRemove",
      indexToRemove,
      yeniKart
    );
    yeniKart.splice(indexToRemove, 1);
    setCart(yeniKart);
    console.log(
      "removeItemPost",
      "id",
      id,
      "indexToRemove",
      indexToRemove,
      yeniKart
    );
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartContext = createContext();
export default CartContextProvider;
