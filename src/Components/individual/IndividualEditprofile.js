import React, { useEffect, useState } from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { DropdownDate } from "react-dropdown-date";
import { Checkbox } from "antd";
import { basePath } from "../../config";
import moment from "moment";
import { Link } from "react-router-dom";
import { results, states } from "../../services/states_counties";

const IndividualEditprofile = () => {
  // const [open, setOpen] = useState(false);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [user, setUserData] = useState(
    JSON.parse(localStorage.getItem("user_data"))
  );

  const [phoneValue, setPhonevalue] = useState("");
  const [selectedDate, setSelectedDate] = useState("2022-2-2");
  const [counties, setCounties] = useState([]);
  const ethnicities = [
    "African American",
    "Native Americans",
    "Native",
    "Alaska Native",
    "White",
    "Asian American",
    "American Indian",
    "Hispanic and Latino Americans",
    "Mexicans",
    "Ojibwe",
    "Other",
  ];

  useEffect(() => {
    setSelectedDate(formatDate(moment(user.date_of_birth).format("llll")));
    setPhonevalue(normalizeCardNumber(user.phone));
  }, []);
  const formatDate = (date) => {
    // formats a JS date to 'yyyy-mm-dd'
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  const [users, setUser] = useState({
    userName: user.userName,
    password: "",
    phone: user.phone,
    nickName: user.nickName,
    ethnicity: user.ethnicity,
    role: user.role,
    date_of_birth: user.date_of_birth,
    county: user.county,
    state: user.state,
    email: user.email,
  });
  const navigate = useNavigate();

  const [errField, setErrField] = useState({
    userNameErr: "",
    nickName: "",
    phoneErr: "",
  });

  let name, value;

  const cancel = () => {
    setUser({
      userName: "",
      password: "",
      phone: "",
      nickName: "",
      ethnicity: "",
      role: "",
      date_of_birth: "",
      county: "",
      state: "",
      email: "",
    });
    setSelectedDate("2022-2-2");
  };
  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...users, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log("====================================");
    console.log(validForm());
    console.log("====================================");
    // if (validForm()) {
    users.date_of_birth = year + " " + month + " " + day;

    if (users.password === "" || users.password === undefined) {
      delete users.password;
    }
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
    users.phone = phoneValue;
    let url = `${basePath}users/${localStorage.getItem("user")}}`;
    let options = {
      method: "PUT",
      url: url,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: users,
    };
    //  try{
    await axios(options)
      .then((response) => {
        console.log(response);
        toast.success("Added Successfully!");
        setTimeout(() => {
          navigate("/individual-landingpage");
        }, 1500);
      })
      .catch((error) => {
        toast.error("Fields Cannot be empty");
        console.log(error.message, "  error ");
      });

    // console.log(response);
    // if (response.status === 200) {
    //   toast.success("Added Successfully!");
    //   setTimeout(() => {
    //     navigate("/login");
    //   }, 1500);
    // } else {
    //   toast.error("Something went wrong !");
    // }
    // } else {
    //   console.log(e, "error");
    //   toast.error("Something went wrong !");
  };
  // };

  const validForm = () => {
    let formIsValid = true;
    setErrField({
      userNameErr: "",
      nickName: "",
      phoneErr: "",
    });
    if (users.userName === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        userNameErr: "Name is Required",
      }));
    }

    if (phoneValue === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        phoneErr: "Phone Number is Required",
      }));
    }
    if (users.nickName === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        nickName: "NickName is Required",
      }));
    }

    return formIsValid;
  };
  const normalizeCardNumber = (value) => {
    let x = value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    let maskedText = !x[2]
      ? x[1]
      : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
    return maskedText;
  };

<<<<<<< HEAD
  const changeState = (e)=> {
    const state = e.target.value
    setUser({users, ['state']: state})
    getCountiesOfState(state)
  }

  const changeCounty = (e)=> {
    const county = e.target.value
    setUser({users, ['county']: county})
  }
=======
  const changeState = (e) => {
    const state = e.target.value;
    // setUser({users, ['state']: state})
    getCountiesOfState(state);
  };

  const changeCounty = (e) => {
    const county = e.target.value;
    // setUser({users, ['county']: county})
  };
>>>>>>> ffe148feb9f201e616eb378376c5409ebf7ab4cd

  const getCountiesOfState = (state) => {
    const data = results.filter((x) => x.state === state);
    setCounties(data);
  };

  return (
    <div>
      <ToastContainer />
      <div className="indi_signup">
        <div className="edit_header">
          <div className="edit_left_bts">
            <Link to="/">
              <img
                style={{ height: "29px", paddingRight: "10px" }}
                src="images/dashhome.svg"
                alt=""
              />
            </Link>
            <Link to="/individual-landingpage">
              <img style={{ height: "29px" }} src="/images/back.svg" alt="" />
            </Link>
          </div>
          <div
            style={{
              fontFamily: "patua",
              fontSize: "16px",
              paddingLeft: "32px",
            }}
          >
            FindBedz
          </div>
          <div style={{ cursor: 'pointer' }}>
            <img src="/images/logout.svg" alt=""></img>
          </div>
        </div>
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
            }}
          >
            EDIT PROFILE
          </p>
        </div>

        <p style={{ marginBottom: "15px" }} className="indi_title">
          I AM AN INDIVIDUAL SEEKING SERVICES
        </p>
        <div className="form-row indi_flex"></div>
        <div>
          <form onSubmit={submit}>
            <div className="container">
              <div className="row justify-content-around">
                <div className="col-lg-6">
                  <div className="mb-3 label_input">
                    <label htmlFor="validationCustom01">
                      CHOOSE USERNAME <span className="star_red">*</span>
                    </label>
                    <input
                      name="userName"
                      value={users.userName}
                      onChange={handleInput}
                      type="text"
                      className="form-control login_field"
                      id="validationCustom01"
                      placeholder="Create a username"
                    />
                    {errField.userNameErr.length > 0 && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "11px",
                          fontFamily: "popreg",
                        }}
                      >
                        {errField.userNameErr}
                      </span>
                    )}
                  </div>

                  <div className="mb-3 label_input">
                    <label htmlFor="validationCustom02">
                      NICK NAME <span className="star_red">*</span>
                    </label>
                    <input
                      name="nickName"
                      value={users.nickName}
                      onChange={handleInput}
                      type="text"
                      placeholder="Create a nickname"
                      className="form-control login_field"
                      id="validationCustom02"
                    />
                    {errField.nickName.length > 0 && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "11px",
                          fontFamily: "popreg",
                        }}
                      >
                        {errField.nickName}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label
                      className="label_input"
                      for="exampleFormControlSelect1"
                    >
                      Ethnicity
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
                            selected={item == users.ethnicity ? true : false}
                          >
                            {item}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="form-group">
                    <label
                      className="label_input"
                      for="exampleFormControlSelect1"
                      value={users.date_of_birth}
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
                      <option className="login_field">Male</option>
                      <option>Female</option>
                      <option>Other</option>
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
                      placeholder="************"
                      onChange={handleInput}
                      value={users.password}
                      type="number"
                      className="first form-control login_field"
                    />
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
                      // value={phoneValue}
                      inputMode="numeric"
                      autoComplete="cc-number"
                      name="cardNumber"
                      className="first form-control login_field login_fieldw"
                      id="cardNumber"
                      value={normalizeCardNumber(users.phone)}
                      onChange={(event) => {
                        const { value } = event.target;
                        setPhonevalue(value);
                        // setUser({users, ['phone']: value})
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
                    >
                      AGE
                    </label>
                    <div className="">
                      {/* <Datepicker /> */}
                      <DropdownDate
                        startDate={
                          // optional, if not provided 1900-01-01 is startDate
                          "1969-02-01" // 'yyyy-mm-dd' format only
                        }
                        endDate={
                          // optional, if not provided current date is endDate
                          "1999-11-01" // 'yyyy-mm-dd' format only
                        }
                        selectedDate={selectedDate}
                        onYearChange={(year) => {
                          setYear(year);
                        }}
                        onDayChange={(day) => {
                          setDay(day);
                        }}
                        onMonthChange={(month) => {
                          setMonth(month);
                        }}
                        onDateChange={(date) => {
                          setSelectedDate(formatDate(date));
                        }}
                      />
                    </div>
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
                          <option className="login_field" selected disabled>
                            Select County
                          </option>
                          {counties.map((item, index) => {
                            return (
                              <option
                                className="login_field"
                                key={index}
                                value={item.countyName}
                              >
                                {item.countyName}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Checkbox
                style={{ paddingLeft: "17px", paddingTop: "20px" }}
                onChange={onChange}
              >
                <span className="label_input">
                  SYSTEM WILL USE YOUR DEVICE’S LOCATION SERVICES
                </span>
              </Checkbox>
            </div>

            <div className="btn_center">
              {/* <Link to="/login" onClick={submit}> */}
              <button
                style={{ marginTop: "30px" }}
                className="signupbtn"
                type={"submit"}
              >
                Submit Changes
              </button>
              <button
                style={{
                  marginTop: "30px",
                  color: "#101b79",
                  background: "transparent",
                  border: "none",
                }}
                className="signupbtn"
                onClick={cancel}
                type={"button"}
              >
                Cancel
              </button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IndividualEditprofile;
