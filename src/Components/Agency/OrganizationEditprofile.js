import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { setUsersData, updateUserDetails } from "../../services/auth";
import { Wrapper } from "./organization.styled";
import DashboardNav from '../Auth/Navs/DashboardNav'
import { states_with_nick } from "../../services/states_counties";

function OrganizationEditprofile() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user_data"))
  const user_id = localStorage.getItem("user")
  const token = `Bearer ${localStorage.getItem("token")}`
  const [users, setUser] = useState({
    userName: user.userName,
    firstName: user.firstName,
    lastName: user.lastName,
    password: user.password,
    phone: user.phone,
    email: user.email,
    organization: user.organization,
    address: user.address,
    city: user.city,
    state: user.state,
    zip_code: user.zip_code,
    role: "sheriff",
    iam: user.iam,
  });
  const [errField, setErrField] = useState({
    userNameErr: "",
    passwordErr: "",
    phoneErr: "",
    emailErr: "",
    organizationErr: "",
    FirstErr: "",
    LastErr: "",
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
  

  let name, value;
  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...users, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (users.city === "" || users.city === undefined) {
      delete users.city;
    }
    if (users.state === "" || users.state === undefined) {
      delete users.state;
    }
    if (users.zip_code === "" || users.zip_code === undefined) {
      delete users.zip_code;
    }
    if (users.iam === "" || users.iam === undefined) {
      delete users.iam;
    }
    delete users.userName
    delete users.role;
    delete users.password;
    delete users.organization;

    if (!validForm()) {
      toast.error('Validation Error!')
      return
    }
    try{
      var response = await updateUserDetails(users, user_id, token)
      if(response.status === 200){
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
      var error = ''
      console.log('ERRORChoose a password*');
      if(e.response){
        console.log(e.response);
        error = e.response
        if(e.response.data){
          console.log(e.response.data);
          error = e.response.data
          if(e.response.data.message){
            console.log(e.response.data.message);
            error = e.response.data.message
          }
        }
      }
      toast.error(error);
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
      FirstErr: "",
      LastErr: "",
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
    if (users.phone === "" || users.phone.length < 15) {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        phoneErr: "Invalid Phone Number",
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
    if (user.firstName === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        FirstErr: "Please Enter First Name",
      }));
    }
    if (user.lastName === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        LastErr: "Please Enter Last Name",
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

    if (users.zip_code === "" || user.zip_code.length < 5) {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        zipcodeErr: "Invalid Zip Code",
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
  
  useEffect(()=> {
  }, [])
  return (
    <Wrapper>
    <DashboardNav/>  
    <div className="account">
      
      <img
        className="dashboard_image"
        src="/images/edit_user.svg"
        alt=""
      />
      <p className="header_title">EDIT PROFILE</p>
   
      <div className="container mt-5">
        <div className="row justify-content-around">
          <div className="col-lg-6">
            <ToastContainer />
            <div className="mb-3 label_input">
              <label htmlFor="validationCustom01">
                USERNAME 
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
                <div className="row">
                  <div className="col-md-6 m-0 p-0 pr-4">
                    <label htmlFor="validationCustom02">
                      FIRST NAME <span className="star_red">*</span>
                    </label>
                    <input
                      name="firstName"
                      value={users.firstName}
                      onChange={handleInput}
                      type="text"
                      placeholder="Enter first name"
                      className="form-control login_field"
                      id="validationCustom02"
                      required
                    />
                    {errField.FirstErr.length > 0 && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "11px",
                          fontFamily: "popreg",
                        }}
                      >
                        {errField.FirstErr}
                      </span>
                    )}
                  </div>
                  <div className="col-md-6 m-0 p-0 pl-3">
                    <label htmlFor="validationCustom02">
                      LAST NAME <span className="star_red">*</span>
                    </label>
                    <input
                      name="lastName"
                      value={users.lastName}
                      onChange={handleInput}
                      type="text"
                      placeholder="Enter last name"
                      className="form-control login_field"
                      id="validationCustom02"
                      required
                    />
                    {errField.LastErr.length > 0 && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "11px",
                          fontFamily: "popreg",
                        }}
                      >
                        {errField.LastErr}
                      </span>
                    )}
                  </div>
                </div>                
              </div>
              <div className="label_input mb-3">
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
                inputMode="numeric"
                name="text"
                className="first form-control login_field login_fieldw"
                id="text"
                defaultValue={normalizeCardNumber(users.phone)}
                onChange={(event) => {
                  const { value } = event.target;
                  users.phone = value
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
            <div class="form-group" style={{marginTop: '-5px'}}>
              <label className="label_input" for="exampleFormControlSelect1">
                MY POSITION <span className="star_red">*</span>
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
                    <option classname="login_field" selected={item === users.iam? true : false}>{item}</option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="label_input mb-3">
              <label htmlFor="validationCustom03">
                PASSWORD 
                {/* <span className="star_red">*</span> */}
              </label>
              <input
                name="password"
                value={users.password}
                onChange={handleInput}
                className="form-control login_field"
                id="validationCustom03"
                placeholder="Choose a password"
                disabled
              />
             
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
                placeholder="user@example.com"
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
            <div className="row">
              <div className="col-lg-4 px-0  pr-3">
                <div className="mb-3 label_input">
                  <label htmlFor="validationCustom02">
                    CITY <span className="star_red">*</span>
                  </label>
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
              <div className="col-lg-4 px-0 pr-3">
                <div className="mb-3 label_input">
                  <label htmlFor="validationCustom02">
                    STATE <span className="star_red">*</span>
                    </label>
                    <select className="form-control login_field" name="state" id="state"
                      onChange={handleInput}
                      >
                        <option className="login_field" selected disabled>Select State</option>
                        {states_with_nick.map((item, index)=> {
                          return (
                            <option className="login_field" key={index} value={item.name} selected={item.name === users.state?true:false}>{item.name}</option>
                          )
                        })}
                    </select>
                  {/* <input
                    value={users.state}
                    onChange={handleInput}
                    type="text"
                    name="state"
                    placeholder="Enter State"
                    className="form-control login_field"
                    id="validationCustom02"
                    required
                  /> */}
                </div>
              </div>
              <div className="col-lg-4 px-0">
                <div className="mobile_p pr-0">
                  <div className="mb-3 label_input">
                    <label htmlFor="validationCustom02"> 
                    ZIP CODE <span className="star_red">*</span>
                    </label>
                    <input
                      value={users.zip_code}
                      onChange={handleInput}
                      type="number"
                      name="zip_code"
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
        <div className="signup_footer">
          {/* <Link to="/login" onClick={submit}> */}
          <button
            className="signupbtn"
            style={{ letterSpacing: '2px' }}
            type={"button"}
            onClick={submit}
          >
            SUBMIT CHANGES
          </button>
          <Link className="" to="/">
            <p className="footer_sign_up">Cancel</p>
          </Link>
          {/* </Link> */}
        </div>
      </div>
    </div>
    </Wrapper>
  );
}

export default OrganizationEditprofile;
