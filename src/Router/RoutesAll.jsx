import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "../Component/Product";
import Cart from "../Component/Cart";

export default function RoutesAll() {
  return (
    <div>
      <Routes>
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
