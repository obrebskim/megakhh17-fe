import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
