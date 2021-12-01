import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectMovies } from "../Context/movieSlice";
import "../App.css"

function Movies() {
  const movies = useSelector(selectMovies);

  //  console.log(movies);
  return (
    <Container >
      <h3>Recommended for You</h3>
      <Content >
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt="" />
              </Link>
            </Wrap>
          ))}
      </Content >
    </Container>
  );
}

export default Movies;

//css

const Container = styled.div`
  margin: 30px;
  h2{
    margin-top:40px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  margin-top: 30px;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 65%) 0px 26px 30px -5px,
    rgb(0 0 0 / 73%) 0px 16px 10px -5px;
  transition: all 500ms;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 85%) 0px 26px 30px -5px,
      rgb(0 0 0 / 73%) 0px 16px 10px -5px;
    border-color: rgba(250, 250, 250, 1);
  }
`;
