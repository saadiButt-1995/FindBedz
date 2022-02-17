import React from "react";

const Filters = () => {
  return (
    <>
      <div className="main_filter">
        <div className="filter_title">Filters</div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            defaultValue="option1"
            defaultChecked
          />
          <label
            style={{ fontFamily: "popreg", fontWeight: "600" }}
            className="form-check-label ml-3"
            htmlFor="exampleRadios1"
          >
            SEARCH BY DISTANCE
          </label>
        </div>
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
          />
          <label
            style={{
              fontFamily: "popreg",
              fontWeight: "600",
              fontSize: "13px",
            }}
            className="custom-control-label"
            htmlFor="customSwitch1"
          >
            My Current Location
          </label>
        </div>
        <div
          style={{
            color: "red",
            fontFamily: "popreg",
            fontWeight: "600",
            textAlign: "center",
            paddingBottom: "10px",
          }}
        >
          OR
        </div>
        <div className="form-group col-lg-12 pl-0">
          {/* <label htmlFor="inputEmail4">Email</label> */}
          <input
            type="email"
            placeholder="Email"
            className="form-control label_input login_field"
            id="inputEmail4"
          />
        </div>
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            defaultValue="option1"
            defaultChecked
          />
          <label
            style={{ fontFamily: "popreg", fontWeight: "600" }}
            className="form-check-label ml-3"
            htmlFor="exampleRadios1"
          >
            Upto 2 Miles
          </label>
        </div>
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            defaultValue="option1"
            defaultChecked
          />
          <label
            style={{ fontFamily: "popreg", fontWeight: "600" }}
            className="form-check-label ml-3"
            htmlFor="exampleRadios1 ml-3"
          >
            Upto 4 Miles
          </label>
        </div>
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            defaultValue="option1"
            defaultChecked
          />
          <label
            style={{ fontFamily: "popreg", fontWeight: "600" }}
            className="form-check-label ml-3"
            htmlFor="exampleRadios1"
          >
            Upto 10 Miles
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            defaultValue="option1"
            defaultChecked
          />
          <label
            style={{ fontFamily: "popreg", fontWeight: "600" }}
            className="form-check-label ml-3"
            htmlFor="exampleRadios1"
          >
            Upto 20 Miles
          </label>
        </div>
        <div className="form-check mt-4 mb-4">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            defaultValue="option1"
            defaultChecked
          />
          <label
            style={{ fontFamily: "popreg", fontWeight: "600" }}
            className="form-check-label ml-3"
            htmlFor="exampleRadios1"
          >
            SEARCH by city
          </label>
        </div>
        <div className="form-group col-lg-12 pl-0">
          {/* <label htmlFor="inputEmail4">Email</label> */}
          <input
            type="email"
            placeholder="Type city name"
            className="form-control label_input login_field"
            id="inputEmail4"
          />
        </div>
        <div className="form-check mt-4 mb-4">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            defaultValue="option1"
            defaultChecked
          />
          <label
            style={{ fontFamily: "popreg", fontWeight: "600" }}
            className="form-check-label ml-3"
            htmlFor="exampleRadios1"
          >
            SEARCH by county
          </label>
        </div>
        <div className="form-group col-lg-12 pl-0">
          {/* <label htmlFor="inputEmail4">Email</label> */}
          <input
            type="email"
            placeholder="Select county"
            className="form-control label_input login_field"
            id="inputEmail4"
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            defaultValue="option1"
            defaultChecked
          />
          <label
            style={{ fontFamily: "popreg", fontWeight: "600" }}
            className="form-check-label ml-3"
            htmlFor="exampleRadios1"
          >
            Only Show Available Beds
          </label>
        </div>
        <div className="type_shelter">
          <div
            className="mt-3 mb-3"
            style={{ fontFamily: "popreg", fontWeight: "bold" }}
          >
            TYPE OF SHELTER
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              defaultValue="option1"
              defaultChecked
            />
            <label
              style={{ fontFamily: "popreg", fontWeight: "600" }}
              className="form-check-label ml-3 mb-3"
              htmlFor="exampleRadios1"
            >
              Adults (any gender)
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              defaultValue="option1"
              defaultChecked
            />
            <label
              style={{ fontFamily: "popreg", fontWeight: "600" }}
              className="form-check-label ml-3 mb-3"
              htmlFor="exampleRadios1"
            >
              Male Only
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              defaultValue="option1"
              defaultChecked
            />
            <label
              style={{ fontFamily: "popreg", fontWeight: "600" }}
              className="form-check-label ml-3 mb-3"
              htmlFor="exampleRadios1"
            >
              Female Only
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              defaultValue="option1"
              defaultChecked
            />
            <label
              style={{ fontFamily: "popreg", fontWeight: "600" }}
              className="form-check-label ml-3"
              htmlFor="exampleRadios1"
            >
              Family Friendly
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
