import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Login,
  Catalog,
  Details,
  ShoppingCart,
  Wishlist,
  Register,
  NotificationVertical,
  TransaksiBuyer,
} from "./pages";

// import PropagateLoader from "react-spinners/PropagateLoader";

const override = {
  display: "flex",
  margin: "0 auto",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
};

function App() {
  return (
    <div className="App">
      {/* {loading ? (
        <PropagateLoader
          cssOverride={override}
          size={50}
          color={"#FF7158"}
          loading={loading}
        />
      ) : ( */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/productdetails" element={<Details />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/register" element={<Register />} />
          <Route path="/notification" element={<NotificationVertical />} />
          <Route path="/transaksibuyer" element={<TransaksiBuyer />} />
        </Routes>
      </BrowserRouter>
      {/* )} */}
    </div>
  );
}

export default App;
