import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import axios from "axios";
import { Checkbox } from "antd";
import { basePath } from "../../config";
import { logout, setUsersData, updateUserDetails } from "../../services/auth";

function OrganizationEditprofile() {
  const navigate = useNavigate()
  const [user, setUserData] = useState(
    JSON.parse(localStorage.getItem("user_data"))
  );
  const [users, setUser] = useState({
    userName: user.userName,
    password: user.password,
    phone: user.phone,
    email: user.email,
    organization: user.organization,
    address: user.address,
    city: user.city,
    state: user.state,
    zipcode: user.zipcode,
    role: "sheriff",
    iam: user.iam,
  });
  const [phoneValue, setPhonevalue] = useState("");
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
  const positions = [
    'Outreach worker',
    'Municipal agency',
    'Law enforcement',
    'Services provider'
  ]
  useEffect(() => {
    setPhonevalue(normalizeCardNumber(user.phone));
  }, []);

  let name, value;
  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...users, [name]: value });
  };

  const signout = () => {
    logout()
    navigate('/')
    
  }

  const submit = async (e) => {
    e.preventDefault();
    if (users.city === "" || users.city === undefined) {
      delete users.city;
    }
    if (users.state === "" || users.state === undefined) {
      delete users.state;
    }
    if (users.zipcode === "" || users.zipcode === undefined) {
      delete users.zipcode;
    }
    if (users.iam === "" || users.iam === undefined) {
      delete users.iam;
    }
    users.phone = phoneValue;
    delete users.userName
    delete users.role;
    delete users.password;
    delete users.organization;

    console.log("showin   ", validForm());
    if (validForm()) {
      try{
        var response = await updateUserDetails(users)
        if(response.status == 200){
          toast.success("Updated Successfully!");
          setUsersData(user._id)
            setTimeout(() => {
              navigate("/OrganizationLandingpage");
            }, 1500);
          }else{
            toast.error("Fields Cannot be empty");
            console.log(response);
          }
      }catch(e){
        console.log('ERROR*************');
        toast.error(e.response.data.message);
      }
    }
  };

  const validForm = () => {
    let formIsValid = true;
    setErrField({
      // userNameErr: "",
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
    // if (users.userName === "") {
    //   formIsValid = false;
    //   setErrField((prevState) => ({
    //     ...prevState,
    //     userNameErr: "Please Enter Name",
    //   }));
    // }
    if (users.password === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        passwordErr: "Please Enter Password",
      }));
    }
    if (users.phone === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        phoneErr: "Please Enter phone",
      }));
    }
    if (users.email === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        emailErr: "Please Enter email",
      }));
    }
    if (users.organization === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        organizationErr: "Please Enter organization",
      }));
    }
    if (users.address === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        addressErr: "Please Enter address",
      }));
    }
    if (users.city === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        cityErr: "Please Enter City",
      }));
    }

    if (users.zipcode === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        zipcodeErr: "Please Enter zipCode",
      }));
    }

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
      <div className="edit_header">
        <div className="edit_left_bts">
          <Link to="/">
            <img
              style={{ height: "29px", paddingRight: "10px" }}
              src="images/dashhome.svg"
              alt=""
            />
          </Link>
          <Link to="/OrganizationLandingpage">
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
        <div style={{ cursor: 'pointer' }} onClick={signout}>
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
      <p className="indi_title mt-1 indi_agancy">
        ORGANIZATION OR OUTREACH WORKER
      </p>
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-lg-6">
            <ToastContainer />
            <div className="mb-3 label_input">
              <label htmlFor="validationCustom01">
                CHOOSE USERNAME 
                {/* <span className="star_red">*</span> */}
              </label>
              <input
                name="userName"
                value={users.userName}
                onChange={handleInput}
                type="text"
                placeholder="Create a username"
                className="form-control login_field"
                id="validationCustom01"
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
                FULL NAME OF ORGANIZATION <span className="star_red">*</span>
              </label>
              <input
                name="organization"
                value={users.organization}
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
                value={normalizeCardNumber(users.phone)}
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
                <option classname="login_field" selected disabled>Choose your role</option>
                {positions.map((item, index)=> {
                  return (
                    <option classname="login_field" selected={item == users.iam? true : false}>{item}</option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="label_input mb-3">
              <label htmlFor="validationCustom03">
                CHOOSE PASSWORD 
                {/* <span className="star_red">*</span> */}
              </label>
              <input
                name="password"
                value={users.password}
                onChange={handleInput}
                type={open === false ? "password" : "text"}
                className="form-control login_field"
                id="validationCustom03"
                placeholder="************"
                disabled
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
                value={users.email}
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
                value={users.address}
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
              <div className="col-lg-3 px-0 ">
                <div className="mb-3 label_input">
                  <label htmlFor="validationCustom02">CITY</label>
                  <input
                    value={users.city}
                    onChange={handleInput}
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    className="form-control login_field"
                    id="validationCustom02"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-3 px-0">
                <div className="mb-3 label_input">
                  <label htmlFor="validationCustom02">STATE</label>
                  <input
                    value={users.state}
                    onChange={handleInput}
                    type="text"
                    name="state"
                    placeholder="Enter State"
                    className="form-control login_field"
                    id="validationCustom02"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-3 px-0">
                <div className="mobile_p pr-0">
                  <div className="mb-3 label_input">
                    <label htmlFor="validationCustom02">ZIP CODE</label>
                    <input
                      value={users.zipcode}
                      onChange={handleInput}
                      type="number"
                      name="zipcode"
                      placeholder="Enter Zip code"
                      className="form-control login_field"
                      id="validationCustom02"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn_center">
          <Link to="/agency-landingpage" onClick={submit}>
            <button className="signupbtn mrgin_btn">SIGNUP</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrganizationEditprofile;
