import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './game.module.css';
import img from '../../istockphoto-455302535-612x612.jpg'
import axios from 'axios';


let data ;
console.log(axios);
async function getData (){
data = await axios.get('http://localhost:3001/element')
console.log(data.data);


}
getData()





const Game = () => (
  <div >
    <div className="container mt-5  m-auto ">
      <h3 className='text-center '  > Snakes&Ladders </h3>
      <div className="row">
        <div className="col-md-8 g-5 ">
          <img src={img} className='w-100' alt="" />
        </div>
        <div className="col-md-4">

          <div className="bg-info rounded-5 m-auto h-50  text-center mt-5  ">
.
            <h2 className='mt-3' >{data.data[1].gameid}</h2>
            <h2>{data.data[2].gameid} </h2>
            <h2>{data.data[4].gameid}</h2>
            <h2>{data.data[5].gameid}</h2>
            <h2>{data.data[6].gameid}</h2>



          </div>

        </div>

      </div>
    </div>


  </div>
);

export default Game;
