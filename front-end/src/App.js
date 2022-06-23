import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/wishlist" element={<Wishlist/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
