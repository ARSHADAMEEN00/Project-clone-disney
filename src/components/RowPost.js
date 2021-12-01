import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import YouTube from "react-youtube";
const API_KEY = "9948beaa1978b07ef733bcbe5e8d2849";
const imageUrl = "https://image.tmdb.org/t/p/original";

function RowPost(props) {
  const [movie, setMovie] = useState([]);
  const [urlId, setUrlId] = useState("");
  console.log(urlId);                                                                                                                                                                                                                                                                                                                                                                                                                                        
  useEffect(() => { 
    axios.get(props.url).then((response) => {
      setMovie(response.data.results);
      
    });
  });
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovieTrailr = (id) => {
    console.log(id);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("Array empty");
        }
      });
  };
  return (<>
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movie.map((obj) => (
          <img
            onClick={() => handleMovieTrailr(obj.id)} 
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>

    
  </>);
}

export default RowPost;
