import React, { useState, useEffect } from "react";
// import { results, states_with_nick } from "../../../services/states_counties";
import AutoCompleteInput from "../../../Test";
import { Wrapper } from "./findbedz.styled";

const Filters = ({
  service,
  filters,
  updateFilters,
  toggleAvailableBeds,
  show_available_beds,
}) => {
  const [states, setStates] = useState([]);
  const [counties, setCounties] = useState([]);
  // const [state, setState] = useState("");
  // const [county, setCounty] = useState("");
  // const [address, setAddress] = useState("")

  useEffect(() => {
    (async () => {
      const where = encodeURIComponent(
        JSON.stringify({
          countyName: {
            $exists: true,
          },
          state: {
            $exists: true,
          },
        })
      );
      const response = await fetch(
        `https://parseapi.back4app.com/classes/Area?count=1&limit=1000000&order=state&keys=countyName,state,stateAbbreviation&where=${where}`,
        {
          headers: {
            "X-Parse-Application-Id":
              "VWAH9UbFty9tuCJVHIJPjYvH8OGcNyUTMkHH3UvL", // This is the fake app's application id
            "X-Parse-Master-Key": "UsYwiuputxOcEcYTZqWKshopMgEjElqA4U4Mcy9V", // This is the fake app's readonly master key
          },
        }
      );
      const data = await response.json(); // Here you have the data that you need
      let states = [];
      states = data.results.map((item) => {
        return item.state;
      });
      var unique = states.filter(onlyUnique);
      // console.log(unique);
      setStates(unique);
    })();
  }, []);

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const changeState = (e) => {
    const state = e.target.value;
    getCountiesOfState(state);
    filters.state = e.target.value;
    updateFilters(filters);
  };

  const changeCounty = (e) => {
    // const county = e.target.value;
    filters.county = e.target.value;
    updateFilters(filters);
  };

  const getCountiesOfState = (state) => {
    (async () => {
      const where = encodeURIComponent(
        JSON.stringify({
          state: state,
        })
      );
      const response = await fetch(
        `https://parseapi.back4app.com/classes/Area?limit=1000&order=state&keys=countyName,state,stateAbbreviation&where=${where}`,
        {
          headers: {
            "X-Parse-Application-Id":
              "VWAH9UbFty9tuCJVHIJPjYvH8OGcNyUTMkHH3UvL", // This is the fake app's application id
            "X-Parse-Master-Key": "UsYwiuputxOcEcYTZqWKshopMgEjElqA4U4Mcy9V", // This is the fake app's readonly master key
          },
        }
      );
      const data = await response.json(); // Here you have the data that you need
      let counties = data.results.map((item) => {
        return item.countyName;
      });
      var unique = counties.filter(onlyUnique);
      setCounties(unique.sort());
    })();
    // const data = results.filter((x) => x.state === state);
    // setCounties(data);
  };

  // console.log(state);

  const changeSearchBy = (e) => {
    filters.searchBy = e.target.value;
    updateFilters(filters);
  };
  const changeUpto = (e) => {
    filters.upto = e.target.value;
    updateFilters(filters);
  };
  // const changeAddress = (e) => {
  //   filters.address = e.target.value
  //   updateFilters(filters)
  // }
  const changeCity = (e) => {
    filters.city = e.target.value;
    updateFilters(filters);
  };
  const changeShelterIsFor = (e) => {
    filters.shelterIsFor = e.target.value;
    updateFilters(filters);
  };
  const toggleLocation = async (e) => {
    if (e.target.value === "true" || e.target.value === true) {
      console.log(true);
      filters.currentLocation = false;
    } else if (e.target.value === "false" || e.target.value === false) {
      console.log(false);
      filters.currentLocation = true;
      await myLatLng();
    }
    setTimeout(() => {
      updateFilters(filters);
    }, 500);
  };

  const getCoords = (coords) => {
    filters.coords = coords;
    setTimeout(() => {
      updateFilters(filters);
    }, 100);
  };
  const getCoords1 = (coords) => {
    filters.coords = coords;
    filters.currentLocation = false;
    setTimeout(() => {
      updateFilters(filters);
    }, 100);
  };

  const myLatLng = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getCoords(`${position.coords.latitude},${position.coords.longitude}`);
    });
  };

  useEffect(() => {
    /* eslint-disable */
    myLatLng();
  }, []);

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
            checked={filters.searchBy === "distance" ? true : false}
            onClick={changeSearchBy}
          />
          <label
            className="form-check-label"
            htmlFor="searchby_distance"
            style={{ fontSize: "14px" }}
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
              checked={filters.currentLocation ? true : false}
              disabled={filters.searchBy === "distance" ? false : true}
            />
            <label className="custom-control-label" htmlFor="customSwitch1">
              My Current Location
            </label>
          </div>
          <div className="or">OR</div>
          <div className="form-group col-lg-12 pl-0 pr-0">
            {/* <label htmlFor="inputEmail4">Email</label> */}

            {/* <input
              type="text"
              placeholder="Type your address"
              className="form-control login_field"
              onChange={changeAddress}
            /> */}

            <AutoCompleteInput
              getCoords={getCoords1}
              on={filters.currentLocation}
              disable={filters.searchBy === "distance" ? false : true}
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
                // checked={filters.upto === "2"?true:false}
                onClick={changeUpto}
                disabled={filters.searchBy === "distance" ? false : true}
              />
              <label
                className="form-check-label"
                htmlFor="uptoRadio1"
                style={{ fontSize: "12px" }}
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
                // checked={filters.upto === "4"?true:false}
                onClick={changeUpto}
                disabled={filters.searchBy === "distance" ? false : true}
              />
              <label
                className="form-check-label"
                htmlFor="uptoRadio2"
                style={{ fontSize: "12px" }}
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
                // checked={filters.upto === "10"?true:false}
                onClick={changeUpto}
                disabled={filters.searchBy === "distance" ? false : true}
              />
              <label
                className="form-check-label"
                htmlFor="uptoRadio3"
                style={{ fontSize: "12px" }}
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
                // checked={filters.upto === "20"?true:false}
                onClick={changeUpto}
                disabled={filters.searchBy === "distance" ? false : true}
              />
              <label
                className="form-check-label"
                htmlFor="uptoRadio4"
                style={{ fontSize: "12px" }}
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
            onClick={changeSearchBy}
          />
          <label
            className="form-check-label"
            htmlFor="searchby_city"
            style={{ fontSize: "14px" }}
          >
            SEARCH BY CITY
          </label>
        </div>

        <div className="sub mt-2">
          <div className="form-inline row justify-content-between pl-0 pr-0">
            <select
              className="form-control col-lg-4 login_field"
              disabled={filters.searchBy === "city" ? false : true}
              style={{ fontWeight: "bold" }}
              name="state"
              id="state"
              onChange={changeState}
            >
              <option className="login_field" value="" selected>
                State
              </option>
              {states.map((item, index) => {
                return (
                  <option className="login_field" key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>

            <input
              type="text"
              placeholder="Type city name"
              className="form-control label_input login_field col-lg-7"
              onChange={changeCity}
              disabled={filters.searchBy === "city" ? false : true}
            />
          </div>
        </div>

        <div className="form-check mt-2 mb-1">
          <input
            className="form-check-input"
            type="radio"
            name="searchby"
            id="searchby_county"
            value="county"
            defaultValue={filters.searchBy}
            onClick={changeSearchBy}
          />
          <label
            className="form-check-label"
            htmlFor="searchby_county"
            style={{ fontSize: "14px" }}
          >
            SEARCH BY COUNTY
          </label>
        </div>
        <div className="sub">
          <div className="form-inline row justify-content-between pl-0 pr-0">
            <select
              className="form-control col-lg-4 login_field"
              disabled={filters.searchBy === "county" ? false : true}
              style={{ fontWeight: "bold" }}
              name="state"
              id="state"
              onChange={changeState}
            >
              <option className="login_field" value="" selected>
                State
              </option>
              {states.map((item, index) => {
                return (
                  <option className="login_field" key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>

            <select
              className="form-control col-md-7 login_field"
              value={filters.county}
              onChange={changeCounty}
              disabled={filters.searchBy === "county" ? false : true}
            >
              {/* {!state? */}
              <option className="login_field" value="" selected disabled>
                Select County
              </option>
              {/* :null} */}
              {counties.map((item) => {
                return (
                  <option className="login_field" value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        {!service ? (
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
              style={{
                fontFamily: "popreg",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              ONLY SHOW AVAILABLE BEDS
            </div>
          </div>
        ) : null}

        <div className="type_shelter mt-2">
          <div
            className="mb-1"
            style={{
              fontFamily: "popreg",
              fontWeight: "bold",
              fontSize: "14px",
            }}
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
                  id="all"
                  value="all"
                  defaultChecked
                  defaultValue={filters.shelterIsFor}
                  onClick={changeShelterIsFor}
                />
                <label className="form-check-label mb-1" htmlFor="all">
                  All
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="adults"
                  value="adults"
                  defaultValue={filters.shelterIsFor}
                  onClick={changeShelterIsFor}
                />
                <label className="form-check-label mb-1" htmlFor="adults">
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
                  onClick={changeShelterIsFor}
                />
                <label className="form-check-label mb-1" htmlFor="male">
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
                  onClick={changeShelterIsFor}
                />
                <label className="form-check-label mb-1" htmlFor="female">
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
                  onClick={changeShelterIsFor}
                />
                <label className="form-check-label" htmlFor="family">
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
