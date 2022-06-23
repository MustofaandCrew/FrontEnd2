import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD

=======
>>>>>>> e3b433db12cc9f74e56e600a601b7c4660bfabaf
import Wishlist from "./pages/Wishlist";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

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
