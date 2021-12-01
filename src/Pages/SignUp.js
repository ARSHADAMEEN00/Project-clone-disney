import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function SignUp({ user,setUser }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);
  const history = useHistory();

  if(user[0]){
    localStorage['firstLoad'] = true;
    window.location.reload();
  }
 
  const onHandleSubmit = (e) => {
    e.preventDefault()
    if (setName) {
      if (email) {
        if (password) {
            if(check===true){
            }else {
                alert("please Mark the Ckeck Box");
              }
        } else {
          alert("please  Enter a password");
        }
      } else {
        alert("please  Enter a Valid Email");
      }
    } else {
      alert("please  Enter Your Name");
    }if(name&&email&&password&&check){
        history.push('/home')
        setUser([name,email])
    }
  };

  return (
    <Container>
      <SignUpForm>
        <Form onSubmit={onHandleSubmit}>
          <h3>Login To Get All <br/>New Movies And Show </h3>
          <Field>
            <input
              type="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Field>
          <Field>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field>
          <Field>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field>
          <CheckBox>
            <input
              type="checkbox"
              value={check}
              onClick={() => setCheck(true)}
            />
            Terms and Conditions
          </CheckBox>
          <SingUp type="submit">
            Sign Up
          </SingUp>
        </Form>
      </SignUpForm>
    </Container>
  );
}

export default SignUp;

// css
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignUpForm = styled.div`
margin-top: 10%;
`;
const Form = styled.form`
box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3{
    font-size: 2rem;
    color: darkgoldenrod;
    margin-bottom: 20px;
    align-self: center; 
    text-align: center;
  }
`;
const Field = styled.div`
  margin: 10px;
  input {
    height: 2rem;
    width: 25rem;
  }
  input:focus {
    outline: none;
  }
`;
const SingUp = styled.button`
  margin: 10px;
  width: 25rem;
  height: 2rem;
  background: goldenrod;
  border: none;
  font-size: 1.4rem;
  cursor:pointer;
  &:hover{
      background:#ab8118
  }
`;
const CheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: fleX-start;
  margin-left: -230px;
  margin-bottom: 10px;
  margin-top: 10px;
  input {
  }
`;
