import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./organization.styled";
import DashboardNav from '../Auth/Navs/DashboardNav'

function OrganizationLandingpage() {
  const [user] = useState(JSON.parse(localStorage.getItem('user_data')))

  return (
    <Wrapper>
      <DashboardNav/>      
      <div className="account">
        <Link to="/">
          <img className="dashboard_image" src="/images/dashhome.svg" alt="" />
        </Link>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <p className="header_title">Dashboard</p>
            </div>
          </div>
          <div className="row pl-2 pr-5 mt-5">
            <div className="col-lg-12 col-md-6">
              <div className="d-flex align-items-center justify-content-between">
                <div className="">
                  <p className="dashname">{user.organization}</p>
                </div>
                <div className="">
                  <p className="dashname">{user.userName}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-4 col-md-6">
              <Link to="/find-a-bed">
                <div className="indiv_card">
                  <img src="/images/indibed.svg" alt="" />
                  <div className="card_title">FIND A BED</div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6">
              <Link to="/find-services">
                <div className="indiv_card">
                  <img src="/images/hath.svg" alt="" />
                  <div className="card_title">FIND SERVICES</div>
                </div>
              </Link>
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
    </Wrapper>
  );
}

export default OrganizationLandingpage;
