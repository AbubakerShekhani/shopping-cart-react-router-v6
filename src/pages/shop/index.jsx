import React from 'react'
import Main from '../../components/Main'
import { Outlet, useNavigate } from 'react-router-dom';

const Shop = () => {

  let navigate = useNavigate();

  function handleClick() {
    navigate('/')
  }

  return (
    <Main title="Shop Now" description="Store page" >
      <div>
        <div className="text-center mt-5 mb-5">
          <h1>Shoe Store</h1>
          <button onClick={handleClick} className="btn btn-primary btn-sm" >Home</button>
        </div>
        <Outlet />
      </div>
    </Main>
   );
}

export default Shop;