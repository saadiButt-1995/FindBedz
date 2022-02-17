import React from "react";
import BedsHeader from "../../Beds-Services/BedsHeader";
import Abc from "./Abc";
import Bedservices from "./Bedservices";
import Filters from "./Filters";

const FindAbed = () => {
  return (
    <>
      <BedsHeader />
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
    </>
  );
};

export default FindAbed;
