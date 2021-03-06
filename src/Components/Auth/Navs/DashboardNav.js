import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from '../../../services/auth';
import Container from '../../container/Container'

const Home = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [show] = useState((location.pathname === '/sheltor-dashboard' || 
                            location.pathname === '/individual-landingpage' || 
                            location.pathname === '/OrganizationLandingpage') 
                            ? true : false
                    )
    const signout = () => {
        logout()
        navigate('/')
    }
      
    return (
        <Container dflex={true} center={true}>
            <div className='row text-center'>
                <div className='col-md-4 col-md-sm-4'>
                    {!show?
                        <div className="back-home">
                            <Link to="/">
                            <img
                                src="images/dashhome.svg"
                                alt=""
                            />
                            </Link>
                            <img onClick={()=> navigate(-1)} className='back-button' src="/images/back.svg" alt="" />
                        </div>
                    :null}
                </div>
                <div className='col-md-4 col-md-sm-4 dashtittle'>
                    FindBedz
                </div>
                <div onClick={signout} className='logout col-md-4 col-md-sm-4 float-right'>
                    <img src="/images/logout.svg" alt="" />
                </div>

            </div>
            {/* <div className="dash_header">
                <div>
                    <h6 className="dashtittle">FindBedz</h6>
                </div>

                <div className="logdiv" onClick={signout}>
                    <Link to="/">
                    <img src="/images/logout.svg" alt="" />
                    </Link>
                </div>
            </div> */}
        </Container>
    )
}

export default Home