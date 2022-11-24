import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../utilities/axios";
import "./Row.css";

function Row({ title, fetchUrl, isNetflixOriginal }) {
  const [movies, setMovies] = useState([]);
  const [trailerId, setTrailerId] = useState("");
  const [trailerFound, setTrailerFound] = useState(true);
  const basePath = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function getMovies() {
      const result = await axios.get(fetchUrl);
      setMovies(result.data.results);
    }
    getMovies();
  }, [fetchUrl]);

  const opts = {
    height: "500px",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function getYoutubeVideo(movie) {
    if (trailerId || !trailerFound) {
      setTrailerId("");
      setTrailerFound(true);
    } else {
      console.log(movie);
      movieTrailer(
        movie?.title ||
          movie?.original_title ||
          movie?.name ||
          movie?.original_name ||
          ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(url);
          setTrailerId(urlParams.get("v"));
        })
        .catch((err) => {
          console.log(err.message);
          setTrailerFound(false);
        });
    }
  }

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row-posters">
        {movies.map((movie) => {
          return (
            <img
              onClick={() => getYoutubeVideo(movie)}
              className={
                isNetflixOriginal ? "row-poster row-poster-lg" : "row-poster"
              }
              key={movie.id}
              src={
                isNetflixOriginal
                  ? `${basePath}${movie.poster_path}`
                  : `${basePath}${movie.backdrop_path}`
              }
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerId && <YouTube videoId={trailerId} opts={opts} />}
      {!trailerFound && <h2>No Trailer was found!!!</h2>}
    </div>
  );
}

export default Row;
