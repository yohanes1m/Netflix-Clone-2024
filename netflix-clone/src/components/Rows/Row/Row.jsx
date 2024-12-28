import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovie(request.data.results);
      } catch (error) {
        console.log("Error fetching movies:", error);
      }
    })();
  }, [fetchUrl]);

  const handleImageClick = (movie) => {
    setSelectedMovie(movie);
    setTrailerUrl(""); // Reset trailer if a new movie is selected
  };

  const handlePlayTrailer = () => {
    setIsLoading(true); // Show "Please Wait..." on the button
    movieTrailer(
      selectedMovie?.title ||
        selectedMovie?.name ||
        selectedMovie?.original_name
    )
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch(() => {
        toast.error("Trailer not found for this movie.");
      });

    setIsLoading(false); // Remove "Please Wait..." after fetching
  };

  const handleCloseDescription = () => {
    setSelectedMovie(null); // Close the modal
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleImageClick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          />
        ))}
      </div>

      {selectedMovie && (
        <div className="row__modal">
          <div className="row__modalContent">
            <button
              className="row__closeButton"
              onClick={handleCloseDescription}
            >
              X
            </button>
            <div className="row__imageContainer">
              {trailerUrl ? (
                <YouTube videoId={trailerUrl} opts={opts} />
              ) : (
                <img
                  src={`${base_url}${
                    selectedMovie.poster_path || selectedMovie.backdrop_path
                  }`}
                  alt={selectedMovie.name}
                  className="row__selectedImage"
                />
              )}
            </div>
            <div className="row__details">
              <h2>
                {selectedMovie.title ||
                  selectedMovie.name ||
                  selectedMovie.original_name}
              </h2>
              <p>{selectedMovie.overview || "No description available."}</p>
              <button
                onClick={handlePlayTrailer}
                className="row__playButton"
                disabled={isLoading}
              >
                {isLoading ? "Please Wait..." : "Play Trailer"}
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default Row;
