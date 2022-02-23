import React from "react";
import BedsHeader from "./BedsHeader";
import Abc from "./Abc";
import Bedservices from "./Bedservices";
import Filters from "./Filters";
import { Wrapper } from "./findbedz.styled";
import DashboardNav from '../../Auth/Navs/DashboardNav'

const FindAbed = () => {
  return (
    <>
    <Wrapper>


      {/* <BedsHeader />
      <div class="account">
        <div className="find_services">
          <div className="filters">
            <Filters />
          </div>
          <div className="bed_services">
            <Bedservices />
          </div>
          <div className="abc_section">
            <Abc />
          </div>
        </div>
      </div> */}


    <DashboardNav/>
    <BedsHeader />
      <div class="account">
        <div class="row">
          <div class="col-md-3">
            <div className="filters">
              <Filters />
            </div>
          </div>
          <div class="col-md-6 m-0">
            <div class="beds">
            <Bedservices />
            </div>
          </div>
          <div class="col-md-3 m-0 pl-0 pr-2">
            <div class="company">
              <Abc />
            </div>
          </div>
      </div>
    </div>
    </Wrapper>
      
    </>
  );
};

export default FindAbed;
