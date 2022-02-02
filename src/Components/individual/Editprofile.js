import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import axios from "axios";
const Editprofile = () => {
  const [open, setOpen] = useState(false);

  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };
  const [users, setUser] = useState({
    userName: "",
    password: "",
    nickName: "",
    role: "",
  });
  const navigate = useNavigate();

  const [errField, setErrField] = useState({
    userNameErr: "",
    passwordErr: "",
    nickNameErr: "",
    roleErr: "",
  });

  let name, value;
  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...users, [name]: value });
  };
  console.log(users);

  const submit = async (e) => {
    e.preventDefault();
    if (validForm()) {
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
      //  }catch(e){
      //   console.log(e, 'error')
      //   toast.error("Something went wrong !");
      //  }
    }
  };

  const validForm = () => {
    let formIsValid = true;
    setErrField({
      userNameErr: "",
      passwordErr: "",
      nickNameErr: "",
      roleErr: "",
    });
    if (users.userName === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        userNameErr: "Please Enter Name",
      }));
    }
    if (users.password === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        passwordErr: "Please Enter Password",
      }));
    }
    if (users.nickName === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        nickNameErr: "Please Enter NickName",
      }));
    }
    if (users.role === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        roleErr: "Please Enter your phone number",
      }));
    }

    return formIsValid;
  };

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
          <form action="/login" method="post">
            <div className="container">
              <div className="row justify-content-around">
                <div className="col-lg-6">
                  <div className="mb-3 label_input">
                    <label htmlFor="validationCustom01">CHOOSE USERNAME</label>
                    <input
                      name="userName"
                      value={users.userName}
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
                    <label htmlFor="validationCustom02">NICK NAME</label>
                    <input
                      name="nickName"
                      value={users.nickName}
                      onChange={handleInput}
                      type="text"
                      className="form-control login_field"
                      id="validationCustom02"
                      required
                    />
                    {errField.nickNameErr.length > 0 && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "11px",
                          fontFamily: "popreg",
                        }}
                      >
                        {errField.nickNameErr}
                      </span>
                    )}
                  </div>
                  <div class="form-group">
                    <label
                      className="label_input"
                      for="exampleFormControlSelect1"
                    >
                      Ethnicity
                    </label>
                    <select
                      class="form-control login_field"
                      id="exampleFormControlSelect1"
                    >
                      <option classname="login_field">Scottish</option>
                      <option>European</option>
                      <option>African</option>
                      <option>Greeks</option>
                      <option>other</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label
                      className="label_input"
                      for="exampleFormControlSelect1"
                    >
                      GENDER
                    </label>
                    <select
                      class="form-control login_field"
                      id="exampleFormControlSelect1"
                    >
                      <option classname="login_field">Male</option>
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
                      onChange={handleInput}
                      value={users.password}
                      type={open === false ? "password" : "text"}
                      className="form-control login_field"
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
                    {open === false ? (
                      <AiFillEye
                        style={{
                          position: "absolute",
                          right: "23px",
                          marginTop: "-21px",
                        }}
                        onClick={toggle}
                      />
                    ) : (
                      <AiFillEyeInvisible
                        style={{
                          position: "absolute",
                          right: "23px",
                          marginTop: "-21px",
                        }}
                        onClick={toggle}
                      />
                    )}
                  </div>

                  <div className="label_input mb-3">
                    <label htmlFor="validationCustom03">PHONE NUMBER</label>
                    <input
                      name="role"
                      onChange={handleInput}
                      value={users.role}
                      type="number"
                      className="form-control login_field"
                      id="validationCustom03"
                      required
                    />
                    {errField.roleErr.length > 0 && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "11px",
                          fontFamily: "popreg",
                        }}
                      >
                        {errField.roleErr}
                      </span>
                    )}
                  </div>
                  <div class="form-group">
                    <label
                      className="label_input"
                      for="exampleFormControlSelect1"
                    >
                      AGE
                    </label>
                    <select
                      class="form-control login_field"
                      id="exampleFormControlSelect1"
                    >
                      <option classname="login_field">YEARS</option>
                      <option>2022</option>
                      <option>2021</option>
                      <option>2020</option>
                      <option>2019</option>
                      <option>2018</option>
                      <option>2017</option>
                    </select>
                  </div>
                  {/* <select class="select" multiple>
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
                    <div className="col-lg-6 pl-0">
                      <div className="mb-3 label_input">
                        <label htmlFor="validationCustom02">COUNTY</label>
                        <input
                          name="COUNTY"
                          type="text"
                          className="form-control login_field"
                          id="validationCustom02"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 pr-0">
                      <div className="mb-3 label_input">
                        <label htmlFor="validationCustom02">STATE</label>
                        <input
                          name="state"
                          onChange={handleInput}
                          type="text"
                          className="form-control login_field"
                          id="validationCustom02"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="custom-control custom-switch">
                <input
                  name="switch"
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
            </div>
            <div className="btn_center">
              <Link to="/login" onClick={submit}>
                <button className="signupbtn">SUBMIT CHANGES</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Editprofile;