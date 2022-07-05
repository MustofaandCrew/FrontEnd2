import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../src/pages/Register";
import Wishlist from "../src/pages/Wishlist";
import Shoppingcart from "../src/pages/Shoppingcart";
import Details from "../src/pages/ProductDetails";
import Catalog from "../src/pages/Catalog";
import Login from "../src/pages/Login";
import Home from "../src/pages/Home";
import TransaksiBuyer from "./pages/TransaksiBuyer";
import AccountBuyer from "./pages/AccountBuyer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/productdetails" element={<Details />} />
          <Route path="/shoppingcart" element={<Shoppingcart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/register" element={<Register />} />

          {/* Buyer */}
          <Route path="/transaksibuyer" element={<TransaksiBuyer />} />
          <Route path="/accountbuyer" element={<AccountBuyer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
