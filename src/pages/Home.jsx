import React from 'react';
import Main from '../components/Main';
import { Link } from "react-router-dom";
import logo from '../Nike-Logo-Practice-App.png'

const Home = () => {

  return (
    <Main title="Welcome to Shoe Store" description="Shoe Store Shopping Cart" >
      <div className="text-center mt-5">
        <h1>Shoe Store</h1>
      </div>
      <div className="text-center mb-20">
        <Link to="shop">Shop Now</Link>
      </div>
      <div className="text-center  mt-5 mb-5">
        <img src={logo} className="App-logo" alt="logo" width="500" />
      </div>
    </Main>
  )
}

export default Home
