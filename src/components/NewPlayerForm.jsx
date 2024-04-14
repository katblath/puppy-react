import { useState } from "react";
import { createNewPlayer } from "../API/index";
import { useNavigate } from "react-router-dom";

export default function NewPlayerForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPlayer = { name, breed };
      const APIresponse = await createNewPlayer(name, breed);
      console.log("APIresponse", APIresponse);
      if (APIresponse.success) {
        console.log("Yay! Player created");
      } else {
        setError(APIresponse.error);
      }
    } catch (error) {
      setError(error.message);
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Dog Name:
        <input
          type="text"
          placeholder="Name of dog"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Dog Breed:
        <input
          type="text"
          placeholder="Breed of dog"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
      </label>
      <button type="submit">Add Player</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
