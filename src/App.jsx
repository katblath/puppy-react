import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayerForm from "./components/SinglePlayerForm";
import NavBar from "./components/NavBar";
import AllPlayers from "./components/AllPlayers";

function App() {
  return (
    <>
      <div id="nav"></div>
      <Link to="/">All Players</Link>
      <Link to="/new-player">New Player</Link>
      <Link to="/players/:id">Single Player</Link>

      <div id="mainContainer">
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/new-player" element={<NewPlayerForm />} />
          <Route path="/players/:id" element={<SinglePlayerForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
