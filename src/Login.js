import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function Login() {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const navigate = useNavigate();

  const [errField, setErrField] = useState({
    userNameErr: "",
    passwordErr: "",
  });

  let name, value;
  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };
  console.log(user);
  const submit = async (e) => {
    e.preventDefault();
    if (validForm()) {
      let url = "https://shelterprovider.herokuapp.com/v1/auth/login";
      let options = {
        method: "POST",
        url: url,
        headers: {},
        data: user,
      };
      try {
        let response = await axios(options);

        console.log(response);
        if (response.status === 200) {
          toast.success("Login Successfully!");
          setTimeout(() => {
            navigate("/individual-landingpage");
          }, 1500);
        }
      } catch (e) {
        console.log(e);
        toast.error("Something went wrong !");
      }
    }
  };

  const validForm = () => {
    let formIsValid = true;
    setErrField({
      userNameErr: "",
      passwordErr: "",
    });

    if (user.password === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        passwordErr: "Please Enter Password",
      }));
    }

    if (user.userName === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        userNameErr: "Please Enter Name",
      }));
    }

    return formIsValid;
  };

  return (
    <div className="main_login">
      <Link to="/">
        <div className="logodiv login_log">
          <img className="login_logo" src="/images/sheltorlogo.svg" alt="" />
        </div>
      </Link>

      <ToastContainer />
      <div className="login_text">
        <div className="log_title text-center">LOGIN</div>
        <div className="log_title2 text-center">Please Login to continue</div>
        <div className="login_fields">
          <div className="form-group col-md-6 login_inputs">
            <label className="label_input1">UserName</label>
            <input
              name="userName"
              value={user.userName}
              onChange={handleInput}
              type="text"
              className="form-control login_field"
              id="inputuserName4"
            />
            {errField.userNameErr.length > 0 && (
              <span
                style={{ fontSize: "11px", fontFamily: "popreg", color: "red" }}
              >
                {errField.userNameErr}
              </span>
            )}
          </div>
          <div className="form-group col-md-6 login_inputs">
            <label className="label_input1">Password</label>
            <input
              name="password"
              value={user.password}
              onChange={handleInput}
              type="password"
              className="form-control login_field"
              id="inputPassword4"
            />
            {errField.passwordErr.length > 0 && (
              <span
                style={{ fontSize: "11px", fontFamily: "popreg", color: "red" }}
              >
                {errField.passwordErr}
              </span>
            )}
          </div>
        </div>
        <div className="text-center">
          <button className="loginbutton col-md-6" onClick={submit}>
            LOGIN
          </button>
          <p className="footer_link">
            No Account? Create one
            <Link to="/signup">
              <span> here</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
