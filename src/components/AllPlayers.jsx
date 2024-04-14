import { fetchAllPlayers } from "../API/index";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const AllPlayers = () => {
  console.log(useParams());
  const [players, setPlayers] = useState([]);
  const [singlePlayer, setSinglePlayer] = useState(null);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState("");
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
  const playersToDisplay = searchParams
    ? players.filter((player) =>
        player.name.toLowerCase().includes(searchParams)
      )
    : players;
  const navigate = useNavigate();
  return (
    <>
      <h1>The Most Hated Application</h1>
      <div>
        Search:{" "}
        <input
          type="text"
          placeholder="its a search"
          onChange={(e) => setSearchParams(e.target.value.toLocaleLowerCase())}
        />
      </div>
      <ul>
        {playersToDisplay.map((player) => {
          return (
            <li key={player.id}>
              <p>{player.name}</p>
              <button
                className="detailButton"
                style={{ cursor: "pointer" }}
                onClick={
                  () =>
                    navigate(`/players/${player.id}`) && setSinglePlayer(player)
                  // console.log(player);
                }

                // onClick={(e) => setPlayerID(player.id)}
              >
                See {player.name}'s details
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
// console.log("this is yo player value, asshoe: ", setSinglePlayer);

export default AllPlayers;
