import React from "react";
import { Link } from "react-router-dom";
const BedsHeader = () => {
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
          <Link to="/individual-landingpage">
            <img style={{ height: "29px" }} src="/images/back.svg" alt="" />
          </Link>
        </div>
        <div
          style={{
            fontFamily: "patua",
            fontSize: "16px",
            paddingLeft: "32px",
          }}
        >
          FindBedz
        </div>
        <div>
          <img src="/images/logout.svg" alt=""></img>
        </div>
      </div>
      <div className="popo">
        <img
          style={{ height: "40px" }}
          className="slepp"
          src="/images/sleepbed.svg"
          alt=""
        />
        <p className="beds_tittle">FIND A BED</p>
      </div>
    </>
  );
};

export default BedsHeader;
