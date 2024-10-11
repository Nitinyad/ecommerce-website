import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
  import styled from "styled-components";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addToWishlist } from "../redux/wishlist";
import toast from "react-hot-toast";
  
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  const Image = styled.img`
  height: 75%;
  z-index: 2;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1);
  };
`;
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    overflow:hidden;
    &:hover ${Image}{
        transform : scale(1.5);
    }
    &:hover ${Info}{
      opacity: 1;
    }
  `;
  
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  `;
  

  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;
  
  const Product = ({ item }) => {
    const loaction = useLocation();
    const id = loaction.pathname.split("/")[2]
    const [product , setProduct] = useState({})
    const dispatch = useDispatch();


    useEffect(()=>{
      const getProduct = async ()=>{
        try {
          const res= await publicRequest.get("/products/find/" + id);
          setProduct(res.data)
  
        } catch (error) {
          
        }
  
      };
      getProduct();
    } , [id])
    // console.log(product.id)
  const handleSearch = () =>{
    console.log(item.title)
  }
  console.log(item._id)
  const handleWishlist =() =>{
    const payload = {...item}
    dispatch(addToWishlist(payload))
    toast.success("Added to wishlist")
  }
  
    return (
      <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
          <Icon>
            <Link to={`/product/${item._id}`} onClick={handleSearch} style={{color : "black"}}>
            <ShoppingCartOutlined />
            </Link>
          </Icon>
          <Icon>
            <Link to={`/product/${item._id}`} onClick={handleSearch} style={{color : "black"}}>
            <SearchOutlined />
            </Link>
          </Icon>
          <Icon>
            <Link onClick={() => handleWishlist(item)}>
            <FavoriteBorderOutlined />
            </Link>
          </Icon>
        </Info>
      </Container>
    );
  };
  
  export default Product;