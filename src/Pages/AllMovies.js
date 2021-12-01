import React from "react";
import RowPost from "../components/RowPost";
import Loading from "../components/Loading";
const API_KEY = "9948beaa1978b07ef733bcbe5e8d2849";
const baseUrl = "https://api.themoviedb.org/3/";
const Originals = `${baseUrl}discover/tv?api_key=${API_KEY}&with_networks=213`;
const Action = `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=28`;
const ComedyMovies = `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=35`;
const HorrorMovies = `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=27`;
const OtherMovies = `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=80`;
const RomanceMovies = `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=10749`;
const Documentaries = `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=99`;

function AllMovies() {
  return (
    <>
      <Loading />
      <div id="bg-img">
        <img
          src={process.env.PUBLIC_URL + "/image/login-background.jpg"}
          alt=""
        />
      </div>
      <div id="movies_list">
      <RowPost url={Originals} title="Originals" />
      <RowPost url={Action} title="Action" isSmall />
      <RowPost url={ComedyMovies} title="Comedy" isSmall />
      <RowPost url={HorrorMovies} title="Horror" isSmall />
      <RowPost url={RomanceMovies} title="Romance" isSmall />
      <RowPost url={Documentaries} title="Documentaries" isSmall />
      <RowPost url={OtherMovies} title="Others" isSmall />
      </div>
    </>
  );
}

export default AllMovies;
