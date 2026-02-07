import axios from "axios";

const NASA_URL = "https://api.nasa.gov/neo/rest/v1/feed";

export const fetchAsteroids = async () => {
  const response = await axios.get(NASA_URL, {
    params: {
      api_key: process.env.NASA_API_KEY
    }
  });

  return response.data.near_earth_objects;
};
