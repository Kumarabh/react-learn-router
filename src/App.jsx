import React from 'react';
import About from './components/about-us/About';
import ContactUs from './components/contact-us/ContactUs';
import Home from './components/home-page/Home';
import Profile from './components/profile-page/ProfilePage';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './components/error/error';
import './App.css'
import Navbar from './components/navbar/Navbar';
function App() {

    return (
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route path='contact-us' element={<ContactUs />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='about-us' element={<About />} />
                    <Route path='*' element={<Error />} />
                </Route>
            </Routes>
            </BrowserRouter>
    )
}

export default App;