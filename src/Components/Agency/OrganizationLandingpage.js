import React from "react";
import { Link } from "react-router-dom";
function OrganizationLandingpage() {
  return (
    <>
      <div>
        <div className="dash_header">
          <div>
            <h6 className="dashtittle">FindBedz</h6>
          </div>

          <div className="logdiv">
            <Link to="/">
              <img src="/images/logout.svg" alt="" />
            </Link>
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
              <Link to="/IndividualEditprofile">
                <div className="indiv_card">
                  <img src="/images/ride.svg" alt="" />
                  <div className="card_title">ARRANGE A RIDE</div>
                </div>
              </Link>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 col-md-6">
              <div className="indiv_card">
                <img src="/images/family.svg" alt="" />
                <div className="card_title">Reconnect with family</div>
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
