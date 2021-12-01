import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

function Header({ user}) {
  const [scroll, setScroll] = useState(false)
  const [click, setClick] = useState(false)
  const [Srh, setSrh] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else if (window.scrollY <= 50) {
        setScroll(false);
      }
    });
  }, []);
  const history=useHistory()
  const onHandleLogout=()=>{
    localStorage.clear()
    history.push('/signup')
  }
  return (<>
    <Nav  
      style={{
        background:scroll===true && '#090c1b',
      }}
    >
      <Link to="/">
        <LogoWrap>
        <Logo
          src={process.env.PUBLIC_URL + "/image/logo_transparent.png"}
        />
        </LogoWrap>
      </Link>
      {user[0] ? (
        ""
      ) : (
        <LoginContainer>
          <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>
            <Login> login</Login>
          </Link>
        </LoginContainer>
      )}

      {user[0] && (
        <NavMenu >
          <a href='!#'>
            <img src={process.env.PUBLIC_URL + "/image/home-icon.svg"} alt="" />
            <Link to="/home">
              <span>HOME</span>
            </Link>
          </a>
          <Link to='/home'>
            <img
              src={process.env.PUBLIC_URL + "/image/search-icon.svg"}
              alt=""
            />

            <span onClick={()=>setSrh(!Srh)} >SEARCH</span>
          </Link>
          <a href='!#'>
            <img
              src={process.env.PUBLIC_URL + "/image/watchlist-icon.svg"}
              alt=""
            />

            <span>WATCHLIST</span>
          </a>
          <Link to='/movies'>
            <img
              src={process.env.PUBLIC_URL + "/image/original-icon.svg"}
              alt=""
            />

            <span>ORIGINALS</span>
          </Link>
          <Link to='/movies'>
            <img
              src={process.env.PUBLIC_URL + "/image/movie-icon.svg"}
              alt=""
            />

            <span>MOVIES</span>
          </Link>
          <Link to='/movies'>
            <img
              src={process.env.PUBLIC_URL + "/image/series-icon.svg"}
              alt=""
            />

            <span>SERIES</span>
          </Link>
        </NavMenu>
      )}
      {user[0] && (
        <UserWrap>
          <span onClick={()=>setClick(!click)} >{user[0]}</span>
          {click===true &&<UserImage onClick={onHandleLogout} >Sign out</UserImage>}
        </UserWrap>
      )}
    </Nav>
      <Search id={Srh===true && "srh"} >
        <input type="search" name="" placeholder='Type somthing here....' />
      <button type="submit">Search</button>
      <img onClick={()=>setSrh(false)} src={process.env.PUBLIC_URL + "/image/close.png"} alt="close-btn" />
      </Search>
  </>);
}

export default Header;

//CSS STYLES by useing Styled components
const Nav = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 9;
  width: 100%;
  background:transparent;
  transition:all 0.3s esae;
`;
const  LogoWrap=styled.div`
width: 130px;
    height: auto;
    padding-top: 20px;
    padding-left: 10px;
`
const Logo = styled.img`
width: 100%;
    height: 100%;
    object-fit: cover;
  
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none;
    color:#fff;
    img {
      height: 20px;
    }
    a {
      text-decoration: none;
      color: #fff;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.4px;
      position: relative;

      &:after {
        //it's actuly a div we use to animate
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: center left, right;
        transform: scaleX(0);
        transition: 500ms;
        //transition: all 250ms cubic-bazier(0.25,0.46,0.45,0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.4s ease 0s;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
const LoginContainer = styled.div`
  padding-right: 20px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
`;

const UserImage = styled.button`
  margin: 0 10px 0 10px;
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  background-color: #fff;
  transition: all 0.4s ease 0s;
  cursor: pointer;
  &:hover {
    background-color: #111;
    color:#fff;
    border-color: #fff;
  }
`;
const UserWrap = styled.div`
  display: flex;
  align-items: center;
  span{
    margin-right:20px;
    cursor:pointer;
  }
`;
const Search =styled.div`
height: 70px;
background: #000;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
transform: translateY(-180px);
z-index: 99;
  input{
    height: 50px;
    width: 70%;
    font-size: 20px;
    cursor:pointer;
  }
  input:focus{
    outline:none;
  }
  button{
    height:50px;
    width:10%;
    background: #fff;
    border:none;
    border-left:1px solid #fff;
  }
  button:hover{
    background: #111;
    color:#fff;
  }
  button:focus{
    outline:none;
  }
  img{
    position: absolute;
    right: 20px;
    top: 0;
    width: 35px;
    cursor:pointer;
  }
  
`