import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Checkbox } from "antd";
import { login, organizationSignup, setLocalValues } from "../../services/auth";
import { Wrapper } from "../Auth/Auth.styled";
import MainNav from "../Auth/Navs/MainNav";
// import { states_with_nick } from "../../services/states_counties";
import Spinner from "../Loaders/buttonTailSpinner";

function Organization() {
  const [user, setUser] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    phone: "",
    email: "",
    organization: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
    role: "sheriff",
    iam: "",
  });

  const navigate = useNavigate();
  const [phoneValue, setPhonevalue] = useState("");
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [states, setStates] = useState([]);

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

  let name, value;
  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;
    if (name === "zip_code") {
      if (value.length > 5) {
        return;
      }
    }
    if (name === "userName") {
      if (value.length > 20) {
        return;
      }
      value = value.replace(/\s/g, "");
    }
    setUser({ ...user, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // if (user.city === "" || user.city === undefined) {
    //   delete user.city;
    // }
    // if (user.state === "" || user.state === undefined) {
    //   delete user.state;
    // }
    // if (user.zip_code === "" || user.zip_code === undefined) {
    //   delete user.zip_code;
    // }
    // if (user.iam === "" || user.iam === undefined) {
    //   delete user.iam;
    // }
    user.phone = phoneValue;
    // delete user.coo

    if (!validForm()) {
      setLoading(false);
      toast.error("Validation Error!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (!terms) {
      setLoading(false);
      toast.error("Please allow this app to access your device's location", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    try {
      var response = await organizationSignup(user);
      if (response.status === 200) {
        toast.success("Account has been created successfully!", {
          position: toast.POSITION.TOP_CENTER,
        });
        setTimeout(async () => {
          var result = await login({
            userName: user.userName,
            password: user.password,
          });
          setLoading(false);
          await setLocalValues(result.data);
          navigate("/OrganizationLandingpage");
          // navigate("/login");
          // toast.success("Please Login To Continue!");
        }, 500);
      } else {
        setLoading(false);
        toast.error("Something went wrong !", {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log(response);
      }
    } catch (e) {
      setLoading(false);
      var error = "";
      if (e.response) {
        console.log(e.response);
        error = e.response;
        if (e.response.data) {
          console.log(e.response.data);
          error = e.response.data;
          if (e.response.data.message) {
            console.log(e.response.data.message);
            error = e.response.data.message;
          }
        }
      }
      toast.error(error, {
        position: toast.POSITION.TOP_CENTER,
      });
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
      FirstErr: "",
      LastErr: "",
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
    if (user.phone === "" || user.phone.length < 15) {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        phoneErr: "Invalid Phone Number",
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

    if (user.iam === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        iamErr: "Please Enter Position",
      }));
    }

    if (user.zip_code === "" || user.zip_code.length < 5) {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        zipcodeErr: "Invalid Zip Code",
      }));
    }
    return formIsValid;
  };
  const [open, setOpen] = useState(false);

  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };
  const onChange = (e) => {
    getMyLocation(e);
    // setTerms(e.target.checked)
  };
  const getMyLocation = (e) => {
    const location = window.navigator && window.navigator.geolocation;

    if (location) {
      location.getCurrentPosition(
        (position) => {
          user.coords = `${position.coords.latitude},${position.coords.longitude}`;
          setUser(user);
          setTerms(e.target.checked);
        },
        (error) => {
          toast.error("Error in getting location!");
        }
      );
    }
  };

  const normalizeCardNumber = (value) => {
    let x = value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    let maskedText = !x[2]
      ? x[1]
      : "(" + x[1] + ") " + x[2] + (x[3] ? " - " + x[3] : "");
    return maskedText;
  };

  return (
    <Wrapper>
      <MainNav />
      <ToastContainer />
      <div className="account">
        <p className="header_title">CREATE AN ACCOUNT</p>
        <div className="container mt-5">
          <div className="row justify-content-around">
            <div className="col-lg-6">
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
                <div className="row">
                  <div className="col-md-6 m-0 p-0 pr-4">
                    <label htmlFor="validationCustom02">
                      FIRST NAME <span className="star_red">*</span>
                    </label>
                    <input
                      name="firstName"
                      value={user.firstName}
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
                      value={user.lastName}
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
                  name="text"
                  className="first form-control login_field login_fieldw"
                  id="text"
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
                  MY POSITION <span className="star_red">*</span>
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
                  PASSWORD <span className="star_red">*</span>
                </label>
                <input
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  type={open === false ? "password" : "text"}
                  className="form-control login_field"
                  id="validationCustom03"
                  placeholder="Choose a password"
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
              <div className="row ">
                <div className="col-lg-4 px-0  pr-3">
                  <div className="mb-3 label_input">
                    <label htmlFor="validationCustom02">
                      CITY <span className="star_red">*</span>
                    </label>
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
                <div className="col-lg-4 px-0 pr-3">
                  <div className="mb-3 label_input">
                    <label htmlFor="validationCustom02">
                      STATE <span className="star_red">*</span>
                    </label>
                    <select
                      className="form-control login_field"
                      name="state"
                      id="state"
                      onChange={handleInput}
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
                <div className="col-lg-4 px-0">
                  <div className="mobile_p pr-0">
                    <div className="mb-3 label_input">
                      <label htmlFor="validationCustom02">
                        ZIP CODE <span className="star_red">*</span>
                      </label>
                      <input
                        value={user.zip_code}
                        onChange={handleInput}
                        type="number"
                        name="zip_code"
                        placeholder="Enter Zip code"
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
            </div>
          </div>
          <Checkbox
            style={{ paddingLeft: "17px", paddingTop: "20px" }}
            onChange={onChange}
          >
            <span className="label_input ml-2">
              SYSTEM WILL USE YOUR DEVICE’S LOCATION SERVICES
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
          <div className="signup_footer">
            {loading ? (
              <Spinner />
            ) : (
              <>
                <button
                  onClick={submit}
                  className={`signupbtn1 ${!terms ? "btn-secondary" : ""}`}
                  disabled={!terms ? "disabled" : ""}
                >
                  SIGNUP
                </button>
                <Link className="" to="/">
                  <p className="footer_sign_up">Cancel</p>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Organization;
