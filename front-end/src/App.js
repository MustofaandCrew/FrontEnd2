import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./pages/Catalog";

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
