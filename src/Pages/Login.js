import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
function Login({ user }) {
  const history = useHistory();
  const onPush=()=>{
    if(user[0]){
      history.push('/home')
    }else{
      history.push('/signup')
    }
  }
  return (<>
       <div id="bg-img">
        <img
          src={process.env.PUBLIC_URL + "/image/login-background.jpg"}
          alt=""
        />
      </div>
    <Container >
      <CTALogo>
        <LogoOne src={process.env.PUBLIC_URL + "/image/cta-logo-one.svg"} />
        <h4>Netflix</h4>
        <SignUp>
          <Link onClick={onPush}>GET ALL THERE</Link>
        </SignUp>
        <Description>
          All our dreams can come true, if we have the courage to pursue them.
          It's kind of fun to do the impossible. The way to get started is to
          quit talking and begin doing
        </Description>
        <LogoTwo src={process.env.PUBLIC_URL + "/image/cta-logo-two.png"} />

        <Ameen href="https://www.instagram.com/ameen_hbz/">
          Ameen_hbz
          <img
            src={process.env.PUBLIC_URL + "/image/instagram-logo-png-2426.png"} alt='inta-logo'
          />
        </Ameen>
      </CTALogo>
    </Container>
  </>);
}

export default Login;

//css
const Ameen = styled.a`
  color: #ebe2e257;
  margin-top: 20px;
  cursor: pointer;
  text-decoration: none;
  display:flex;
  display: flex;
    justify-content: center;
    align-items: center;
  img{
    width:30px;
    height:30px;
  }
`;
const Container = styled.div`
  height: calc(100vh-70px);
  display: flex;
  align-items: center;
  justify-content: center;


`;
const CTALogo = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h4{
    font-size: 55px;
    color: #cc2b2b;
    letter-spacing: 2px;
  }
`;
const LogoOne = styled.img``;
const SignUp = styled.a`
  width: 100%;
  background-color: #044eaf;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 10px;
  margin-bottom: 12px;
  text-decaration: none;
  &:hover {
    background: #0483ee;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.4rem;
  }
`;
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
const LogoTwo = styled.img`
  padding-top: 10px;
  width: 80%;
`;
