import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignUp, setIsSignUP] = useState(true);
  
  console.log(isSignUp);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {isSignUp ? (
        <div className="card flex flex-col justify-center items-center gap-2 border-2  border-zinc-500">
          <h1 className="text-[2rem]">Login</h1>
          <input
            className="py-3 px-2 rounded-md border-2 border-zinc-500"
            type="text"
            placeholder="email"
          />
          <input
            className="py-3 px-2 rounded-md border-2 border-zinc-500"
            type="text"
            placeholder="password"
          />
          <button className="bg-white font-semibold px-2 py-1 rounded-md hover:bg-zinc-800 hover:text-white">
            <Link to="/gameMenu">Login</Link>
          </button>
          <div className="flex flex-row gap-1">
            <p className="opacity-80">New user ? </p>{" "}
            <span
              className="hover:scale-105"
              onClick={() => setIsSignUP(!isSignUp)}
            >
              Sign up now.
            </span>
          </div>
        </div>
      ) : (
        <div className="card flex flex-col justify-center items-center gap-2 border-2  border-zinc-500">
          <h1 className="text-[2rem]">Sign Up</h1>
          <input
            className="py-3 px-2 rounded-md border-2 border-zinc-500"
            type="text"
            placeholder="enter your email"
          />
          <input
            className="py-3 px-2 rounded-md border-2 border-zinc-500"
            type="text"
            placeholder="password"
          />
          <button className="bg-white font-semibold px-2 py-1 rounded-md hover:bg-zinc-800 hover:text-white">
            Sign Up
          </button>
          <div className="flex flex-row gap-1">
            <p className="opacity-80">Already a user </p>{" "}
            <span
              className="hover:scale-105"
              onClick={() => setIsSignUP(!isSignUp)}
            >
              Login.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
