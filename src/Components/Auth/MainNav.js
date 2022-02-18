import React from 'react'
import { Link } from "react-router-dom";
import Container from '../../Components/container/Container'
const Home = () => {
      
    return (
        <Container dflex={true} center={true}>
            <Link to="/">
                <img src="/images/sheltorlogo.svg" alt="" />
            </Link>
        </Container>
    )
}

export default Home