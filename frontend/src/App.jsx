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
      </Routes>
    </Router>
  )
}
export default App