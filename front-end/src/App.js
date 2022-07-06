import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Register from "../src/pages/Register";
import Wishlist from "../src/pages/Wishlist";
import Shoppingcart from "../src/pages/Shoppingcart";
import Details from "../src/pages/ProductDetails";
import Catalog from "../src/pages/Catalog";
import Login from "../src/pages/Login";
import Home from "../src/pages/Home";
import TransaksiBuyer from "./pages/TransaksiBuyer";
import AccountBuyer from "./pages/AccountBuyer";
=======
import { Home, Login, Catalog, Details, 
        ShoppingCart, Wishlist, Register, NotificationVertical} from "./pages";

import PropagateLoader from "react-spinners/PropagateLoader";

const override = {
  display: "flex",
  margin: "0 auto",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh"
};
>>>>>>> a19fb5130d726f8dbd6132a0f8e02d215b6eeb20

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
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
=======
          {loading ? (

              <PropagateLoader cssOverride={override} size={50} color={"#FF7158"} loading={loading} />
          ) : (
      <BrowserRouter>
       <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/productdetails" element={<Details />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/notification" element={<NotificationVertical />} />
       </Routes>
      </BrowserRouter>
          )}
>>>>>>> a19fb5130d726f8dbd6132a0f8e02d215b6eeb20
    </div>
  );
}

export default App;
