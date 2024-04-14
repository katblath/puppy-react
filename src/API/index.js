// import { getAllPlayers } from "../components/Players";
const cohortName = "2401-FTB-ET-WEB-AM";
const baseURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

// The fetchAllPlayers function is used to fetch all players from the API.

export async function fetchAllPlayers() {
  try {
    const response = await fetch(`${baseURL}/players`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("the all fetch doesn't work, this is the error: ", error);
  }
}

// fetchsingle
export async function fetchSinglePlayer(id) {
  try {
    const response = await fetch(`${baseURL}/players/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("the single fetch doesn't work, this is the error: ", error);
  }
}

// delete single
export async function deleteSinglePlayer(id) {
  try {
    const response = await fetch(`${baseURL}/players/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete player");
    }
    await fetchAllPlayers();
    // getAllPlayers();
  } catch (error) {
    console.error("the delete fetch doesn't work, this is the error: ", error);
  }
}
// create a new player
export async function createNewPlayer(dogname, dogbreed) {
  try {
    const response = await fetch(`${baseURL}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: dogname, breed: dogbreed }),
    });
    const json = await response.json();
    console.log("newplayeradded: ", json);
    if (json.error) {
      throw new Error("Failed to create player", json.error);
    }
  } catch (error) {
    console.error("the create fetch doesn't work, this is the error: ", error);
  }
}
