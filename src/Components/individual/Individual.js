import React, { useState } from "react";
import "../../index.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import axios from "axios";
import { DropdownDate } from "react-dropdown-date";
import { Checkbox } from "antd";

const Individual = () => {
  const [open, setOpen] = useState(false);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
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

  // const [date, setDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState("2012-1-1");
  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };
  const [users, setUser] = useState({
    userName: "",
    password: "",
    phone: "",
    nickName: "",
    ethnicity: "",
    role: "user",
    date_of_birth: "",
    county: "",
    state: "",
    email: "texxt@gmail.com",
  });
  const navigate = useNavigate();

  // const [errField, setErrField] = useState({
  //   userNameErr: "",
  //   passwordErr: "",
  //   phoneErr: "",
  //   nickNameErr: "",
  //   ethnicityErr: "",
  //   // role: "user",
  //   date_of_birthErr: "",
  //   countyErr: "",
  //   stateErr: "",
    // email: "test@gmail.com",
  // });

  let name, value;
  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...users, [name]: value });
  };
  console.log(users);

  const submit = async (e) => {
    e.preventDefault();
    // if (validForm()) {
    users.date_of_birth = year + " " + month + " " + day;
    console.log(users.date_of_birth, "  date of birth");
    let url = "https://shelterprovider.herokuapp.com/v1/auth/registerUser";
    let options = {
      method: "POST",
      url: url,
      headers: {},
      data: users,
    };
    //  try{
    let response = await axios(options);

    console.log(response);
    if (response.status === 200) {
      toast.success("Added Successfully!");
      setTimeout(() => {

        navigate("/login");
      }, 1500);
    } else {
      toast.error("Something went wrong !");
    }
    // } else {
    //   console.log(e, "error");
    //   toast.error("Something went wrong !");
    // }
  };

  // const validForm = () => {
  //   let formIsValid = false;
  //   setErrField({
  //     userNameErr: "",
  //     passwordErr: "",
  //     phoneErr: "",
  //     nickNameErr: "",
  //     ethnicityErr: "",
  //     // role: "user",
  //     date_of_birthErr: "",
  //     countyErr: "",
  //     stateErr: "",
  //   });
  //   if (users.userName === "") {
  //     formIsValid = true;
  //     setErrField((prevState) => ({
  //       ...prevState,
  //       userNameErr: "Please Enter Name",
  //     }));
  //   }

  //   if (users.phone === "") {
  //     formIsValid = false;
  //     setErrField((prevState) => ({
  //       ...prevState,
  //       passwordErr: "Please Enter Password",
  //     }));
  //   }
  //   if (users.nickName === "") {
  //     formIsValid = true;
  //     setErrField((prevState) => ({
  //       ...prevState,
  //       nickNameErr: "Please Enter NickName",
  //     }));
  //   }
    // if (users.role === "") {

    //   setErrField((prevState) => ({
    //     ...prevState,
    //     roleErr: "Please Enter your phone number",
    //   }));
    // }

    // if (users.ethnicity === "") {
    //   formIsValid = false;
    //   setErrField((prevState) => ({
    //     ...prevState,
    //     ethnicityErr: "Please Enter your Ethnicity",
    //   }));
    // }
    // if (users.date_of_birth === "") {
    //   formIsValid = false;
    //   setErrField((prevState) => ({
    //     ...prevState,
    //     date_of_birthErr: "Please check out this field",
    //   }));
    // }

  //   return formIsValid;
  // };

  return (
    <div>
      <ToastContainer />
      <div className="indi_signup">
        <Link to="/">
          <div className="logodiv login_log">
            <img className="login_logo" src="/images/sheltorlogo.svg" alt="" />
          </div>
        </Link>

        <p className="indi_title">I AM AN INDIVIDUAL SEEKING SERVICES</p>
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
                      placeholder="Chosse Username"
                      required
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
                      NICK NAME <span className="star_red">*</span>
                    </label>
                    <input
                      name="nickName"
                      value={users.nickName}
                      onChange={handleInput}
                      type="text"
                      placeholder="Nick Name"
                      className="form-control login_field"
                      id="validationCustom02"
                      required
                    />
                    {/* {errField.nickNameErr.length > 0 && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "11px",
                          fontFamily: "popreg",
                        }}
                      >
                        {errField.nickNameErr}
                      </span>
                    )} */}
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
                    >
                      <option className="login_field">Enter Ethnicity</option>
                      <option>Non-Hispanic White</option>
                      <option> German</option>
                      <option>Black/African-American (non-Hispanic)</option>
                      <option> Mexican</option>
                      <option> Irish</option>
                      <option> English</option>
                      <option> American</option>
                      <option>Italian</option>
                      <option> Polish</option>
                      <option>French</option>
                      <option> Scottish</option>
                    </select>
                    {/* {errField.ethnicityErr.length > 0 && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "11px",
                          fontFamily: "popreg",
                        }}
                      >
                        {errField.ethnicityErr}
                      </span>
                    )} */}
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
                    {/* {errField.date_of_birthErr.length > 0 && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "11px",
                          fontFamily: "popreg",
                        }}
                      >
                        {errField.date_of_birthErr}
                      </span>
                    )} */}
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
                      placeholder="Password"
                      onChange={handleInput}
                      value={users.password}
                      type={open === false ? "password" : "text"}
                      className="first form-control login_field"
                    />
                    {/* {errField.passwordErr.length > 0 && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "11px",
                          fontFamily: "popreg",
                        }}
                      >
                        {errField.passwordErr}
                      </span>
                    )} */}
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
                      name="phone"
                      onChange={handleInput}
                      value={users.phone}
                      type="number"
                      placeholder="Phone Number"
                      className="first form-control login_field login_fieldw"
                    />
                  </div>
                  {/* <div className="input-group mb-3">
                    <span
                      className="input-group-text login_field"
                      id="basic-addon1"
                    >
                      +1
                    </span>
                    <input
                      name="phone"
                      value={users.phone}
                      onChange={handleInput}
                      type="Number"
                      className="form-control login_field"
                    />
                  </div> */}

                  {/* <input
                      name="phone"
                      onChange={handleInput}
                      value={users.phone}
                      className="form-control login_field"
                      id="validationCustom03"
                      required
                    /> */}

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
                          "1920-01-01" // 'yyyy-mm-dd' format only
                        }
                        endDate={
                          // optional, if not provided current date is endDate
                          "2022-12-31" // 'yyyy-mm-dd' format only
                        }
                        selectedDate={
                          // optional
                          selectedDate
                          // this.state.selectedDate // 'yyyy-mm-dd' format only
                        }
                        onMonthChange={(month) => {
                          // optional
                          setMonth(month);
                          console.log(month);
                        }}
                        onDayChange={(day) => {
                          // optional
                          setDay(day);
                          console.log(day);
                        }}
                        onYearChange={(year) => {
                          // optional
                          setYear(year);
                          console.log(year);
                        }}
                        onDateChange={(date) => {
                          // optional
                          // console.log(date);
                          // setDate(date);
                          setSelectedDate(formatDate(date));
                          // this.setState({
                          //   date: date,
                          //   selectedDate: formatDate(date),
                          // });
                        }}
                      />
                    </div>
                  </div>
                  {/* <select className="select" multiple>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                    <option value="6">Six</option>
                    <option value="7">Seven</option>
                    <option value="8">Eight</option>
                  </select> */}
                  <div className="row">
                    <div className="col-lg-6 pl-0 respon2">
                      <div className="mb-3 label_input">
                        <label htmlFor="validationCustom02">COUNTY</label>
                        <input
                          name="county"
                          type="text"
                          value={users.county}
                          onChange={handleInput}
                          className="form-control login_field"
                          id="validationCustom02"
                          placeholder="Enter County"
                        />
                        {/* {errField.countyErr.length > 0 && (
                          <span
                            style={{
                              color: "red",
                              fontSize: "11px",
                              fontFamily: "popreg",
                            }}
                          >
                            {errField.countyErr}
                          </span>
                        )} */}
                      </div>
                    </div>
                    <div className="col-lg-6 pr-0 respon">
                      <div className="mb-3 label_input">
                        <label htmlFor="validationCustom02">STATE</label>
                        <input
                          value={users.state}
                          name="state"
                          placeholder="Enter State"
                          onChange={handleInput}
                          type="text"
                          className="form-control login_field"
                          id="validationCustom02"
                        />
                        {/* {errField.stateErr.length > 0 && (
                          <span
                            style={{
                              color: "red",
                              fontSize: "11px",
                              fontFamily: "popreg",
                            }}
                          >
                            {errField.stateErr}
                          </span>
                        )} */}
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
              <button className="signupbtn" type={"submit"}>
                SIGNUP
              </button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Individual;
