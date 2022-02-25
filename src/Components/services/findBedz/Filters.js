import React, {useState} from "react";
import { results, states_with_nick } from "../../../services/states_counties";
import { Wrapper } from "./findbedz.styled";

const Filters = ({service}) => {

  const [counties, setCounties] = useState([]);
  const [state, setState] = useState("")
  const [county, setCounty] = useState("")

  const changeState = (e)=> {
    setState(e.target.value)
    getCountiesOfState(e.target.value)
  }

  const changeCounty = (e)=> {
    setCounty(e.target.value)
  }

  const getCountiesOfState = (state)=> {
    const data = results.filter(x => x.state === state)
    setCounties(data)
  }
  return (
    <Wrapper>
      <div className="main_filter">
        <div className="filter_title">Filters</div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="searchby"
            id="searchby_distance"
            defaultValue="option1"
            defaultChecked
          />
          <label
            className="form-check-label"
            htmlFor="searchby_distance"
          >
            SEARCH BY DISTANCE
          </label>
        </div>
        <div className="sub">
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1"
              defaultChecked
            />
            <label
              className="custom-control-label"
              htmlFor="customSwitch1"
            >
              My Current Location
            </label>
          </div>
          <div className="or">
            OR
          </div>
          <div className="form-group col-lg-12 pl-0 pr-0">
            {/* <label htmlFor="inputEmail4">Email</label> */}
            <input
              type="email"
              placeholder="Type your address"
              className="form-control login_field"
              id="inputEmail4"
            />
          </div>

          <div className="sub">
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="uptoRadio"
                id="uptoRadio1"
                defaultValue="option1"
              />
              <label
                className="form-check-label"
                htmlFor="uptoRadio1"
              >
                Upto 2 Miles
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="uptoRadio"
                id="uptoRadio2"
                defaultValue="option1"
              />
              <label
                className="form-check-label"
                htmlFor="uptoRadio2"
              >
                Upto 4 Miles
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="uptoRadio"
                id="uptoRadio3"
                defaultValue="option1"
              />
              <label
                className="form-check-label"
                htmlFor="uptoRadio3"
              >
                Upto 10 Miles
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="uptoRadio"
                id="uptoRadio4"
                defaultValue="option1"
              />
              <label
                className="form-check-label"
                htmlFor="uptoRadio4"
              >
                Upto 20 Miles
              </label>
            </div>
          </div>
        </div>
        
        <div className="form-check mt-2 mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="searchby"
            id="searchby_city"
            defaultValue="option1"
            defaultChecked
          />
          <label
            className="form-check-label"
            htmlFor="searchby_city"
          >
            SEARCH BY CITY
          </label>
        </div>
        <div className="sub">
          <div className="form-group col-lg-12 pl-0 pr-0">
            <input
              type="text"
              placeholder="Type city name"
              className="form-control label_input login_field"
              id="inputEmail4"
              />
          </div>
        </div>
        <div className="form-check mt-1 mb-1">
          <input
            className="form-check-input"
            type="radio"
            name="searchby"
            id="searchby_county"
            defaultValue="option1"
            defaultChecked
          />
          <label
            className="form-check-label"
            htmlFor="searchby_county"
          >
            SEARCH BY COUNTY
          </label>
        </div>
        <div className="sub">
          <div className="form-inline row justify-content-between pl-0 pr-0">
            <select className="form-control col-lg-3 login_field" style={{fontWeight: 'bold'}} name="state" id="state" onChange={changeState} >
                {/* <option className="login_field" selected disabled>Select State</option> */}
                {states_with_nick.map((item, index)=> {
                  return (
                    <option className="login_field" key={index} value={item.name} selected>{item.abbreviation}</option>
                  )
                })}
            </select>
            
            <select className="form-control col-md-8 login_field" value={county} onChange={changeCounty}>
              {!state?
                <option className="login_field" value="" selected disabled>Select County</option>
              :null}
              {counties.map((item)=> {
                return (
                  <option className="login_field" value={item.countyName}>{item.countyName}</option>
                )
              })}
            </select>
          </div>
        </div>
        {!service?
          <div className="form-check my-4">
            <input
              className="form-check-input"
              type="checkbox"
              name="show_available_bed"
              id="show_available_bed"
              defaultValue="option1"
              defaultChecked
            />
            <div
              className=""
              style={{ fontFamily: "popreg", fontWeight: "bold" }}
            >
              ONLY SHOW AVAILABLE BEDS
            </div>
          </div>
          :null}


        <div className="type_shelter mt-2">
          <div
            className="mb-1"
            style={{ fontFamily: "popreg", fontWeight: "bold" }}
          >
            TYPE OF SHELTER
          </div>
          
          <div className="sub">
            <div className="sub">
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
                  className="form-check-label mb-1"
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
                  className="form-check-label mb-1"
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
                  className="form-check-label mb-1"
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
                  className="form-check-label"
                  htmlFor="exampleRadios1"
                >
                  Family Friendly
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Filters;
