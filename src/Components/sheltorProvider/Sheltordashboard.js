import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../container/Container.styled";
import DashboardNav from '../Auth/Navs/DashboardNav'

function Sheltordashboard() {
  const [user] = useState(JSON.parse(localStorage.getItem('user_data')))
  
  return (
    <>
      <Wrapper>
      <DashboardNav/>
      <div className="popo">
        <img
          style={{ height: "50px" }}
          className=""
          src="/images/dashhome.svg"
          alt=""
        />
        <p
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            fontFamily: "popbold",
            fontSize: "16px",
            color: "#151515",
          }}
        >
          DASHBOARD
        </p>
      </div>
      <div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-12 col-md-6">
              <div className="d-flex align-items-center justify-content-between">
                <div className="">
                  <p className="dashname">{user.shelterName}</p>
                </div>
                <div className="">
                  <p className="dashname">{user.userName}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <Link to="/reservations">
                <div className="indiv_cardd">
                  <img src="/images/mange.svg" alt="" />
                  <div className="card_title">MANAGE RESERVATIONS</div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <Link to="/find-services">
                <div className="indiv_cardd">
                  <img src="/images/services.svg" alt="" />
                  <div className="card_title">FIND OTHER SERVICES</div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <Link to="/find-a-bed">
                <div className="indiv_cardd">
                  <img src="/images/bed.svg" alt="" />
                  <div className="card_title">FIND BEDS IN OTHER SHELTERS</div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <Link to="/shelter-editprofile">
                <div className="indiv_cardd">
                  <img src="/images/edit_user.svg" alt="" />
                  <div className="card_title">EDIT PROFILE</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </Wrapper>
    </>
  );
}

export default Sheltordashboard;
