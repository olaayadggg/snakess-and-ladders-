import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';



import DiceImage1 from "../../images/Dice1.png";
import DiceImage2 from "../../images/Dice2.png";
import DiceImage3 from "../../images/Dice3.png";
import DiceImage4 from "../../images/Dice4.png";
import DiceImage5 from "../../images/Dice5.png";
import DiceImage6 from "../../images/Dice6.png";


import img from '../../images/istockphoto-455302535-612x612.jpg';

const Game = () => {





  var diceImages = [
    DiceImage1,
    DiceImage2,
    DiceImage3,
    DiceImage4,
    DiceImage5,
    DiceImage6
  ]




  const [image, setNewImage] = useState(diceImages[0])

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();



  const rollDice = () => {
    // Generate random number
    var randomNum1 = Math.floor(Math.random() * 6);
    var randomNum2 = Math.floor(Math.random() * 6);
    setNewImage(diceImages[randomNum1]);
  }


// const function 



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/game-details/${location.state.gameId}`);
        console.log('Response status:', response.status);
        console.log('Response data:', response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location.state.gameId]);

  console.log('Data:', data);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container mt-5 m-auto">
        <h3 className="text-center">Snakes&Ladders</h3>
        <div className="row">
          <div className="col-md-8 g-5">
            <img src={img} className="w-100" alt="" />
          </div>
          <div className="col-md-4">
            <div className="bg-info rounded-5 pt-5 m-auto h-50 text-center mt-5">
              {data?.GameUsers?.map((user) => (
                <h2 key={user?.id}>{user?.User?.name} :{user?.position}  </h2>
              ))}
            </div>

            <div className="div">
              <img className='square w-50 ' src={image}></img>
              <button type="button" class="btn btn-outline-primary" onClick={rollDice}>Roll Dice</button>

            </div>


            <button className='btn - btn-danger w-100 ' >back</button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Game;
