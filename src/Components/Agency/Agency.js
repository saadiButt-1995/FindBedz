import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import axios from "axios";

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
    // roll: "user",
    iam: "",
  });

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
    console.log(validForm());
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
    if (user.state === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        stateErr: "Please Enter State",
      }));
    }
    if (user.zipcode === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        zipcodeErr: "Please Enter zipCode",
      }));
    }
    if (user.iam === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        iamErr: "Please Enter iam",
      }));
    }

    return formIsValid;
  };
  const [open, setOpen] = useState(false);

  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="agency">
      <Link to="/">
        <div className="logodiv login_log">
          <img className="login_logo" src="/images/sheltorlogo.svg" alt="" />
        </div>
      </Link>

      <p className="indi_title mt-1">ORGANIZATION OR OUTREACH WORKER</p>
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
            <div className="mb-3 label_input">
              <label htmlFor="validationCustom01">
                PHONE <span className="star_red">*</span>
              </label>
              <input
                name="phone"
                value={user.phone}
                onChange={handleInput}
                type="number"
                className="form-control login_field"
                id="validationCustom01"
                required
              />
              {errField.phoneErr.length > 0 && (
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
            {/* <div className="mb-3 label_input">
              <label htmlFor="validationCustom01">
                CITY <span className="star_red">*</span>
              </label>
              <input
                name="city"
                value={user.city}
                onChange={handleInput}
                type="text"
                className="form-control login_field"
                id="validationCustom01"
                required
              />
              {errField.cityErr.length > 0 && (
                <span
                  style={{
                    color: "red",
                    fontSize: "11px",
                    fontFamily: "popreg",
                  }}
                >
                  {errField.cityErr}
                </span>
              )}
            </div> */}
            {/* <div className="mb-3 label_input">
              <label htmlFor="validationCustom01">Sherif</label>
              <input
                name="role"
                value={user.role}
                onChange={handleInput}
                type="text"
                className="form-control login_field"
                id="validationCustom01"
                required
              />
              {errField.cityErr.length > 0 && (
                <span
                  style={{
                    color: "red",
                    fontSize: "11px",
                    fontFamily: "popreg",
                  }}
                >
                  {errField.cityErr}
                </span>
              )}
            </div> */}
            <div class="form-group">
              <label className="label_input" for="exampleFormControlSelect1">
                I AM<span className="star_red">*</span>
              </label>

              <select
                onChange={handleInput}
                name="iam"
                class="form-control login_field"
                id="exampleFormControlSelect1"
              >
                <option classname="login_field">Non-Hispanic White</option>
                <option>Asian</option>
                <option>American Indian</option>
                <option>Hispanics</option>
                <option>Alaska Native</option>
                <option>Black or African American</option>
              </select>
              {errField.iamErr.length > 0 && (
                <span
                  style={{
                    color: "red",
                    fontSize: "11px",
                    fontFamily: "popreg",
                  }}
                >
                  {errField.iamErr}
                </span>
              )}
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
                type="password"
                className="form-control login_field"
                id="validationCustom03"
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
                  <label htmlFor="validationCustom02">
                    CITY<span className="star_red">*</span>
                  </label>
                  <input
                    value={user.city}
                    onChange={handleInput}
                    type="text"
                    name="city"
                    className="form-control login_field"
                    id="validationCustom02"
                    required
                  />
                  {errField.cityErr.length > 0 && (
                    <span
                      style={{
                        color: "red",
                        fontSize: "11px",
                        fontFamily: "popreg",
                      }}
                    >
                      {errField.cityErr}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-lg-3 px-0">
                <div className="mb-3 label_input">
                  <label htmlFor="validationCustom02">
                    STATE<span className="star_red">*</span>
                  </label>
                  <input
                    value={user.state}
                    onChange={handleInput}
                    type="text"
                    name="state"
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
              <div className="col-lg-3 px-0">
                <div className="mobile_p pr-0">
                  <div className="mb-3 label_input">
                    <label htmlFor="validationCustom02">
                      ZIP CODE<span className="star_red">*</span>
                    </label>
                    <input
                      value={user.zipcode}
                      onChange={handleInput}
                      type="text"
                      name="zipcode"
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
        <div className="custom-control custom-switch">
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

export default Agency;
