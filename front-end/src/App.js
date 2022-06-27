import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Sidebar from "./components/Sidebuyer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
