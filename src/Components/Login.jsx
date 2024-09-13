import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Adjust path as needed

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login, signUp } = useAuth(); // Destructure authentication methods
  const navigate = useNavigate();
  

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      if (isSignUp) {
        // Handle sign-up
        await signUp(email, password);
        navigate('/login')
        setLoading(false)
        alert("user created successfully! please login");
        
      } else {
        // Handle login
        await login(email, password);
        navigate('/GameMenu');
      }
       // Navigate after successful authentication
    } catch (error) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {isSignUp ? (
        <div className="card flex flex-col justify-center items-center gap-2 border-2 border-zinc-500">
          <h1 className="text-[2rem]">Sign Up</h1>
          <input
            className="py-3 px-2 rounded-md border-2 border-zinc-500"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            className="py-3 px-2 rounded-md border-2 border-zinc-500"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            onClick={handleSubmit}
            className="bg-white font-semibold px-2 py-1 rounded-md hover:bg-zinc-800 hover:text-white"
          >
            Sign Up
          </button>
          <div className="flex flex-row gap-1">
            <p className="opacity-80">Already a user?</p>
            <span
              className="hover:scale-105 cursor-pointer"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              Login.
            </span>
          </div>
        </div>
      ) : (
        <div className="card flex flex-col justify-center items-center gap-2 border-2 border-zinc-500">
          <h1 className="text-[2rem]">Login</h1>
          <input
            className="py-3 px-2 rounded-md border-2 border-zinc-500"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            className="py-3 px-2 rounded-md border-2 border-zinc-500"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            onClick={handleSubmit}
            className="bg-white font-semibold px-2 py-1 rounded-md hover:bg-zinc-800 hover:text-white"
          >
            Login
          </button>
          <div className="flex flex-row gap-1">
            <p className="opacity-80">New user?</p>
            <span
              className="hover:scale-105 cursor-pointer"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              Sign up now.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
