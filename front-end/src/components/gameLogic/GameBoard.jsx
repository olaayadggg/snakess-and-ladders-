import React, { useState, useEffect } from 'react';
import img from '../../images/board.png';

import './game.css';

export default function GameBoard() {
  const [tog, setTog] = useState(1);
  const [p1sum, setP1sum] = useState(0);
  const [p2sum, setP2sum] = useState(0);
  const [diceNumber, setDiceNumber] = useState(0); // New state for dice number

  useEffect(() => {
    const play = (player, psum, correction, num) => {
      let sum;

      if (psum === 'p1sum') {
        let newP1sum = p1sum + num;

        if (newP1sum > 100) {
          newP1sum = newP1sum - num;
        }

        const snakeLadderMap = {
          1: 38,
          4: 14,
          8: 30,
          21: 42,
          28: 76,
          32: 10,
          36: 6,
          48: 26,
          50: 67,
          62: 18,
          71: 92,
          80: 99,
          88: 24,
          95: 56,
          97: 78
        };

        if (snakeLadderMap.hasOwnProperty(newP1sum)) {
          newP1sum = snakeLadderMap[newP1sum];
        }

        setP1sum(newP1sum);
        sum = newP1sum;
      }

      if (psum === 'p2sum') {
        let newP2sum = p2sum + num;

        if (newP2sum > 100) {
          newP2sum = newP2sum - num;
        }

        const snakeLadderMap = {
          1: 38,
          4: 14,
          8: 30,
          21: 42,
          28: 76,
          32: 10,
          36: 6,
          48: 26,
          50: 67,
          62: 18,
          71: 92,
          80: 99,
          88: 24,
          95: 56,
          97: 78
        };

        if (snakeLadderMap.hasOwnProperty(newP2sum)) {
          newP2sum = snakeLadderMap[newP2sum];
        }

        setP2sum(newP2sum);
        sum = newP2sum;
      }

      const playerElement = document.getElementById(player);
      const row = Math.floor((sum - 1) / 10); // Calculate row based on the box number
      const col = (sum - 1) % 10; // Calculate column based on the box number

      playerElement.style.transition = 'linear all .5s';
      playerElement.style.left = `${-col * 62}px`; // Multiply by box width to get the correct left position
      playerElement.style.top = `${-row * 62 - correction}px`; // Multiply by box height and subtract correction for the correct top position
    };
    const handleDiceRoll = () => {
      const num = Math.floor(Math.random() * (6 - 1 + 1) + 1);

      if (tog % 2 !== 0) {
        play('p1', 'p1sum', 0, num);
      } else {
        play('p2', 'p2sum', 55, num);
      }

      setDiceNumber(num); // Update dice number
      setTog(tog + 1);
    };

    document.getElementById('diceBtn').addEventListener('click', handleDiceRoll);

    return () => {
      document.getElementById('diceBtn').removeEventListener('click', handleDiceRoll);
    };
  }, [p1sum, p2sum, tog]);

  return (
    <div>
      <h1>Snakes and Ladder</h1>
      <div id="diceCont">
        <p id="tog">Red's Turn : </p>
        <p id="dice">{diceNumber}</p> {/* Display dice number */}
        <button id="diceBtn">ROLL</button>
      </div>
      <div
        className="cont"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'contain',
          border: "1px solid red"
        }}
      >
        <div className="box" style={{ border: 'transparent' }}
          id="b100">


        </div>

        <div className="box" style={{ border: 'transparent' }} id="b99" >

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b98">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b97">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b96">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b95">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b94">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b93">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b92">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b91">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b81">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b82">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b83">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b84">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b85">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b86">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b87">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b88">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b89">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b90">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b80">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b79">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b78">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b77">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b76">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b75">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b74">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b73">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b72">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b71">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b61">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b62">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b63">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b64">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b65">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b66">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b67">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b68">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b69">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b70">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b60">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b59">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b58">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b57">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b56">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b55">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b54">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b53">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b52">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b51">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b41">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b42">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b43">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b44">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b45">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b46">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b47">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b48">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b49">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b50">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b40">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b39">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b38">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b37">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b36">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b35">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b34">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b33">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b32">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b31">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b21">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b22">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b23">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b24">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b25">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b26">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b27">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b28">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b29">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b30">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b20">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b19">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b18">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b17">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b16">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b15">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b14">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b13">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b12">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b11">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b01">

          <p id="p1"></p>
          <p id="p2"></p>

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b02">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b03">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b04">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b05">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b06">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b07">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b08">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b09">

        </div>
        <div className="box" style={{ border: 'transparent' }} id="b10">

        </div>





      </div >
    </div >

  );
}


