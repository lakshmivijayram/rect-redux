import React from "react";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Wishlist from "./components/Wishlist";

function App() {
  return (
    <>
      <h2>Shoping Cart</h2>
      <div className="container">
        <Products />
        <Wishlist />
        <Cart />
      </div>
    </>
  );
}

export default App;
