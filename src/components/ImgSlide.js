import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { selectMovies } from "../Context/movieSlice";
import { useSelector } from "react-redux";

function ImgSlider() {
  const movies = useSelector(selectMovies);
    console.log(movies)
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Cantainer {...settings}>

      {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
                <img src={movie.backgroundImg} alt="" />
            </Wrap>
          ))}
      
    </Cantainer>
  );
}

export default ImgSlider;

// CSS
const Cantainer = styled(Slider)`
  cantainer:focus{
    outline:none;
  }
  margin: 20px 8px;

  ul li button {
    &:before {
      font-size: 10px;
      color: white;
      
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 0;
  }
`;
const Wrap = styled.div`
  cursor: pointer;
  img {
    border-radius: 5px;
    margin-top: 10px;
    width: 98%;
    height: 350px;
    object-fit: cover;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -5px,
      rgb(0 0 0 / 73%) 0px 16px 10px -5px;
    border: 3px solid transparent;
    transition: 500ms;
    &:hover {
      border: 3px solid rgba(250, 250, 250, 0.8);
    }
  }
`;
