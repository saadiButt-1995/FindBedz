import React from "react";
import { Link } from "react-router-dom";
function AgencyLandingpage() {
  return (
    <>
      <div className="signup_main">
        <Link to="/">
          <div className="logodiv logodiv11 mt-4 mb-3">
            <img src="/images/sheltorlogo.svg" alt="" />
          </div>
        </Link>

        <div className="indi_flex">
          <div className="indiv_card">
            <img src="/images/bed_clinic.svg" alt="" />
            <div className="card_title">SEARCH FOR A BED</div>
          </div>
          <div className="indiv_card mt-2">
            <img src="/images/services.svg" alt="" />
            <div className="card_title">FIND OTHER SERVICES</div>
          </div>
          <div className="indiv_card mt-2">
            <img src="/images/edit_user.svg" alt="" />
            <div className="card_title">EDIT PROFILE</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AgencyLandingpage;
