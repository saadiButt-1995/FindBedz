import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
function Forget() {
  const [user, setUser] = useState({
    userPassword: "",
  });
  const navigate = useNavigate();

  const [errField, setErrField] = useState({
    userPasswordErr: "",
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
      //   let url = "https://shelterprovider.herokuapp.com/v1/auth/login";
      let options = {
        method: "POST",
        // url: url,
        headers: {},
        data: user,
      };
      try {
        let response = await axios(options);

        console.log(response);
        if (response.status === 200) {
          toast.success("Login Successfully!",{
            position: toast.POSITION.TOP_CENTER
          });
          setTimeout(() => {
            navigate("/individual-landingpage");
          }, 1000);
        }
      } catch (e) {
        console.log(e);
        toast.error("Something went wrong !",{
          position: toast.POSITION.TOP_CENTER
        });
      }
    }
  };

  const validForm = () => {
    let formIsValid = true;
    setErrField({
      userPasswordErr: "",
    });

    if (user.userPassword === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        userPasswordErr: "Please Enter Phone number",
      }));
    }

    return formIsValid;
  };
  return (
    <div className="forget_password">
      <ToastContainer />
      <div className="forget_logo">
        <Link to="/">
          <img className="restlogo" src="/images/sheltorlogo.svg" alt="" />
        </Link>
      </div>
      <h4 className="rest_title">New Password </h4>
      <p className="reset_p">Please enter your New Password</p>
      <div className="form-group col-lg-8 login_inputs">
        <input
          value={user.userPassword}
          onChange={handleInput}
          name="password"
          className="form-control login_field"
          type="password"
          placeholder="Enter Your Password"
          required
        />
        {errField.userPasswordErr.length > 0 && (
          <span
            style={{
              textAlign: "inherit",
              fontSize: "11px",
              fontFamily: "popreg",
              color: "red",
            }}
          >
            {errField.userPasswordErr}
          </span>
        )}
      </div>

      <div>
        <button onClick={submit} className="forgetbtn">
          Change Password
        </button>
      </div>
    </div>
  );
}

export default Forget;
