import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './Auth.styled'

const Home = () => {
      
    return (
        <Wrapper>
            <div className='account text-center'>
                <div className="header_title">CREATE AN ACCOUNT</div>
                <div className="header_text">Please choose an option to continue</div>
                <div className="create_section">
                    <Link className="create_card mb-3" to="/Individual-signup">
                    <div className="">
                        <img src="/images/person.svg" alt="" />
                        <div className="card_title">INDIVIDUAL</div>
                    </div>
                    </Link>
                    <Link
                    style={{ paddingTop: "25px" }}
                    className="create_card mb-3"
                    to="/organization"
                    >
                    <div className="  creat_card11">
                        <img className="second_img" src="/images/Group 575.svg" alt="" />
                        <div style={{ paddingTop: "0" }} className="card_title">
                        ORGANIZATION/OUTREACH WORKER
                        </div>
                    </div>
                    </Link>

                    <Link className="create_card mb-3 " to="/sheltor-signup">
                    <div className=" creat_card2">
                        <img src="/images/doublebed.svg" alt="" />
                        <div className="card_title">SHELTER PROVIDER</div>
                    </div>
                    </Link>
                </div>
            </div>
        </Wrapper>
    )
}

export default Home