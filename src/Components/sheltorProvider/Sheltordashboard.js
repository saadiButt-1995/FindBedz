import React, { useState } from "react";
import { Link } from "react-router-dom";
function Sheltordashboard() {
  const [value, Setvalue] = useState(1);

  const increament = () => {
    if (value < 30) {
      Setvalue(value + 1);
    } else {
      Setvalue(30);
    }
  };
  const decreament = () => {
    if (value > 0) {
      Setvalue(value - 1);
    } else {
      Setvalue(0);
    }
  };

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
          <div>
            <p className="header_title">Last Updated On: 2 Hours Ago</p>
          </div>
          <div className="logout_div">
            <img src="/images/logout.svg" alt="" />
            <p className="header_title pl-3">Logout</p>
          </div>
        </div>
      </div>
      <div className="dashboard_container">
        <div className="frst_flex mb-3">
          <div className="progress12">
            <p className="RESERVATIONS mb-8 mt-4">CURRENTLY AVAILABLE BEDS</p>
            <div className="progress2">
              <div className="cricle_div13">{value}</div>
              <div className="calcu_btns">
                <button onClick={increament} className="plusbtn centrebtn">
                  +
                </button>
                <button
                  onClick={decreament}
                  className="plusbtn color_red centrebtn"
                >
                  -
                </button>
              </div>
            </div>
          </div>

          <div className="progress22">
            <p className="RESERVATIONS">RESERVATIONS</p>
            <div className="progress23">
              <div className="main_cal">
                <div className="main_cal1">
                  <p className="title_font">Total reserved beds</p>
                  <div
                    style={{ background: "black" }}
                    className="cricle_div1 set_width"
                  >
                    16
                  </div>
                </div>
              </div>
              <div className="main_cal">
                <div className="main_cal1">
                  <p className="title_font">Beds still available to Hold</p>
                  <div
                    style={{ background: "rgba(221, 193, 20, 1)" }}
                    className="cricle_div1 set_width"
                  >
                    6
                  </div>
                </div>
              </div>
            </div>
            <button className="managebtn">Manage Reservations</button>
          </div>
          <div className="progress3">
            <div style={{ background: "black" }} className="cricle_div2">
              34
            </div>
            <div className="card_title11">CURRENT OCCUPANTS</div>
          </div>
        </div>
        <div className="frst_flex">
          <div className="progress3">
            <img
              className="mt_bed"
              style={{ height: "60px" }}
              src="/images/set.svg"
              alt=""
            />
            <div className="card_title1">FIND BEDS IN OTHER SHELTERS</div>
          </div>
          <div className="progress3">
            <img style={{ height: "60px" }} src="/images/pen.svg" alt="" />
            <div className="card_title1">FIND OTHER SERVICES</div>
          </div>
          <div className="progress3">
            <img style={{ height: "60px" }} src="/images/bed3.svg" alt="" />
            <div className="card_title1">EDIT profile</div>
          </div>
        </div>
        <div className="frst_flex1"></div>
      </div>
    </>
  );
}

export default Sheltordashboard;
