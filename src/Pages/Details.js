import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import db from "../Firebase";
import Loading from "../components/Loading";
import { useHistory } from "react-router-dom";

function Details({ user }) {
  const history=useHistory()
  const { id } = useParams();
  const [movie, setMovie] = useState();
  // get movie info form DB
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovie(doc.data());
          // save the movie data
        } else {
          // redirect to home
        }
      });
  });
  console.log(movie);

  const [state, setState] = useState(false);
  const onMouseEnterHandle = () => {
    setState(true);
    console.log(state);
  };
  const onMouseLeaveHandle = () => {
    setState(false);
    console.log(state);
  };

  return (
    <Container>
      <Loading />
      {user ? (
        <>
          <Background>
            <img src={movie?.backgroundImg} alt="check your connection" />
          </Background>
          <ImageTitle>
            <img src={movie?.titleImg} alt="somthing wrong" />
          </ImageTitle>
          <Controls>
            <PlayButton
              onMouseOver={onMouseEnterHandle}
              onMouseLeave={onMouseLeaveHandle}
              onClick={()=>window.location.href='https://www.youtube.com/'}
            >
              {state && (
                <ImgWhite
                  src={process.env.PUBLIC_URL + "/image/play-icon-white.png"}
                />
              )}
              <img
                src={process.env.PUBLIC_URL + "/image/play-icon-black.png"}
                alt=""
              />
              <span >PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src="/image/play-icon-white.png" alt="" />
              <span>Treailer</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img
                src={process.env.PUBLIC_URL + "/image/group-icon.png"}
                alt=""
              />
            </GroupWatchButton>
          </Controls>
          <SubTitle>{movie?.subTitle}</SubTitle>
          <Discription>{movie?.description}</Discription>
        </>
      ) : (
        <Alert>
          <h1>Login To Get All Movies  </h1>
          <button onClick={()=>history.push('/signup')} >Subscribe Now</button>
        </Alert>
      )}
    </Container>
  );
}

export default Details;

// css

const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  padding-top: 80px;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: 5px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;
  padding: 0px 24px;
  margin-right: 24px;
  color: #111;
  letter-spacing: 1.8px;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
  }
`;
const ImgWhite = styled.img`
  position: absolute;
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rbg(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;
const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background-color: #111;
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Discription = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 600px;
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
