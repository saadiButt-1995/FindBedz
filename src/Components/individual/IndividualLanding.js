import React from "react";
import { Link } from "react-router-dom";

function IndividualLanding() {
  return (
    <div className="signup_main">
      <Link to="/">
        <div className="logodiv logodiv11">
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
        <Link to="/edit-profile">
          <div className="indiv_card mt-2">
            <img src="/images/edit_user.svg" alt="" />
            <div className="card_title">EDIT PROFILE</div>
          </div>
        </Link>

        <div className="indiv_card mt-2">
          <img src="/images/family.svg" alt="" />
          <div className="card_title">Reconnect with family</div>
        </div>
      </div>
    </div>
  );
}

export default IndividualLanding;
