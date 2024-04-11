const cohortName = "2401-FTB-ET-WEB-AM";
const baseURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

// The fetchAllPlayers function is used to fetch all players from the API.

export async function fetchAllPlayers() {
  try {
    const response = await fetch(`${baseURL}/players`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("the fetch doesn't work, this is the error: ", error);
  }
}

// fetchsingle

// delete single
