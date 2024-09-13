import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import GameMenu from "./Components/GameMenu";
import Login from "./Components/Login";
import { AuthProvider } from "./AuthContext"; // Make sure the path is correct

const App = () => {
  return (
    <div className="w-full h-screen">
      <AuthProvider> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/GameMenu" element={<GameMenu />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
