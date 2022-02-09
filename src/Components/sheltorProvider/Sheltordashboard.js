import React from "react";
import { Link } from "react-router-dom";
function Sheltordashboard() {
  return (
    <>
      <div className="row sheltor_dashboard pt-2">
        <Link to="/">
          <div className="col header_icon pl-10">
            <img
              style={{ height: "45px" }}
              src="/images/sheltorlogo.svg"
              alt=""
            />
          </div>
        </Link>

        <div className="col header_text">
          <div style={{ display: "flex", paddingRight: "30px" }}>
            <p className="header_title">Last Updated On: 2 Hours Ago</p>

            <div className="logout_div">
              <img src="/images/logout.svg" alt="" />
              <p className="header_title pl-3">Logout</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ paddingTop: "100px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-6">
              <div className="d-flex align-items-center justify-content-between">
                <div className="">
                  <p className="dashname">Dashboard</p>
                </div>
                <div className="">
                  <p className="dashname">SHELTER NAME</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-3 col-md-6">
              <div className="indiv_card">
                <img src="/images/bed_clinic.svg" alt="" />
                <div className="card_title">SEARCH FOR A BED</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="indiv_card">
                <img src="/images/services.svg" alt="" />
                <div className="card_title">FIND OTHER SERVICES</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="indiv_card">
                <img src="/images/bed_clinic.svg" alt="" />
                <div className="card_title">FIND BEDS IN OTHER SHELTERS</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="indiv_card">
                <img src="/images/edit_user.svg" alt="" />
                <div className="card_title">Reconnect with family</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sheltordashboard;
