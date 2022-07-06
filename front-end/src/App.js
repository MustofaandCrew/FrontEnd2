import React, {useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../src/pages/Register";
import Wishlist from "../src/pages/Wishlist";
import Shoppingcart from "../src/pages/Shoppingcart";
import Details from "../src/pages/ProductDetails";
import Catalog from "../src/pages/Catalog";
import Login from "../src/pages/Login";
import Home from "../src/pages/Home";

import PropagateLoader from "react-spinners/PropagateLoader";


const override = {
  display: "flex",
  margin: "0 auto",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh"
};

function App() {
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])
  return (
    <div className="App">
          {loading ? (

              <PropagateLoader cssOverride={override} size={50} color={"#FF7158"} loading={loading} />
          ) : (

      <BrowserRouter>
       <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/productdetails" element={<Details />} />
        <Route path="/shoppingcart" element={<Shoppingcart />} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/register" element={<Register />} />

        {/* Buyer */}

        {/* Seller */}
       </Routes>
      </BrowserRouter>
        )}
    </div>
  );
}

export default App;
