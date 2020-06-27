import React from 'react'
import Main from '../../components/Main'
import { Outlet } from 'react-router-dom';

const Shop = () => {

  return (
    <Main title="Shop Now" description="Store page" >
      <div>
        <div className="text-center mt-5">
          <h1>Shoe Store</h1>
        </div>
        <Outlet />
      </div>
    </Main>
   );
}

export default Shop;