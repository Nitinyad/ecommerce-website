import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  // const [user,setUser ] = useState(null);

  // useEffect(()=>{
  //   const getUser = () => {
  //     fetch('http://localhost:5000/auth/login/success',{
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
  
  // console.log(user)
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home