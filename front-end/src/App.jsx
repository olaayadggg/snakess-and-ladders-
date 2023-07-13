import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/login/LoginPage.jsx';
import RegisterPage2 from './components/register/RegisterPage2.jsx';
import GamesPage from './components/Games/GamesPage.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Game from './components/game/game.jsx';
import GameBoard from './components/gameLogic/GameBoard.jsx';

const isAuthenticated = () => {
  const token = localStorage.getItem('userToken'); // Retrieve the token from localStorage or any other storage mechanism

  // Return true if the token is present and valid; otherwise, return false
  return token ? true : false;
};

const ProtectedRoutes = ({ children }) => {
  if (isAuthenticated()) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/board" element={<GameBoard />} />
        <Route path="/register" element={<RegisterPage2 />} />
        <Route path="/login" element={<ProtectedRoutes><LoginPage /></ProtectedRoutes>} />
        <Route path="/lobby" element={<ProtectedRoutes><GamesPage /></ProtectedRoutes>} />
        <Route path="/game" element={<ProtectedRoutes><Game /></ProtectedRoutes>} />
      </Routes>
    </Router>
  );
}
