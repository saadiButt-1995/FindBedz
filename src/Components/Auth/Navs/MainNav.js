import React from 'react'
import { Link } from "react-router-dom";
import Container from '../../container/Container'
const Home = () => {
      
    return (
        <Container dflex={true} center={true}>
            <Link to="/">
                <img src="/images/sheltorlogo.svg" alt="" className='header_img'/>
            </Link>
        </Container>
    )
}

export default Home