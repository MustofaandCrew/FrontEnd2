import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, Catalog, Details, ShoppingCart, Wishlist, Register, NotificationVertical, AccountBuyer, AccountSeller, DashboardBuyer, DashboardSeller, MyProduct } from "./pages";
import Protected from "./components/Protected";
import PropagateLoader from "react-spinners/PropagateLoader";

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
        <PropagateLoader cssOverride={override} size={50} color={"#FF7158"} loading={loading} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/productdetails" element={<Details />} />
            <Route
              path="/shoppingcart"
              element={
                <Protected>
                  <ShoppingCart />
                </Protected>
              }
            />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/notification"
              element={
                <Protected>
                  <NotificationVertical />
                </Protected>
              }
            />
            <Route
              path="/accountbuyer"
              element={
                <Protected>
                  <AccountBuyer />
                </Protected>
              }
            />
            <Route
              path="/accountseller"
              element={
                <Protected>
                  <AccountSeller />
                </Protected>
              }
            />
            <Route
              path="/dashboardbuyer"
              element={
                <Protected>
                  <DashboardBuyer />
                </Protected>
              }
            />
            <Route
              path="/dashboardseller"
              element={
                <Protected>
                  <DashboardSeller />
                </Protected>
              }
            />
            <Route
              path="/myproduct"
              element={
                <Protected>
                  <MyProduct />
                </Protected>
              }
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
