import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Details from "./pages/ProductDetails"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    </div>
  );
}

export default App;
