import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import '../App.css'
function NotFond() {
  return (
    <Container id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h1>
              4<span>0</span>4
            </h1>
          </div>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <Link to='/home'>home page</Link>
        </div>
    </Container>
  );
}

export default NotFond;

const Container = styled.div`
  padding-top: 90px;
`;
