import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const Individual = () => {
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
        roleErr: "Please Enter Role",
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
                      <span style={{ color: "red" }}>
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
                      <span style={{ color: "red" }}>
                        {errField.nickNameErr}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="label_input mb-3">
                    <label htmlFor="validationCustom03">PASSWORD</label>
                    <input
                      name="password"
                      onChange={handleInput}
                      value={users.password}
                      type="password"
                      className="form-control login_field"
                    />
                    {errField.passwordErr.length > 0 && (
                      <span style={{ color: "red" }}>
                        {errField.passwordErr}
                      </span>
                    )}
                  </div>

                  <div className="label_input mb-3">
                    <label htmlFor="validationCustom03">Role</label>
                    <input
                      name="role"
                      onChange={handleInput}
                      value={users.role}
                      type="text"
                      className="form-control login_field"
                      id="validationCustom03"
                      required
                    />
                    {errField.roleErr.length > 0 && (
                      <span style={{ color: "red" }}>{errField.roleErr}</span>
                    )}
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
                <button className="signupbtn">SIGNUP</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Individual;
