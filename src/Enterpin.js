import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
function Enterpin() {
  const [user, setUser] = useState({
    userPin: "",
  });
  const navigate = useNavigate();

  const [errField, setErrField] = useState({
    userPinErr: "",
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
      userPinErr: "",
    });

    if (user.userPin === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        userPinErr: "Please Enter Pin",
      }));
    }

    return formIsValid;
  };

  return (
    <div className="forget_password">
      <div className="forget_logo">
        <Link to="/">
          <img className="restlogo" src="/images/sheltorlogo.svg" alt="" />
        </Link>
      </div>
      <ToastContainer />
      <h4 className="rest_title">Reset Pin </h4>
      <p className="reset_p">Please enter your Pin to reset password</p>
      <div className="form-group col-lg-8 login_inputs">
        <input
          value={user.userName}
          onChange={handleInput}
          name="email"
          className="form-control login_field"
          type="email"
          placeholder="Enter Pin"
          required
        />
        {errField.userPinErr.length > 0 && (
          <span
            style={{
              textAlign: "inherit",
              fontSize: "11px",
              fontFamily: "popreg",
              color: "red",
            }}
          >
            {errField.userPinErr}
          </span>
        )}
      </div>

      <div>
        <button onClick={submit} className="forgetbtn">
          Change password
        </button>
      </div>
    </div>
  );
}

export default Enterpin;
