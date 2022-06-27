import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/pages/Login";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Sidebar from "./components/Sidebuyer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login />} /> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
