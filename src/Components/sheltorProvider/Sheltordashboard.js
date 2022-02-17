import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../services/auth";

function Sheltordashboard() {
  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem('user_data'))
  
  const signout = () => {
    logout()
    navigate('/')
  }
  return (
    <>
      <div className="edit_header">
        <div className="edit_left_bts">
          <Link to="/">
            <img
              style={{ height: "29px", paddingRight: "10px" }}
              src="images/dashhome.svg"
              alt=""
            />
          </Link>
          <Link to="/sheltor-signup">
            <img style={{ height: "29px" }} src="/images/back.svg" alt="" />
          </Link>
        </div>
        <div
          style={{
            fontFamily: "patua",
            fontSize: "16px",
            paddingLeft: "32px",
            paddingBottom: "10px",
          }}
        >
          FindBedz
        </div>
        <div style={{cursor: 'pointer'}} onClick={signout}>
          <img src="/images/logout.svg" alt=""></img>
        </div>
      </div>
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
          <div className="row">
            <div className="col-lg-12 col-md-6">
              <div className="d-flex align-items-center justify-content-between">
                <div className="">
                  <p className="dashname">Dashboard</p>
                </div>
                <div className="">
                  <p className="dashname">{user.shelterName}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-3 col-md-6">
              <div className="indiv_cardd">
                <img src="/images/mange.svg" alt="" />
                <div className="card_title">MANAGE RESERVATIONS</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="indiv_cardd">
                <img src="/images/services.svg" alt="" />
                <div className="card_title">FIND OTHER SERVICES</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="indiv_cardd">
                <img src="/images/bed_clinic.svg" alt="" />
                <div className="card_title">FIND BEDS IN OTHER SHELTERS</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="indiv_cardd">
                <img src="/images/edit_user.svg" alt="" />
                <div className="card_title">EDIT PROFILE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sheltordashboard;
