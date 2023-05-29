import React, { useState } from "react";
import { Route } from "react-router-dom";

import ProductContextProvider from "./contexts/ProductContext";
import CartContextProvider from "./contexts/CartContext";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";


function App() {
  return (
    <CartContextProvider>
    <ProductContextProvider>
    <div className="App">
      <Navigation />

      {/* Routelar */}
      <main className="content">
        <Route exact path="/">
          <Products />
        </Route>

        <Route path="/cart">
          <ShoppingCart />
        </Route>
      </main>
    </div>
    </ProductContextProvider>
    </CartContextProvider>
  );
}

export default App;
