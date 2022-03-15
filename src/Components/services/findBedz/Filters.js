import React, {useState} from "react";
import { results, states_with_nick } from "../../../services/states_counties";
import { Wrapper } from "./findbedz.styled";

const Filters = ({service, filters, updateFilters, toggleAvailableBeds, show_available_beds}) => {

  const [counties, setCounties] = useState([]);
  const [state, setState] = useState("")
  const [county, setCounty] = useState("")

  console.log(state);
  const changeState = (e)=> {
    setState(e.target.value)
    getCountiesOfState(e.target.value)
    filters.state = e.target.value
    updateFilters(filters)
  }

  const changeCounty = (e)=> {
    setCounty(e.target.value)
    filters.county = e.target.value
    updateFilters(filters)
  }

  const getCountiesOfState = (state)=> {
    const data = results.filter(x => x.state === state)
    setCounties(data)
  }
  const changeSearchBy = (e) => {
    filters.searchBy = e.target.value
    updateFilters(filters)
  }
  const changeUpto = (e) => {
    filters.upto = e.target.value
    updateFilters(filters)
  }
  const changeAddress = (e) => {
    filters.address = e.target.value
    updateFilters(filters)
  }
  const changeCity = (e) => {
    filters.city = e.target.value
    updateFilters(filters)
  }
  const changeShelterIsFor = (e) => {
    filters.shelterIsFor = e.target.value
    updateFilters(filters)
  }
  const toggleLocation = (e) => {
    console.log(e.target.value);
    if(e.target.value === 'true'){
      filters.currentLocation = false
    }else{
      filters.currentLocation = true
    }
    updateFilters(filters)
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
            value="distance"
            defaultValue={filters.searchBy}
            defaultChecked
            checked={filters.searchBy === "distance"?true:false}
            onClick={changeSearchBy}
          />
          <label
            className="form-check-label"
            htmlFor="searchby_distance"
            style={{fontSize: '14px'}}
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
              value={filters.currentLocation}
              onChange={toggleLocation}
              checked={filters.currentLocation}
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
              onChange={changeAddress}
            />
          </div>

          <div className="sub">
            <div className="form-check mb-1">
              <input
                className="form-check-input"
                type="radio"
                name="uptoRadio"
                value="2"
                id="uptoRadio1"
                defaultValue={filters.upto}
                checked={filters.upto === "2"?true:false}
                onClick={changeUpto}
              />
              <label
                className="form-check-label"
                htmlFor="uptoRadio1"
                style={{fontSize: '12px'}}
              >
                Upto 2 Miles
              </label>
            </div>
            <div className="form-check mb-1">
              <input
                className="form-check-input"
                type="radio"
                name="uptoRadio"
                value="4"
                id="uptoRadio2"
                defaultValue={filters.upto}
                checked={filters.upto === "4"?true:false}
                onClick={changeUpto}
              />
              <label
                className="form-check-label"
                htmlFor="uptoRadio2"
                style={{fontSize: '12px'}}
              >
                Upto 4 Miles
              </label>
            </div>
            <div className="form-check mb-1">
              <input
                className="form-check-input"
                type="radio"
                name="uptoRadio"
                value="10"
                id="uptoRadio3"
                defaultValue={filters.upto}
                checked={filters.upto === "10"?true:false}
                onClick={changeUpto}
              />
              <label
                className="form-check-label"
                htmlFor="uptoRadio3"
                style={{fontSize: '12px'}}
              >
                Upto 10 Miles
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="uptoRadio"
                value="20"
                id="uptoRadio4"
                defaultValue={filters.upto}
                checked={filters.upto === "20"?true:false}
                onClick={changeUpto}
              />
              <label
                className="form-check-label"
                htmlFor="uptoRadio4"
                style={{fontSize: '12px'}}
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
            value="city"
            defaultValue={filters.searchBy}
            defaultChecked
            onClick={changeSearchBy}
          />
          <label
            className="form-check-label"
            htmlFor="searchby_city"
            style={{fontSize: '14px'}}
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
              onChange={changeCity}
              />
          </div>
        </div>
        <div className="form-check mt-1 mb-1">
          <input
            className="form-check-input"
            type="radio"
            name="searchby"
            id="searchby_county"
            value="county"
            defaultValue={filters.searchBy}
            defaultChecked
            onClick={changeSearchBy}
          />
          <label
            className="form-check-label"
            htmlFor="searchby_county"
            style={{fontSize: '14px'}}
          >
            SEARCH BY COUNTY
          </label>
        </div>
        <div className="sub">
          <div className="form-inline row justify-content-between pl-0 pr-0">
            <select className="form-control col-lg-3 login_field" 
                style={{fontWeight: 'bold'}} name="state" id="state" onChange={changeState} >
                <option className="login_field" value="" selected>State</option>
                {states_with_nick.map((item, index)=> {
                  return (
                    <option className="login_field" key={index} value={item.name}>{item.abbreviation}</option>
                  )
                })}
            </select>
            
            <select className="form-control col-md-8 login_field" value={county} onChange={changeCounty}>
              {/* {!state? */}
                <option className="login_field" value="" selected disabled>Select County</option>
              {/* :null} */}
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
              onChange={toggleAvailableBeds}
              checked={show_available_beds}
            />
            <div
              className=""
              style={{ fontFamily: "popreg", fontWeight: "bold", fontSize: '14px' }}
            >
              ONLY SHOW AVAILABLE BEDS
            </div>
          </div>
          :null}


        <div className="type_shelter mt-2">
          <div
            className="mb-1"
            style={{ fontFamily: "popreg", fontWeight: "bold", fontSize: '14px' }}
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
                  id="adults"
                  value="adults"
                  defaultValue={filters.shelterIsFor}
                  defaultChecked
                  onClick={changeShelterIsFor}
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
                  id="male"
                  value="male"
                  defaultValue={filters.shelterIsFor}
                  defaultChecked
                  onClick={changeShelterIsFor}
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
                  id="female"
                  value="female"
                  defaultValue={filters.shelterIsFor}
                  defaultChecked
                  onClick={changeShelterIsFor}
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
                  id="family"
                  value="family"
                  defaultValue={filters.shelterIsFor}
                  defaultChecked
                  onClick={changeShelterIsFor}
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
