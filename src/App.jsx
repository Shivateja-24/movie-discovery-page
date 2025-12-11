import { useEffect, useState } from "react";
import React from "react";
import Search from "./components/Search.jsx";
import Spinner from "./components/Spinner.jsx";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = React.useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.response === "False") {
        setErrorMessage(data.Error || "No movies found.");
        setMovieList([]);
        return;
      }
      //console.log("Fetched movies data:", data);
      setMovieList(data.results || []);
    } catch (error) {
      console.error(`Error fetching movies:, ${error}`);
      setErrorMessage("Failed to fetch movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className="my-0 py-0">
        <header>
          <img src="/logo.png" alt="Logo" />
          <h1 className="text-gradient text-5xl">
            Discover Your Next Favorite
            <span className="text-gradient"> Movie</span>
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className="all-movies mt-10">
          <h2>All Movies</h2>
          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <p key={movie.id} className="text-white">
                  {movie.title}
                </p>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
