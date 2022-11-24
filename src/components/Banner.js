import React, { useState, useEffect } from "react";
import axios from "../utilities/axios";
import requests from "../utilities/requests";
import "./Banner.css";

function Banner() {
  const [movies, setMovies] = useState([]);
  const basePath = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function getMovies() {
      const result = await axios.get(requests.fetchNetflixOriginals);
      const banner = result.data.results[Math.floor(Math.random() * 20)];
      setMovies(banner);
    }
    getMovies();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${basePath}${movies.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movies?.name || movies?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <div className="banner-desp">{movies.overview}</div>
      </div>
      <div className="botton-gradient"></div>
    </header>
  );
}

export default Banner;
