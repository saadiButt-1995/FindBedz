import React from "react";
import { Wrapper } from "./findServices.styled";
const ServiceHeader = () => {
  return (
    <Wrapper>
      <div className="account">
        <img
          className="dashboard_image"
          src="/images/services.svg"
          alt=""
        />
        <p className="header_title">FIND SERVICES</p>
      </div>
    </Wrapper>
  );
};

export default ServiceHeader;
