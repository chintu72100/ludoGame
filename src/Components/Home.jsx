import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-row justify-center  items-center gap-2 px-4 ">
      <div className=" w-[70%] h-[522px] flex     ">
        <div className="diceLogo  w-[60%] overflow-hidden">
          <img
            src="../public/images/dices.png"
            alt="diceimg"
            className=" object-cover "
          />
        </div>
        <div className="diceText  w-[40%]  flex flex-col justify-center items-end p-2">
          <h1 className="text-6xl font-bold ">DICE GAME</h1>
          <button className="bg-white text-black border-2 border-zinc-700  rounded-md px-6 py-1 mt-1  hover:bg-zinc-900 hover:text-white">
            <Link to="/login">Login</Link>
          </button>
          
        </div>
      </div>
      <div className="leaderboard  w-[30%] h-[560px]  flex flex-col gap-10 justify-center  font-semibold bg-zinc-900 text-white rounded-md px-2 border-2 border-zinc-500 ">
        <h1 className="h-[5%] text-5xl text-center p-2">LEADERBOARD</h1>
        <div className="w-full h-[90%]  ">
          <div className="text-2xl flex flex-row justify-between py-2 px-5 w-full h-[2.5rem] rounded-md   mb-2">
            <p className=" w-10 h-10  flex items-center justify-center rounded-full  bg-zinc-700">
              1
            </p>
            <div className="w-[80%] flex flex-row justify-between">
              <p>PLAYER NAME</p>
              <p>120</p>
            </div>
          </div>
          <div className="text-2xl flex flex-row justify-between py-2 px-5 w-full h-[2.5rem] rounded-md   mb-2">
            <p className=" w-10 h-10  flex items-center justify-center rounded-full  bg-zinc-700">
              2
            </p>
            <div className="w-[80%] flex flex-row justify-between">
              <p>PLAYER NAME</p>
              <p>120</p>
            </div>
          </div>
          <div className="text-2xl flex flex-row justify-between py-2 px-5 w-full h-[2.5rem] rounded-md   mb-2">
            <p className="w-10 h-10  flex items-center justify-center rounded-full  bg-zinc-700">
              3
            </p>
            <div className="w-[80%] flex flex-row justify-between">
              <p>PLAYER NAME</p>
              <p>120</p>
            </div>
          </div>
          <div className="text-2xl flex flex-row justify-between py-2 px-5 w-full h-[2.5rem] rounded-md   mb-2">
            <p className="w-10 h-10  flex items-center justify-center rounded-full  bg-zinc-700">
              4
            </p>
            <div className="w-[80%] flex flex-row justify-between">
              <p>PLAYER NAME</p>
              <p>120</p>
            </div>
          </div>
          <div className="text-2xl flex flex-row justify-between py-2 px-5 w-full h-[2.5rem] rounded-md   mb-2">
            <p className="w-10 h-10  flex items-center justify-center rounded-full  bg-zinc-700">
              5
            </p>
            <div className="w-[80%] flex flex-row justify-between">
              <p>PLAYER NAME</p>
              <p>120</p>
            </div>
          </div>
          <div className="text-2xl flex flex-row justify-between py-2 px-5 w-full h-[2.5rem] rounded-md   mb-2">
            <p className="w-10 h-10  flex items-center justify-center rounded-full  bg-zinc-700">
              6
            </p>
            <div className="w-[80%] flex flex-row justify-between">
              <p>PLAYER NAME</p>
              <p>120</p>
            </div>
          </div>
          <div className="text-2xl flex flex-row justify-between py-2 px-5 w-full h-[2.5rem] rounded-md   mb-2">
            <p className="w-10 h-10  flex items-center justify-center rounded-full  bg-zinc-700">
              7
            </p>
            <div className="w-[80%] flex flex-row justify-between">
              <p>PLAYER NAME</p>
              <p>120</p>
            </div>
          </div>
          <div className="text-2xl flex flex-row justify-between py-2 px-5 w-full h-[2.5rem] rounded-md   mb-2">
            <p className="w-10 h-10  flex items-center justify-center rounded-full  bg-zinc-700">
              8
            </p>
            <div className="w-[80%] flex flex-row justify-between">
              <p>PLAYER NAME</p>
              <p>120</p>
            </div>
          </div>
          <div className="text-2xl flex flex-row justify-between py-2 px-5 w-full h-[2.5rem] rounded-md   mb-2">
            <p className="w-10 h-10  flex items-center justify-center rounded-full  bg-zinc-700">
              9
            </p>
            <div className="w-[80%] flex flex-row justify-between">
              <p>PLAYER NAME</p>
              <p>120</p>
            </div>
          </div>
          <div className="text-2xl flex flex-row justify-between py-2 px-5 w-full h-[2.5rem] rounded-md   mb-2">
            <p className="w-10 h-10 flex items-center justify-center rounded-full  bg-zinc-700">
              10
            </p>
            <div className="w-[80%] flex flex-row justify-between">
              <p>PLAYER NAME</p>
              <p>120</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
