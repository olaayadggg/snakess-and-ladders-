import React from 'react';
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import LoginPage from './components/login/LoginPage.jsx'
import RegisterPage2 from './components/register/RegisterPage2.jsx'
import GamesPage from  './components/Games/GamesPage.jsx'
import LandingPage from  './components/LandingPage/LandingPage.jsx'
import Game from  './components/game/game.jsx'






export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage2 />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/game" element={<Game />} />


          <Route path="/lobby" element={<GamesPage />} />
        </Routes>
      </BrowserRouter >
    </>


  );
}
