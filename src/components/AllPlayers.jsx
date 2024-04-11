import { fetchAllPlayers } from "../API/index";
import { useState, useEffect } from "react";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  //   const [searchParams, setSearchParams] = useState("");

  //   console.log("players", players);

  useEffect(() => {
    async function getAllPlayers() {
      const APIresponse = await fetchAllPlayers();
      console.log(APIresponse.data.players);
      if (APIresponse.success) {
        setPlayers(APIresponse.data.players);
      } else {
        setError(APIresponse.error.message);
      }
    }
    getAllPlayers();
  }, []);

  //create a way to ddefine playrers that a displayed
  const playersToDisplay = players;
  return (
    <>
      <h1>All Players</h1>
      <ul>
        {playersToDisplay.map((player) => {
          return (
            <li key={player.id}>
              <p>{player.name}</p>
              <button className="detailButton">Details</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AllPlayers;
