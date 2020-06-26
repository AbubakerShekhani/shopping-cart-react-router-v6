import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { HelmetProvider } from 'react-helmet-async'
import ProductsContextProvider from './contexts/ProductContext';
import ShoppingCartContextProvider from './contexts/ShoppingCartContext';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Shop from './pages/shop';
import Cart from './pages/cart';
import Contact from './pages/Contact'

ReactDOM.render(
  <HelmetProvider>
    <ProductsContextProvider>
      <ShoppingCartContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="cart" element={<Cart />}/>
            <Route path="contact" element={<Contact />}/>
          </Routes>
        </Router>
      </ShoppingCartContextProvider>
    </ProductsContextProvider>
  </HelmetProvider>,
  document.getElementById('root')
);
