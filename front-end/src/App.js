import React, { useState, useEffect } from "react";
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
} from "./pages";

import PropagateLoader from "react-spinners/PropagateLoader";
import DashboardBuyer from "./pages/DashboardBuyer";

const override = {
  display: "flex",
  margin: "0 auto",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
};

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <PropagateLoader
          cssOverride={override}
          size={50}
          color={"#FF7158"}
          loading={loading}
        />
      ) : (
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

            <Route path="/dashboardbuyer" element={<DashboardBuyer />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
