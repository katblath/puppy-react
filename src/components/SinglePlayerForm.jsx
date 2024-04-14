// import { useNavigate } from "react-router-dom";
import { fetchSinglePlayer } from "../API/index";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import { deleteSinglePlayer } from "../API/index";

export default function SinglePlayerForm() {
  console.log(useParams());
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getSinglePlayer() {
      try {
        const APIresponse = await fetchSinglePlayer(id);
        console.log(APIresponse.data.player);
        if (APIresponse.success) {
          setPlayer(APIresponse.data.player);
        } else {
          setError(APIresponse.error.message);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getSinglePlayer();
  }, [id]);

  return (
    <>
      <div className="singleton">
        {player && (
          <div>
            <h3 style={{ textDecoration: "underline" }}>
              {player.name}'s details
            </h3>
            <p>
              Government Name: <br></br>
              {player.name}
            </p>
            <hr style={{ width: "60%", borderColor: "#e79a2ec4" }} />
            <p>
              Breed: <br></br>
              {player.breed}
            </p>
            <img src={player.imageUrl} alt={player.name} />
          </div>
        )}
        {/* <button onClick={() => { doThingOne(); doThingTwo(); }}>Click me</button> */}
        <button
          onClick={() => {
            window.history.back();
            setPlayer(null);
          }}
        >
          Go Back
        </button>
        <button
          onClick={() => {
            //   remove the history.back thing on delete
            window.history.back();
            deleteSinglePlayer(player.id);
          }}
        >
          Delete Player
        </button>
      </div>
    </>
  );
}
