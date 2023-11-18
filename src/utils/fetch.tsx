
import config from "../config/config";

const API_KEY = config.API_KEY;
const API_URL = config.BASE_URL;

export default async () => {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}`
    );
    const data = await response.json();

    return Promise.resolve(data.results);
  } catch (error) {
    return Promise.reject(error);
  }
};
