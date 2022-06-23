import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Catalog from "./pages/Catalog";
=======
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
>>>>>>> 7470ccbeedbbeaae1170d810e4417146043ae404

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/catalog" element={<Catalog />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
