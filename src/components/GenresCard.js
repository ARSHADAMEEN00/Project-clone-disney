import React from "react";
import styled from "styled-components";
function GenresCard() {
  return (
    <Container>
      <Wrap>
        <video
          autostart
          autoPlay
          loop
          muted
          src={process.env.PUBLIC_URL + "/videos/1564674844-disney.mp4"}
          type="video/mp4"
        />
        <img
          src={process.env.PUBLIC_URL + "/image/viewers-disney.png"}
          alt=""
        />
      </Wrap>

      <Wrap>
        <video
          autostart
          autoPlay
          loop
          muted
          src={process.env.PUBLIC_URL + "/videos/1564676115-marvel.mp4"}
          type="video/mp4"
        ></video>
        <img
          src={process.env.PUBLIC_URL + "/image/viewers-marvel.png"}
          alt=""
        />
      </Wrap>

      <Wrap>
        <video
          autostart
          autoPlay
          loop
          muted
          src={
            process.env.PUBLIC_URL +
            "/videos/1564676296-national-geographic.mp4"
          }
          type="video/mp4"
        ></video>
        <img
          src={process.env.PUBLIC_URL + "/image/viewers-national.png"}
          alt=""
        />
      </Wrap>
      <Wrap>
        <video
          autostart
          autoPlay
          loop
          muted
          src={process.env.PUBLIC_URL + "/videos/1564676714-pixar.mp4"}
          type="video/mp4"
        ></video>
        <img src={process.env.PUBLIC_URL + "/image/viewers-pixar.png"} alt="" />
      </Wrap>
      <Wrap>
        <video
          autostart
          autoPlay
          loop
          muted
          src={process.env.PUBLIC_URL + "/videos/1608229455-star-wars.mp4"}
          type="video/mp4"
        ></video>
        <img
          src={process.env.PUBLIC_URL + "/image/viewers-starwars.png"}
          alt=""
        />
      </Wrap>
    </Container>
  );
}

export default GenresCard;

//css

const Container = styled.div`
  margin-top: 30px;
  padding: 50px 0px 50px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;
const Wrap = styled.div`
  border-color: transparent;
  border-radius: 10px;
  cursor: pointer;
  border: 3px solid rgba(245, 245, 245, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -5px,
    rgb(0 0 0 / 73%) 0px 16px 10px -5px;
  transition: all 500ms;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
  }
  video {
    position: absolute;
    width: 100%;
    height: 100%;
    display: none;
    border-radius: 10px;
  }
  //Wrap:hover
  &:hover {
    box-shadow: rgb(0 0 0 / 85%) 0px 26px 30px -5px,
      rgb(0 0 0 / 73%) 0px 16px 10px -5px;
    transform: scale(1.05);
    border-color: rgba(250, 250, 250, 0.8);
    video {
      display: block;
    }
  }
`;
