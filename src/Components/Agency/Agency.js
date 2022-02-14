import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import axios from "axios";
import { Checkbox } from "antd";

function Agency() {
  const [user, setUser] = useState({
    userName: "",
    password: "",
    phone: "",
    email: "",
    organization: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    role: "sheriff",
    iam: "",
  });
  const [phoneValue, setPhonevalue] = useState("");

  const navigate = useNavigate();
  // const handleAddrTypeChange = (e) => {
  //   console.clear();
  //   console.log(user.iam[e.target.value]);
  //   setUser({ ...user, iam: e.target.value });
  // };
  // const [role, setRole] = useState("sheriif");
  // const  = (event) => {
  //   event.preventDefault();
  //   console.log(`
  //     Role: ${role}
  //   `);
  // };

  const [errField, setErrField] = useState({
    userNameErr: "",
    passwordErr: "",
    phoneErr: "",
    emailErr: "",
    organizationErr: "",
    addressErr: "",
    cityErr: "",
    stateErr: "",
    zipcodeErr: "",
    sherifErr: "",
    iamErr: "",
  });

  let name, value;
  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    if (user.city === "" || user.city === undefined) {
      delete user.city;
    }
    if (user.state === "" || user.state === undefined) {
      delete user.state;
    }
    if (user.zipcode === "" || user.zipcode === undefined) {
      delete user.zipcode;
    }
    if (user.iam === "" || user.iam === undefined) {
      delete user.iam;
    }
    user.phone = phoneValue;

    console.log("showin   ", validForm());
    if (validForm()) {
      let url = "https://shelterprovider.herokuapp.com/v1/auth/registerSheriff";
      let options = {
        method: "POST",
        url: url,
        headers: {},
        data: user,
      };
      // try{
      let response = await axios(options);

      console.log(response);
      if (response.status === 200) {
        toast.success("Added Successfully!");
        setTimeout(() => {
          navigate("/agency-landingpage");
        }, 1500);
      } else {
        toast.error("Something went wrong !");
      }
      // }catch(e){
      //   console.log(e)
      //  toast.error("Something went wrong !");
      // }
    }
  };

  const validForm = () => {
    let formIsValid = true;
    setErrField({
      userNameErr: "",
      passwordErr: "",
      phoneErr: "",
      emailErr: "",
      organizationErr: "",
      addressErr: "",
      cityErr: "",
      stateErr: "",
      zipcodeErr: "",
      iamErr: "",
    });
    if (user.userName === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        userNameErr: "Please Enter Name",
      }));
    }
    if (user.password === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        passwordErr: "Please Enter Password",
      }));
    }
    if (user.phone === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        phoneErr: "Please Enter phone",
      }));
    }
    if (user.email === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        emailErr: "Please Enter email",
      }));
    }
    if (user.organization === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        organizationErr: "Please Enter organization",
      }));
    }
    if (user.address === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        addressErr: "Please Enter address",
      }));
    }
    if (user.city === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        cityErr: "Please Enter City",
      }));
    }
    // if (user.state === "") {
    //   formIsValid = false;
    //   setErrField((prevState) => ({
    //     ...prevState,
    //     stateErr: "Please Enter State",
    //   }));
    // }
    if (user.zipcode === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        zipcodeErr: "Please Enter zipCode",
      }));
    }
    // if (user.iam === "") {
    //   formIsValid = false;
    //   setErrField((prevState) => ({
    //     ...prevState,
    //     iamErr: "Please Check this field",
    //   }));
    // }

    return formIsValid;
  };
  const [open, setOpen] = useState(false);

  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  const normalizeCardNumber = (value) => {
    let x = value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    let maskedText = !x[2]
      ? x[1]
      : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
    return maskedText;
  };

  return (
    <div className="agency">
      <Link to="/">
        <div className="logodiv login_log">
          <img className="login_logo" src="/images/sheltorlogo.svg" alt="" />
        </div>
      </Link>

      <p className="indi_title mt-1 indi_agancy">
        ORGANIZATION OR OUTREACH WORKER
      </p>
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-lg-6">
            <ToastContainer />
            <div className="mb-3 label_input">
              <label htmlFor="validationCustom01">
                CHOOSE USERNAME <span className="star_red">*</span>
              </label>
              <input
                name="userName"
                value={user.userName}
                onChange={handleInput}
                type="text"
                placeholder="Create a username"
                className="form-control login_field"
                id="validationCustom01"
                required
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
                FULL NAME OF ORGANIZATION <span className="star_red">*</span>
              </label>
              <input
                name="organization"
                value={user.organization}
                onChange={handleInput}
                type="text"
                placeholder="Enter full name of organization"
                className="form-control login_field"
                id="validationCustom02"
                required
              />
              {errField.organizationErr.length > 0 && (
                <span
                  style={{
                    color: "red",
                    fontSize: "11px",
                    fontFamily: "popreg",
                  }}
                >
                  {errField.organizationErr}
                </span>
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
              <span className="input-group-text login_field" id="basic-addon1">
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
                onChange={(event) => {
                  const { value } = event.target;
                  setPhonevalue(value);
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
            <div class="form-group">
              <label className="label_input" for="exampleFormControlSelect1">
                MY POSITION
              </label>

              <select
                onChange={handleInput}
                name="iam"
                class="form-control login_field"
                id="exampleFormControlSelect1"
              >
                <option classname="login_field">Choose your role</option>
                <option>Outreach worker</option>
                <option>Municipal agency</option>
                <option>Law enforcement</option>
                <option>Services provider</option>
              </select>
              {/* {errField.iamErr.length > 0 && (
                <span
                  style={{
                    color: "red",
                    fontSize: "11px",
                    fontFamily: "popreg",
                  }}
                >
                  {errField.iamErr}
                </span>
              )} */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="label_input mb-3">
              <label htmlFor="validationCustom03">
                CHOOSE PASSWORD <span className="star_red">*</span>
              </label>
              <input
                name="password"
                value={user.password}
                onChange={handleInput}
                type={open === false ? "password" : "text"}
                className="form-control login_field"
                id="validationCustom03"
                placeholder="************"
                required
              />
              {open === false ? (
                <AiFillEyeInvisible className="svggg" onClick={toggle} />
              ) : (
                <AiFillEye className="svggg" onClick={toggle} />
              )}
              {errField.passwordErr.length > 0 && (
                <span
                  style={{
                    color: "red",
                    fontSize: "11px",
                    fontFamily: "popreg",
                  }}
                >
                  {errField.passwordErr}
                </span>
              )}
            </div>
            <div className="mb-3 label_input">
              <label htmlFor="validationCustom02">
                EMAIL ADDRESS <span className="star_red">*</span>
              </label>
              <input
                name="email"
                value={user.email}
                onChange={handleInput}
                type="email"
                placeholder="user@gmail.com"
                className="form-control login_field"
                id="validationCustom02"
                required
              />
              {errField.emailErr.length > 0 && (
                <span
                  style={{
                    color: "red",
                    fontSize: "11px",
                    fontFamily: "popreg",
                  }}
                >
                  {errField.emailErr}
                </span>
              )}
            </div>
            <div className="mb-3 label_input">
              <label htmlFor="validationCustom02">
                ADDRESS <span className="star_red">*</span>
              </label>
              <input
                name="address"
                value={user.address}
                onChange={handleInput}
                type="text"
                placeholder="Enter street address"
                className="form-control login_field"
                id="validationCustom02"
                required
              />
              {errField.addressErr.length > 0 && (
                <span
                  style={{
                    color: "red",
                    fontSize: "11px",
                    fontFamily: "popreg",
                  }}
                >
                  {errField.addressErr}
                </span>
              )}
            </div>
            <div className="row justify-content-md-between">
              <div className="col-lg-3 px-0">
                <div className="mb-3 label_input">
                  <label htmlFor="validationCustom02">STATE</label>
                  <input
                    value={user.state}
                    onChange={handleInput}
                    type="text"
                    name="state"
                    placeholder="Enter State"
                    className="form-control login_field"
                    id="validationCustom02"
                    required
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
              <div className="col-lg-3 px-0 ">
                <div className="mb-3 label_input">
                  <label htmlFor="validationCustom02">CITY</label>
                  <input
                    value={user.city}
                    onChange={handleInput}
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    className="form-control login_field"
                    id="validationCustom02"
                    required
                  />
                  {/* {errField.cityErr.length > 0 && (
                    <span
                      style={{
                        color: "red",
                        fontSize: "11px",
                        fontFamily: "popreg",
                      }}
                    >
                      {errField.cityErr}
                    </span>
                  )} */}
                </div>
              </div>
              <div className="col-lg-3 px-0">
                <div className="mobile_p pr-0">
                  <div className="mb-3 label_input">
                    <label htmlFor="validationCustom02">ZIP CODE</label>
                    <input
                      value={user.zipcode}
                      onChange={handleInput}
                      type="number"
                      name="zipcode"
                      placeholder="Enter Zip code"
                      className="form-control login_field"
                      id="validationCustom02"
                      required
                    />
                    {/* {errField.zipcodeErr.length > 0 && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "11px",
                          fontFamily: "popreg",
                        }}
                      >
                        {errField.zipcodeErr}
                      </span>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-lg-6 pl-0">
                <div className="mb-3 label_input">
                  <label htmlFor="validationCustom02">
                    STATE <span className="star_red">*</span>
                  </label>
                  <input
                    name="state"
                    value={user.state}
                    onChange={handleInput}
                    type="text"
                    className="form-control login_field"
                    id="validationCustom02"
                    required
                  />
                  {errField.stateErr.length > 0 && (
                    <span
                      style={{
                        color: "red",
                        fontSize: "11px",
                        fontFamily: "popreg",
                      }}
                    >
                      {errField.stateErr}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-lg-6 pr-0">
                <div className="mb-3 label_input">
                  <label htmlFor="validationCustom02">
                    ZIP CODE <span className="star_red">*</span>
                  </label>
                  <input
                    name="zipcode"
                    value={user.zipcode}
                    onChange={handleInput}
                    type="text"
                    className="form-control login_field"
                    id="validationCustom02"
                    required
                  />
                  {errField.zipcodeErr.length > 0 && (
                    <span
                      style={{
                        color: "red",
                        fontSize: "11px",
                        fontFamily: "popreg",
                      }}
                    >
                      {errField.zipcodeErr}
                    </span>
                  )}
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <Checkbox
          style={{ paddingLeft: "17px", paddingTop: "20px" }}
          onChange={onChange}
        >
          <span className="label_input">
            MAY WE USE YOUR DEVICE’S LOCATION SERVICES?
            <span className="star_red">*</span>
          </span>
        </Checkbox>
        {/* <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
          />
          <label
            className="custom-control-label label_input"
            htmlFor="customSwitch1"
          >
            MAY WE USE YOUR DEVICE’S LOCATION SERVICES?
          </label>
        </div> */}
        <div className="btn_center">
          <Link to="/agency-landingpage" onClick={submit}>
            <button className="signupbtn mrgin_btn">SIGNUP</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Agency;
