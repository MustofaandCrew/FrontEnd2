import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
