import React, { useEffect } from "react";
import styled from "styled-components";
import GenresCard from "../components/GenresCard";
import ImgSlide from "../components/ImgSlide";
import Movies from "../components/Movies";
import db from "../Firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../Context/movieSlice";
import Loading from "../components/Loading";
function Home({user}) {
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return({ id: doc.id, ...doc.data() });
      })
      dispatch(setMovies(tempMovies))
    })
  })
  return (<>
      <Loading />
    <Container>
      <ImgSlide />
      <GenresCard />
     {user ? <Movies /> :
      <Alert>
      <h1>Login To Get All Movies  </h1>
      <button>Subscribe Now</button>
    </Alert>
     }
    </Container>
  </>);
}

export default Home;

// CSS
const Container = styled.div`
  min-height: calc(200vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
  }
`;
const Alert=styled.div`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
right: 0;
left: 0;
top: 0;
bottom: 0;
background: #000;
height: 100vh;
    flex-direction: column;
    button{
      margin-top: 30px;
      height: 40px;
      width: 160px;
      font-size: 1.2rem;
      font-weight: 400;
      cursor:pointer;
      border:none;
    }
    button:hover{
     background: #000;
     color:#fff;
     border:1px solid #fff;
    }
`