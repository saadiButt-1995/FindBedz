import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
function Forget() {
  const [user, setUser] = useState({
    userPhone: "",
  });
  const navigate = useNavigate();

  const [errField, setErrField] = useState({
    userPhoneErr: "",
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
          toast.success("Login Successfully!");
          setTimeout(() => {
            navigate("/individual-landingpage");
          }, 1000);
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
      userPhoneErr: "",
    });

    if (user.userPhone === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        userPhoneErr: "Please Enter Phone number",
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
      <h4 className="rest_title">Reset Password </h4>
      <p className="reset_p">Please enter your Email to reset password</p>
      <div className="form-group col-lg-8 login_inputs">
        <input
          value={user.userPhone}
          onChange={handleInput}
          name="number"
          className="form-control login_field"
          type="email"
          placeholder="Enter Phone Number"
          required
        />
        {errField.userPhoneErr.length > 0 && (
          <span
            style={{
              textAlign: "inherit",
              fontSize: "11px",
              fontFamily: "popreg",
              color: "red",
            }}
          >
            {errField.userPhoneErr}
          </span>
        )}
      </div>

      <div>
        <button onClick={submit} className="forgetbtn">
          Send Reset Pin
        </button>
      </div>
    </div>
  );
}

export default Forget;
