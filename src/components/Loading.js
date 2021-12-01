import React from "react";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

function Loading() {
  const [loading, setLoading] = useState(true);
   setTimeout(function () {
    setLoading(false);
  }, 4000);
  return (
    <div>
      {loading && 
      <Container >
        <Content>
          <img
            src={
              process.env.PUBLIC_URL +
              "/image/—Pngtree—web ui design 2 5d_4592593.png"
            } alt='loading-icon'
          />
          <h1>Loading...</h1>
        </Content>
      </Container>
}
    </div>
  );
}

export default Loading;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height:100vh;
  width:100%;
  z-index: 9999 ;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background: black;
  z-index: 9;
`;
const rotation = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
z-index: 9999 ;
 img{
    width: 30px;
    height: 30px;
    margin-right: 10px;
    animation-name: ${rotation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
}
`;
