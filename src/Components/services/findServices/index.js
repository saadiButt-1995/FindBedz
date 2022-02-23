import React from "react";
import ServiceHeader from "./ServiceHeader";
import ServicesTable from "./ServicesTable";
import ServicesList from "./ServicesList";
import Filters from "../findBedz/Filters";
import { Wrapper } from "./findServices.styled";
import DashboardNav from '../../Auth/Navs/DashboardNav'

const FindAbed = () => {
  return (
    <>
    <Wrapper>

    <DashboardNav/>
    <ServiceHeader />
      <div class="account">
        <div class="row">
          <div class="col-md-3">
            <div className="filters">
              <Filters />
            </div>
          </div>
          <div class="col-md-8 m-0">
            <div class="services">
                <div class="row">
                    <div class="col-md-12">
                        <ServicesList />
                    </div>
                    <div class="col-md-12">
                        <ServicesTable/>
                    </div>
                </div>
            {/* <Bedservices /> */}
            </div>
          </div>
      </div>
    </div>
    </Wrapper>
      
    </>
  );
};

export default FindAbed;
