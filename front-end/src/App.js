import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../src/components/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
