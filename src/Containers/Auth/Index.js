import React from 'react'
import { Routes, Route } from "react-router-dom"
import Landingpage from '../../Components/Auth/LandingPage'
import Login from '../../Components/Auth/Login'
import Register from '../../Components/Auth/Register'
import MainNav from '../../Components/Auth/Navs/MainNav'

const Home = () => {
      
    return (
        <>
            <MainNav />
            <Routes>
                <Route path="" element={<Landingpage />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Routes>
        </>
    )
}

export default Home