import React, { useEffect, useState } from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import {
  days,
  months,
  // results,
  // states,
  years,
} from "../../services/states_counties";
import { setUsersData, updateUserDetails } from "../../services/auth";
import DashboardNav from "../Auth/Navs/DashboardNav";
import { Wrapper } from "./Individual.styled";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Spinner from "../Loaders/buttonTailSpinner";

const IndividualEditprofile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user_data"));
  const user_id = localStorage.getItem("user");
  const token = `Bearer ${localStorage.getItem("token")}`;
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [states, setStates] = useState([]);

  const [counties, setCounties] = useState([]);
  const [users, setUser] = useState({
    userName: user.userName,
    password: user.password,
    phone: user.phone,
    nickName: user.nickName,
    ethnicity: user.ethnicity,
    role: user.role,
    gender: user.gender,
    date_of_birth: user.date_of_birth,
    county: user.county,
    state: user.state,
    email: user.email,
  });
  const ethnicities = [
    "MIXED RACE",
    "ARCTIC ( SIBERIAN, ESKIMO )",
    "CAUCASIAN ( INDIAN )",
    "CAUCASIAN ( MIDDLE EAST )",
    "CAUCASIAN ( NORTH AFRICAN, OTHER )",
    "INDIGENOUS AUSTRALIAN",
    "NATIVE AMERICAN",
    "NORTH EAST ASIAN  ( MONGOL, TIBETAN, KOREAN JAPANESE, ETC )",
    "PACIFIC (POLYNESIAN , MICRONESIAN, ETC)",
    "SOUTH EAST ASIAN (CHINESE,THAI, MALAY, FILIPINO, ETC)",
    "WEST AFRICAN, BUSHMEN, ETHIOPIAN",
    "OTHER RACE",
  ];

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
      setStates(unique);
    })();
  }, []);

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const changeState = (e) => {
    const state = e.target.value;
    setUser({ ...users, state: state });
    getCountiesOfState(state);
  };

  const changeCounty = (e) => {
    const county = e.target.value;
    setUser({ ...users, county: county });
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

  const toggle = () => {
    setOpen(!open);
  };

  const [errField, setErrField] = useState({
    // userNameErr: "",
    phoneErr: "",
  });

  let name, value;

  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;
    if (name === "zip_code") {
      if (value.length > 5) {
        return;
      }
    }
    setUser({ ...users, [name]: value });
  };

  useEffect(() => {
    /* eslint-disable */
    setDay(users.date_of_birth.split("-")[2]);
    setMonth(users.date_of_birth.split("-")[1]);
    setYear(users.date_of_birth.split("-")[0]);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!validForm()) {
      setLoading(false);
      toast.error("Validation Error!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (!year) {
      setLoading(false);
      toast.error("Please Select Year!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    users.date_of_birth = `${year}-${month}-${day}`;
    // if (users.password === "" || users.password === undefined) {
    // delete users.password;
    // }
    delete users.userName;
    delete users.role;
    delete users.password;
    if (users.county === "" || users.county === undefined) {
      delete users.county;
    }
    if (users.ethnicity === "" || users.ethnicity === undefined) {
      delete users.ethnicity;
    }
    if (users.date_of_birth === "" || users.date_of_birth === undefined) {
      delete users.date_of_birth;
    }
    if (users.date_of_birth === "" || users.date_of_birth === undefined) {
      delete users.date_of_birth;
    }
    if (users.state === "" || users.state === undefined) {
      delete users.state;
    }
    if (users.nickName === "" || users.nickName === undefined) {
      delete users.nickName;
    }
    try {
      var response = await updateUserDetails(users, user_id, token);
      if (response.status === 200) {
        setLoading(false);
        toast.success("Updated Successfully!", {
          position: toast.POSITION.TOP_CENTER,
        });
        setUsersData(user._id);
        setTimeout(() => {
          navigate("/individual-landingpage");
        }, 1500);
      } else {
        setLoading(false);
        toast.error("Fields Cannot be empty", {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log(response);
      }
    } catch (e) {
      setLoading(false);
      console.log("ERROR*************");
      toast.error(e.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const validForm = () => {
    let formIsValid = true;
    setErrField({
      // userNameErr: "",
      phoneErr: "",
    });
    // if (users.userName === "") {
    //   formIsValid = false;
    //   setErrField((prevState) => ({
    //     ...prevState,
    //     userNameErr: "Name is Required",
    //   }));
    // }
    let phoneVal = users.phone.trim();
    if (phoneVal === "" || phoneVal.length < 14) {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        phoneErr: "Invalid Phone Number",
      }));
    }

    return formIsValid;
  };

  const normalizeCardNumber = (value) => {
    let x = value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    let maskedText = !x[2]
      ? x[1]
      : "(" + x[1] + ") " + x[2] + (x[3] ? " - " + x[3] : "");
    return maskedText;
  };

  useEffect(() => {
    setTimeout(() => {
      /* eslint-disable */
      getCountiesOfState(users.state);
      // changeState(users.state)
    }, 1000);
  }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <Wrapper>
      <ToastContainer />
      <DashboardNav />
      <div className="account">
        <div className="popo">
          <img
            style={{ height: "50px" }}
            className=""
            src="/images/edit_user.svg"
            alt=""
          />
          <p
            style={{
              marginBottom: "0",
              fontFamily: "popbold",
              fontSize: "16px",
              color: "#151515",
              marginTop: "10px",
              letterSpacing: "2px",
            }}
          >
            EDIT PROFILE
          </p>
        </div>

        {/* <p style={{ marginBottom: "15px" }} className="indi_title">
          I AM AN INDIVIDUAL SEEKING SERVICES
        </p> */}
        <div className="form-row indi_flex"></div>
        <div>
          <form onSubmit={submit}>
            <div className="container">
              <div className="row justify-content-around">
                <div className="col-lg-6">
                  <div className="mb-3 label_input">
                    <label htmlFor="validationCustom01">
                      USERNAME <span className="star_red">*</span>
                    </label>
                    <input
                      name="userName"
                      value={users.userName}
                      onChange={handleInput}
                      type="text"
                      className="form-control login_field"
                      id="validationCustom01"
                      placeholder="Create a username"
                      disabled
                    />
                    {/* {errField.userNameErr.length > 0 && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "11px",
                          fontFamily: "popreg",
                        }}
                      >
                        {errField.userNameErr}
                      </span>
                    )} */}
                  </div>

                  <div className="mb-3 label_input">
                    <label htmlFor="validationCustom02">
                      SALUTATION (NICK NAME)
                    </label>
                    <input
                      name="nickName"
                      value={users.nickName}
                      onChange={handleInput}
                      type="text"
                      placeholder="Create a nickname"
                      className="form-control login_field"
                    />
                  </div>

                  <div className="form-group">
                    <label
                      className="label_input"
                      for="exampleFormControlSelect1"
                    >
                      ETHNICITY
                    </label>
                    <select
                      name="ethnicity"
                      onChange={handleInput}
                      className="form-control login_field"
                      id="exampleFormControlSelect1"
                      // selected={users.ethnicity}
                    >
                      <option className="login_field" selected disabled>
                        Enter Ethnicity
                      </option>
                      {ethnicities.map((item, index) => {
                        return (
                          <option
                            key={index}
                            className="login_field"
                            selected={item === users.ethnicity ? true : false}
                          >
                            {item}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="form-group" style={{ marginTop: "-5px" }}>
                    <label
                      className="label_input"
                      for="exampleFormControlSelect1"
                      onChange={handleInput}
                    >
                      GENDER
                    </label>
                    <select
                      name="gender"
                      onChange={handleInput}
                      className="form-control login_field"
                      id="exampleFormControlSelect1"
                    >
                      <option className="login_field" selected disabled>
                        Select Gender
                      </option>
                      <option
                        className="login_field"
                        value={"MALE"}
                        selected={users.gender === "MALE" ? true : false}
                      >
                        Male
                      </option>
                      <option
                        className="login_field"
                        value={"FEMALE"}
                        selected={users.gender === "FEMALE" ? true : false}
                      >
                        Female
                      </option>
                      <option
                        className="login_field"
                        value={"OTHER"}
                        selected={users.gender === "OTHER" ? true : false}
                      >
                        Other
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="label_input mb-3">
                    <label htmlFor="validationCustom03">
                      PASSWORD
                      <span
                        style={{
                          fontSize: "10px",
                          fontFamily: "popreg",
                          color: "#828282",
                        }}
                      >
                        (optional)
                      </span>
                    </label>
                    <input
                      name="password"
                      placeholder=""
                      onChange={handleInput}
                      type={open === false ? "password" : "text"}
                      value={users.password}
                      disabled
                      className="first form-control login_field"
                    />
                    {open === false ? (
                      <AiFillEyeInvisible className="svggg" onClick={toggle} />
                    ) : (
                      <AiFillEye className="svggg" onClick={toggle} />
                    )}
                  </div>
                  <div className="label_input mb-3">
                    <label htmlFor="validationCustom03">
                      PHONE NUMBER
                      <span
                        style={{
                          fontSize: "10px",
                          fontFamily: "popreg",
                          color: "#828282",
                        }}
                      >
                        <span className="star_red">*</span>
                      </span>
                    </label>
                    <span
                      className="input-group-text login_field"
                      id="basic-addon1"
                    >
                      +1
                    </span>
                    <input
                      placeholder="(###) ###-####"
                      type="tel"
                      inputMode="numeric"
                      name="text"
                      className="first form-control login_field login_fieldw"
                      id="text"
                      defaultValue={normalizeCardNumber(users.phone)}
                      onChange={(event) => {
                        const { value } = event.target;
                        users.phone = value;
                        event.target.value = normalizeCardNumber(value);
                      }}
                    />
                    {errField.phoneErr.length > 10 && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "11px",
                          fontFamily: "popreg",
                        }}
                      >
                        {errField.phoneErr}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label
                      className="label_input"
                      for="exampleFormControlSelect1"
                      style={{ display: "block" }}
                    >
                      DATE OF BIRTH{" "}
                      <span
                        className="star_red"
                        style={{
                          float: "right",
                          marginRight: "32%",
                          marginTop: "5px",
                        }}
                      >
                        *
                      </span>
                    </label>
                    <div class="row">
                      <div class="col-md-4  m-0 p-0 pr-3">
                        <select
                          onChange={(e) => setMonth(e.target.value)}
                          name=""
                          id=""
                          className="form-control login_field"
                        >
                          <option value="" selected disabled>
                            Select Month
                          </option>
                          {months.map((element) => {
                            return (
                              <option
                                selected={
                                  users.date_of_birth.split("-")[1] == element
                                    ? true
                                    : false
                                }
                                className="login_field"
                                value={element}
                              >
                                {element}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div class="col-md-4  m-0 p-0 pr-3">
                        <select
                          onChange={(e) => setDay(e.target.value)}
                          name=""
                          id=""
                          className="form-control login_field"
                        >
                          <option value="" selected disabled>
                            Select Day
                          </option>
                          {days.map((element) => {
                            return (
                              <option
                                selected={
                                  users.date_of_birth.split("-")[2] == element
                                    ? true
                                    : false
                                }
                                className="login_field"
                                value={element}
                              >
                                {element}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div class="col-md-4 m-0 p-0 pr-0">
                        <select
                          onChange={(e) => setYear(e.target.value)}
                          name=""
                          id=""
                          className="form-control login_field"
                        >
                          <option value="" selected disabled>
                            Select Year
                          </option>
                          {years.map((element) => {
                            return (
                              <option
                                selected={
                                  users.date_of_birth.split("-")[0] == element
                                    ? true
                                    : false
                                }
                                value={element}
                              >
                                {element}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    {/* <label
                      className="label_input"
                      for="exampleFormControlSelect1"
                    >
                      DATE OF BIRTH
                    </label>
                    <div className="">
                      <DropdownDate
                        startDate={                       // optional, if not provided 1900-01-01 is startDate
                          '1920-01-01'                    // 'yyyy-mm-dd' format only
                        }
                        endDate={                         // optional, if not provided current date is endDate
                          '2022-12-31'                    // 'yyyy-mm-dd' format only
                        }
                       
                        selectedDate={users.date_of_birth}
                        onYearChange={(year) => {
                        }}
                        onDayChange={(day) => {
                        }}
                        onMonthChange={(month) => {
                        }}
                        onDateChange={(date) => {
                          setSelectedDate(formatDate(date));
                        }}
                      />
                    </div> */}
                  </div>

                  <div className="row">
                    <div className="col-lg-6 pl-0 respon2">
                      <div className="mb-3 label_input">
                        <label htmlFor="validationCustom02">STATE</label>
                        <select
                          className="form-control login_field"
                          name="states"
                          id="states"
                          onChange={changeState}
                        >
                          <option className="login_field" selected disabled>
                            Select State
                          </option>
                          {states.map((item, index) => {
                            return (
                              <option
                                className="login_field"
                                key={index}
                                value={item}
                                selected={item === users.state ? true : false}
                              >
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 pr-0 respon">
                      <div className="mb-3 label_input">
                        <label htmlFor="validationCustom02">COUNTY</label>
                        <select
                          className="form-control login_field"
                          name="counties"
                          id="counties"
                          onChange={changeCounty}
                        >
                          {/* {users.state? */}
                          <option className="login_field" selected disabled>
                            Select County
                          </option>
                          {/* :null} */}
                          {counties.map((item, index) => {
                            return (
                              <option
                                className="login_field"
                                key={index}
                                value={item}
                                selected={item === users.county ? true : false}
                              >
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="signup_footer">
                {/* <Link to="/login" onClick={submit}> */}
                {loading ? (
                  <Spinner />
                ) : (
                  <>
                    <button
                      className="signupbtn1"
                      style={{ letterSpacing: "2px" }}
                      type={"submit"}
                    >
                      SUBMIT CHANGES
                    </button>
                    <Link className="" to="/">
                      <p className="footer_sign_up">Cancel</p>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default IndividualEditprofile;
