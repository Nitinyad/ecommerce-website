import { Badge} from "@material-ui/core";
import { ExitToApp, Person, Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {useDispatch, useSelector}  from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import { useNavigate } from 'react-router-dom';
// import { signOut } from "../redux/userSlice";
import { LOGOUT_ACTION, Logout, llogout } from "../redux/apiCalls";
import { signOut } from "../redux/userSlice";
import { logout } from "../redux/authSlice";
import { persistor } from '../redux/store';
import { addProduct } from "../redux/cartRedux";

const Container = styled.div`
  height: 60px;
  position:sticky;
  top:0vh;
  background-color:white;
  ${mobile({ height: "50px" })};
  z-index : 12;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
  outline: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItems = styled.div`
  font-size: 14px;
  width:100%;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {

  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser)
  // const isLogged = Boolean(useSelector(state=>state.user.currentUser))
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  
  // console.log(quantity) {user ? user.currentUser.username : "REGISTER"}
  const logoutHandler = (e) =>{
    dispatch(signOut());
    navigate('/login');
    persistor.purge();
  }
 

  return (
    <Container> 
      <Wrapper>
        <Left>
          <Language>IN</Language>
          <Link to="/search">
          <SearchContainer> 
            {/* <Input placeholder="Search" /> */}
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
          </Link>
        </Left>
        <Center>
          <Link to="/" style={{textDecoration:"none" , color : "black"}}>
          <Logo>STORE.</Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/register" style={{textDecoration:"none" , color:"black"}}>
          <MenuItems></MenuItems>
          </Link>
          <Link to="/login" style={{textDecoration:"none" , color:"black"}}>
          <MenuItems>{user ? <Link to="/register"></Link> : "SIGN IN"}</MenuItems>
          </Link>
          <Dropdown>
            {/* <MenuButton><Person style={{marginRight:"10px"}}/>{user ? user.currentUser.username : ""}</MenuButton> */}
            <MenuButton>ACCOUNT</MenuButton>
            {user ? (
            <Menu>
              <MenuItem>Profile</MenuItem>
               <MenuItem style={{textDecoration:"none" ,width:"100%" ,display:"flex" , alignItems:"center" , justifyContent:"center"}} onClick={logoutHandler} ><ExitToApp/>Logout</MenuItem>
            </Menu>
        ) : (<Link className='link' to='/login'> Login</Link>)}
          </Dropdown>
          <Link to="/cart" style={{color:"black"}}>
            <MenuItems>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItems>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;