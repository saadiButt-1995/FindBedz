import React from 'react'
import { Link } from "react-router-dom";
import { Wrapper } from '../../Components/Auth/Auth.styled'

const Home = () => {
      
    return (
        <Wrapper>
            <div className="account">
                <div className="logindiv">
                    <Link to="/login">
                    <button className="loginbtn">Login</button>
                    </Link>
                    <div className="logtext">to my Account</div>
                </div>
            </div>
            <div className="creat_account">
                <div className="logtext logtext2">No Account? Create one here</div>
                <Link to="/register">
                    <button className="creatbtn">Create Account</button>
                </Link>
            </div>
        </Wrapper>
    )
}

export default Home