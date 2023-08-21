import axios from "axios";

const BASE_URL = "https://google-search74.p.rapidapi.com/";

const options = {
  params: {
    limit: "100",
    related_keywords: "true",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
  },
};

const fetchAPI = async (url: string) => {
  const data = await axios.get(`${BASE_URL}${url}`, options);
  return data;
};

export default fetchAPI;
