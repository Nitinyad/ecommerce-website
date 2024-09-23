// import { Container } from '@material-ui/core';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Announcement from "../components/Announcement";
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Add, Remove } from '@material-ui/icons';
import { removeCompare, removeProduct } from '../redux/cartRedux';


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
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
  flex: 2;
  display: flex;
  flex-direction : column;
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


const CompareProduct = () => {

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveClick = (ProductId) => {
        console.log("Dispatching removeFromCompare with product ID:", ProductId);
        dispatch(removeCompare({id : ProductId}));
      };

  return (
    <>
        <Container>
            <Navbar />
            <Announcement/>
            <Wrapper>
                <Title> Compare Products </Title>
                <Info>
            {cart.products.map((product,index) => (
              <Product key={index}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductSize>
                      Size: {product.size}
                    </ProductSize>
                    <ProductName>
                      <b>Description:</b> {product.desc}
                    </ProductName>
                  <ProductName>
                  <b>Price:</b>  $ {product.price * product.quantity}
                  </ProductName>
                  <ProductName>
                  <b>Color:</b>  {product.color  }
                  </ProductName>
                  <ProductName>
                  <b>InStock:</b>  {product.inStock ? "Yes" : "No" }
                  </ProductName>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <Button  onClick={() => handleRemoveClick(product.id)}>Remove</Button>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
            </Wrapper>
        </Container>
    </>
  )
}

export default CompareProduct