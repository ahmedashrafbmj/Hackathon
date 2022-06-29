import React, { useEffect } from 'react'
import Header from './component/Home Layout/header';
import Main from './component/Home Layout/main';
import Footer from './component/Home Layout/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductDetails from './component/Product Details/productDetails'
import './App.css'
import Products from './component/allProducts/products';
import Login from './component/User/login';
import Signup from './component/User/signup';
import CreatePost from './component/Product Details/createProduct';
import Account from './component/User/account';
import CreateBooking from './component/Booking/createBooking';
import MyBooking from './component/Booking/myBooking';
import BookingDetails from './component/Booking/bookingDetails';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/product/:id' element={<ProductDetails />} />
        <Route exact path='/booking/:id' element={<BookingDetails />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/create' element={<CreatePost />} />
        <Route exact path='/account' element={<Account />} />
        <Route exact path='/book/:id' element={<CreateBooking />} />
        <Route exact path='/mybooking' element={<MyBooking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
