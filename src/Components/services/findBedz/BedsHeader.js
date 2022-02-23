import React from "react";
import { Wrapper } from "./findbedz.styled";
const BedsHeader = () => {
  return (
    <Wrapper>
      <div className="account">
        <img
          className="dashboard_image"
          src="/images/sleepbed.svg"
          alt=""
        />
        <p className="header_title">FIND A BED</p>
      </div>
    </Wrapper>
  );
};

export default BedsHeader;
