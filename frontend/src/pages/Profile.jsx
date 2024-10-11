import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components';
import { mobile } from '../responsive';
import Announcement from "../components/Announcement";
import { useSelector } from 'react-redux';



const Container = styled.div``;

const Wrapper = styled.div`
    display: flex;
    flex-direction : column;
    align-items : center;
    padding: 20px;
    width : 100%;
    height : 400px;
    align-content : center;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
    display: flex;
    justify-content: center;
    color: green;
    border: 3px solid black;
    width : 400px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction : column;
  margin-right : 20px;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
    display: flex;
    justify-content: center;
`;

const Image = styled.img`
  width: 400px;
  height:400px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flexDirection : column;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;




const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;


const Profile = () => {
    const user  = useSelector((state) => state.user.currentUser)
  return (
    <>
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>Profile</Title>
                <Info style={{justifyContent:'center' , alignItems:'center'}}>
                    <ProductDetail>
                        <Details>
                            <ProductName>
                                <b>UserId : </b>{user._id}
                            </ProductName>
                            <ProductName>
                                <b>Username : </b>{user.username}
                            </ProductName>
                            <ProductName>
                                <b>Email : </b>{user.email}
                            </ProductName>
                        </Details>
                    </ProductDetail>
                </Info>
            </Wrapper>
        </Container>
    
    </>
  )
}

export default Profile