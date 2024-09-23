import React, { useEffect, useState } from 'react'
import SearchBar from "material-ui-search-bar";
import Products from '../components/Products';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import SearchIcon from "@mui/icons-material/Search";

const Container = styled.div``;

const Input = styled.input`
  width: 90%;
  height : 100%;
  color: black;
  padding-bottom: 0;
  margin-top: 0;
  font-weight: 500;
`;

const Search = () => {
    const loaction = useLocation();
    const [searchTerm, setSearchTerm] = useState('');
  const cat = loaction.pathname.split("/")[2]
  const [filters,setFilters] = useState({})
  const [products, setProducts] = useState([]);
  const [keywords , setKeywords] = useState("");
  const navigate = useNavigate();
    const handleFilters = (event) =>{
        if (event && event.target) {
            const { value } = event.target.value;
            console.log(value);
            setSearchTerm({
              ...filters,
              [event.target.name] : value,
            });
          } else {
            console.error('Event or event.target is undefined');
          }
      }
      const handleSearch = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/products?category=${searchTerm}`);
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };
      const searchSubmitHandler = () =>{
        if(keywords.trim()){
          navigate(`/products/${keywords}`)
        }else if(keywords.length === 0){
          // navigate("/products/");
          <Products/>
        }
      }
  return (
    <>
        {/* <SearchBar
        value={searchTerm} 
        onChange={(e)=>setKeywords(e.target.value)}
        // onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        onKeyPress = {(e) => {e.key === "Enter" && searchSubmitHandler()}}
        /> */}
        <input
          className="header_searchInput"
          type="text"
          placeholder = "Search Products..."
          onChange={(e) => setKeywords(e.target.value)}
          onKeyDown={(e) => {
            e.key === "Enter" && searchSubmitHandler()
          }}
          style={{
            padding :'15px',
            margin: '15px',
            width : '90vw',
            outline : 'none'
          }}
        />
        <button className="search-btn" onClick={searchSubmitHandler}>
          <SearchIcon />
        </button>
        <Products/>
    </>
  )
}

export default Search