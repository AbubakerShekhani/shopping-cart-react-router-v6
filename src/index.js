import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { HelmetProvider } from 'react-helmet-async'
import ProductsContextProvider from './contexts/ProductContext';
import ShoppingCartContextProvider from './contexts/ShoppingCartContext';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Shop from './pages/shop';
import Cart from './pages/cart';
import Contact from './pages/Contact'
import ProductList from './pages/shop/ProductList';
import ProductDetails from './pages/shop/ProductDetails';

ReactDOM.render(
  <HelmetProvider>
    <ProductsContextProvider>
      <ShoppingCartContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={(<div>Home <Link to="shop">Shop Now</Link> </div>)} />
            <Route path="shop" element={<Shop />} >
              <Route path="/" element={<ProductList />} />
              <Route path="product/:productId" element={<ProductDetails />} />
            </Route>
            <Route path="cart" element={<Cart />}/>
            <Route path="contact" element={<Contact />}/>
          </Routes>
        </Router>
      </ShoppingCartContextProvider>
    </ProductsContextProvider>
  </HelmetProvider>,
  document.getElementById('root')
);
