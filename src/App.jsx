import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayerForm from "./components/SinglePlayerForm";
import NavBar from "./components/NavBar";
import AllPlayers from "./components/AllPlayers";

function App() {
  const [playerID, setPlayerID] = useState(null);
  return (
    <>
      <div id="nav"></div>
      <Link to="/" style={{ color: "#858f06" }}>
        The Players |{" "}
      </Link>
      <Link to="/new-player"> New Player | </Link>
      <Link to="/players/:id" style={{ color: "#e79a2ec4" }}>
        {" "}
        Single Player Form
      </Link>

      <div id="mainContainer">
        <Routes>
          <Route
            path="/"
            element={
              <AllPlayers playerId={playerID} setPlayerId={setPlayerID} />
            }
          />
          <Route path="/new-player" element={<NewPlayerForm />} />
          <Route
            path="/players/:id"
            element={
              <SinglePlayerForm playerId={playerID} setPlayerId={setPlayerID} />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
