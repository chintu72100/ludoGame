// AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    try {
      const response = await axios.post('https://ludobackend-production.up.railway.app//login', { email, password });      
      setUser({email:response.data.data.email,highscore:response.data.data.highScore});
    } catch (error) {
      throw new Error(error.response ? error.response.data.message : 'Login failed');
    }
  };

  const signUp = async (email, password) => {
    try {
      const response = await axios.post('https://ludobackend-production.up.railway.app//create-user', { email, password })
    } catch (error) {      
      console.log(error);
      
      throw new Error(error.response ? error.response.data.message : 'Sign-up failed');
    }
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    // Optionally, check if user is already logged in
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, signUp, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
