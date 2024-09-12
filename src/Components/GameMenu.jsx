import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GameMenu = () => {
  const [selectNumber] = useState([1, 2, 3, 4, 5, 6]); // No need to change array, so it's static
  const [diceNumber, setDiceNumber] = useState(-1);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [highestScore, setHighestScore] = useState(100);
  const [isNumberSelected, setIsNumberSelected] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const images = [
    "../../public/images/dice/dice_1.png",
    "../../public/images/dice/dice_2.png",
    "../../public/images/dice/dice_3.png",
    "../../public/images/dice/dice_4.png",
    "../../public/images/dice/dice_5.png",
    "../../public/images/dice/dice_6.png",
  ];

  // Update score when diceNumber changes, and only diceNumber
  useEffect(() => {
    if (diceNumber !== -1) {
      setCurrentScore((prevScore) => {
        return diceNumber === selectedNumber ? prevScore + 10 : prevScore - 2;
      });
    }
  }, [diceNumber]); // Re-run this effect only when diceNumber changes

  const randomNumber = () => {
    let random = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(random);
  };

  console.log(
    `Selected number is ${selectedNumber}, dice number is ${diceNumber}, and score is ${highestScore}`
  );

  const handleDiceClick = () => {
    if (isNumberSelected) {
      randomNumber();
    } else {
      alert("Please select a number");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col p-4 items-center">
      <div className="w-full h-[8rem] mb-2 flex justify-between p-2">
        <div className="flex flex-row gap-20 ">
        <div className="highestScore flex flex-col items-center">
          <h1 className="text-8xl font-bold">{highestScore}</h1>
          <h3 className="font-semibold">Highest Score</h3>
        </div>
        <div className="CurrentScore flex flex-col items-center">
          <h1 className="text-8xl font-bold">{currentScore}</h1>
          <h3 className="font-semibold">Current Score</h3>
        </div>
        </div>
       
        <div className="selectNumber flex flex-col items-end py-2 px-4">
          <div className="buttons flex gap-2 ">
            {selectNumber.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedNumber(item);
                    setIsNumberSelected(true);
                  }}
                  className={`px-5 py-3 font-bold border-2 rounded-md ${
                    selectedNumber === item
                      ? "bg-zinc-900 text-white border-gray-500"
                      : "bg-white text-black border-zinc-900 hover:bg-zinc-900 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <p className="font-bold text-[1rem] mt-2">
            {selectedNumber === 0
              ? "Please Select a Number"
              : "Number Selected"}
          </p>
        </div>
      </div>
      <h1 className="text-3xl w-full h-[5rem] flex items-center justify-center font-bold">{currentScore>highestScore ? "Congrotulations, you make a new highest score" : null }</h1>
      <div className="w-[24rem] h-[29rem] flex flex-col p-2">
        <div
          className="img w-full h-[50%] flex items-center justify-center"
          onClick={handleDiceClick}
        >
          <img
            className="object-cover"
            src={diceNumber === -1 ? images[0] : images[diceNumber - 1]}
            alt="dice"
            style={{ width: "180px", height: "180px" }} // Fixed size for the dice image
          />
        </div>
        <div className="p-2 ">
          <h1 className="text-center text-2xl font-semibold mt-2 mb-2">
            Click on Dice to roll
          </h1>
        </div>
        <button className="w-full border-2 rounded-md border-zinc-800 py-2 mb-3 hover:bg-zinc-900 hover:text-white hover:border-grey">
          Reset Score
        </button>
        <button className="w-full border-2 rounded-md border-zinc-800 py-2 hover:bg-zinc-900 hover:text-white hover:border-grey">
          <Link to="/">Log out</Link>
        </button>
      </div>
    </div>
  );
};

export default GameMenu;
