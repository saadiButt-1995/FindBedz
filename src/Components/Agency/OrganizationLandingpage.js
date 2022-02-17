import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../services/auth";

function OrganizationLandingpage() {
  const navigate = useNavigate()
  const signout = () => {
    logout()
    navigate('/')
  }

  return (
    <>
    <div>
      <div className="dash_header">
        <div>
          <h6 className="dashtittle">FindBedz</h6>
        </div>
        <div className="logdiv" style={{cursor: 'pointer'}} onClick={signout}>
          <img src="/images/logout.svg" alt="" />
        </div>
      </div>
      <div className="dashlogg">
        <Link to="/">
          <img className="dashlogg" src="/images/dashhome.svg" alt="" />
        </Link>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-6">
            <div className="d-flex align-items-center justify-content-between">
              <div className="dashnamediv">
                <p className="dashname">Dashboard</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 col-md-6">
            <div className="indiv_card">
              <img src="/images/indibed.svg" alt="" />
              <div className="card_title">FIND A BED</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="indiv_card">
              <img src="/images/hath.svg" alt="" />
              <div className="card_title">FIND SERVICES</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
              <div className="indiv_card">
                <img src="/images/arrangeARide.svg" alt="" height="74px" />
                <div className="card_title" style={{ marginTop: '-10px'}}>ARRANGE A RIDE</div>
              </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 col-md-6">
            <div className="indiv_card">
              <img src="/images/family.svg" alt="" />
              <div className="card_title">RECONNECT WITH FAMILY</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="indiv_card">
              <img src="/images/job.svg" alt="" />
              <div className="card_title">FIND A JOB</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <Link to="/organization-edit-profile">
              <div className="indiv_card">
                <img src="/images/edit_user.svg" alt="" />
                <div className="card_title">EDIT PROFILE</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default OrganizationLandingpage;
