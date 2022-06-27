import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Shoppingcart from "./pages/Shoppingcart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/shoppingcart" element={<Shoppingcart />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
