import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({width : "75%"})}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  outline:none;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [name , setName ] = useState("");
  const [lastname , setLastname] = useState("")
  const [username , setUsername] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const dispatch = useDispatch()
  const {isFetching , error } = useSelector((state) => state.user)

  // //event states
  // const [loading ,setLoading ] = useState(false);
  // const [error , setError] = useState(null)

  const handleRegisteration = (e) =>{
    e.preventDefault()
    console.log(name , lastname , username , email , password)
  }

  const handleClick = (e) =>{
    e.preventDefault()
    register(dispatch , {username , password , email })
  }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form >
          <Input placeholder="name" value={name} required onChange={(e) => setName(e.target.value)}/>
          <Input placeholder="last name" value={lastname} required onChange={(e)=>setLastname(e.target.value)}/>
          <Input placeholder="username" value={username} required onChange={(e)=>setUsername(e.target.value)}/>
          <Input placeholder="email" value={email} required onChange={(e)=>setEmail(e.target.value)}/>
          <Input placeholder="password" value={password} required onChange={(e)=>setPassword(e.target.value)}/>
          <Input placeholder="confirm password" required/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <p>Already have account? <Link to='/login'>Login</Link></p>
          <Button type="submit" onClick={handleClick} disabled={isFetching}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;