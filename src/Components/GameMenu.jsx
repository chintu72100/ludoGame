import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAuth } from '../AuthContext'; // Adjust path as needed

const GameMenu = () => {
  const { user } = useAuth(); // Access user from Auth context
  const [selectNumber] = useState([1, 2, 3, 4, 5, 6]); // Static array
  const [diceNumber, setDiceNumber] = useState(-1);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [highestScore, setHighestScore] = useState(0); // Initialize with default value
  const [isNumberSelected, setIsNumberSelected] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);

  const images = [
    "/images/dice/dice_1.png",
    "/images/dice/dice_2.png",
    "/images/dice/dice_3.png",
    "/images/dice/dice_4.png",
    "/images/dice/dice_5.png",
    "/images/dice/dice_6.png",
  ];

  // Retrieve highestScore and email from local storage when the component mounts
  useEffect(() => {
    const storedHighScore = localStorage.getItem('highestScore');
    const storedEmail = localStorage.getItem('userEmail');
    if (storedHighScore) {
      setHighestScore(parseInt(storedHighScore, 10));
    }
    // Optionally use storedEmail here if needed
  }, []);

  // Initialize highestScore with user highscore when user changes
  useEffect(() => {
    if (user?.highscore !== undefined) {
      setHighestScore(user.highscore);
      if (user.email) {
        localStorage.setItem('userEmail', user.email);
      }
    }
  }, [user]);

  // Update local storage whenever highestScore changes
  useEffect(() => {
    if (highestScore > 0) {
      localStorage.setItem('highestScore', highestScore);
    }
  }, [highestScore]);

  // Update currentScore when diceNumber changes
  useEffect(() => {
    if (diceNumber !== -1) {
      setCurrentScore((prevScore) => 
        diceNumber === selectedNumber ? prevScore + 10 : prevScore - 2
      );
    }
  }, [diceNumber, selectedNumber]);

  // Update highestScore when currentScore changes
  useEffect(() => {
    if (currentScore > highestScore) {
      setHighestScore(currentScore);
    }
  }, [currentScore]);

  // Send highestScore to the API whenever it changes
  useEffect(() => {
    const saveScore = async () => {
      const endpoint = 'http://localhost:3000/saveScore';
      const email = user?.email || localStorage.getItem('userEmail'); // Use stored email if user email is not available
      if (email) { // Ensure user is logged in and email is available
        try {
          const response = await axios.post(endpoint, { email, highScore: highestScore });
          console.log('Score saved:', response);
        } catch (error) {
          console.error('Error saving score:', error);
          alert(error.response?.data?.message || "An error occurred");
        }
      } else {
        console.error('User email is not available');
      }
    };

    if (highestScore > 0) { // Ensure to send only if highestScore is positive
      saveScore();
    }
  }, [highestScore, user]);

  // Function to roll the dice
  const randomNumber = () => {
    const random = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(random);
  };

  // Function to handle dice click
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
        <div className="flex flex-row gap-20">
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
          <div className="buttons flex gap-2">
            {selectNumber.map((item) => (
              <button
                key={item}
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
            ))}
          </div>
          <p className="font-bold text-[1rem] mt-2">
            {selectedNumber === 0
              ? "Please Select a Number"
              : "Number Selected"}
          </p>
        </div>
      </div>
      <h1 className="text-3xl w-full h-[5rem] flex items-center justify-center font-bold">
        {currentScore > highestScore ? "Congratulations, you made a new highest score!" : null}
      </h1>
      <div className="w-[24rem] h-[29rem] flex flex-col p-2">
        <div
          className="img w-full h-[50%] flex items-center justify-center"
          onClick={handleDiceClick}
        >
          <img
            className="object-cover"
            src={diceNumber === -1 ? images[0] : images[diceNumber - 1]}
            alt="dice"
            style={{ width: "180px", height: "180px" }}
          />
        </div>
        <div className="p-2">
          <h1 className="text-center text-2xl font-semibold mt-2 mb-2">
            Click on Dice to roll
          </h1>
        </div>
        <button 
          onClick={() => setCurrentScore(0)} 
          className="w-full border-2 rounded-md border-zinc-800 py-2 mb-3 hover:bg-zinc-900 hover:text-white hover:border-grey"
        >
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
