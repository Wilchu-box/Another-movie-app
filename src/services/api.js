const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
}

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
    query
  )}`);
  const data = await response.json();
  return data.results;
}

export const getMovieDetails = async (movieID) => {
  const response = await fetch(`${BASE_URL}/movie/${Number(movieID)}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
}

