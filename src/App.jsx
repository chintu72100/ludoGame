import React from "react";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import GameMenu from "./Components/GameMenu";
import Login from "./Components/Login";
const App = () => {
  return (
    <div className="w-full h-screen ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/GameMenu" element={<GameMenu />} />
        
      </Routes>
    </div>
  );
};

export default App;
