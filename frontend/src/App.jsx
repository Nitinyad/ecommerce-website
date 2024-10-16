import Home from "./pages/Home"
import Login from "./pages/Login"
import Product from "./pages/Product"
import Register from "./pages/Register"
import Cart from './pages/Cart'
import ProductList from "./pages/ProductList"
import Success from './pages/Success'
import {
  BrowserRouter as Router,
  Routes , 
  Route,
} from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import Search from './pages/Search'
import CompareProduct from "./pages/CompareProduct"

import { Toaster } from 'react-hot-toast';
import Wishlist from "./pages/Wishlist"
import Profile from "./pages/Profile"
  //router -- routes -- route (path element navigate)
const App = () =>{ 
  // const [user,setUser ] = useState(null);
  const user = useSelector((state) => state.user.currentUser);// -- before google authentication

  // useEffect(()=>{
  //   const getUser = () => {
  //     fetch('http://localhost:5000/api/auth/login/success',{
  //       method : "GET",
  //       credentials: "include",
  //       headers:{
  //         Accept : "application/json",
  //         "Content-Type" : "application/json",
  //         "Access-Control-Allow-Credentials" : true,
  //       }
  //     }).then((res)=>{
  //       if(res.status === 200) return res.json(); 
  //       throw new Error("Authentication has been failed")
  //     }).then(resObject =>{
  //       setUser(resObject.user)
  //     }).catch(err =>{
  //       console.log(err)
  //     })
  //   }
  //   getUser()
  // },[])
  
  console.log(user)
  return (
    <>
    <div>
    <Toaster
          position='top-center'
          toastOptions={{
            success:{
              theme:{
                primary: "#4aed88"
              }
            }
          }}
        ></Toaster>
    </div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home style={{overflow:"hidden" }}/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={user ? <Cart/> : <Login/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login/>}/>
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/product/compare" element={<CompareProduct/>}/>
        <Route path="/product/wishlist" element={<Wishlist/>}></Route>
      </Routes>
    </Router>
    </>
  )
}
export default App