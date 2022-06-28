import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "../src/pages/ProductDetails";
import Catalog from "../src/pages/Catalog";
import Login from "../src/pages/Login";
import Home from "../src/pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/productdetails" element={<Details />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
