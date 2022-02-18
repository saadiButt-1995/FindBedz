import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { Wrapper } from './Auth.styled'
import { getShelterDetails, login, setLocalValues } from "../../services/auth";

const Home = () => {
    const navigate = useNavigate();
      
    const [user, setUser] = useState({
        userName: "",
        // password: "",
      });
    
      const [errField, setErrField] = useState({
        userNameErr: "",
      });
    
      let name, value;
      const handleInput = (event) => {
        name = event.target.name;
        value = event.target.value;
    
        setUser({ ...user, [name]: value });
      };
      const submit = async (e) => {
        e.preventDefault();
        if (validForm()) {
          try {
            var response = await login(user)
            let role = response.data.role;
            if (response.status === 200) {
              toast.success("Login Successfully!");
              setTimeout(() => {
                if (role === "shelter") {
                  getShelterDetails(response.data.user)
                  setTimeout(() => {
                    navigate("/sheltor-dashboard");
                  }, 1000);
                } else if (role === "user") {
                  setLocalValues(response.data)
                  navigate("/individual-landingpage");
                } else if (role === "sheriff") {
                  setLocalValues(response.data)
                  navigate("/OrganizationLandingpage");
                } 
              }, 1000);
            }else{
              toast.error("error!");
            }
          } catch (e) {
            console.log('ERROR*************');
            toast.error(e.response.data.message);
          }
        }
      };
    
      const validForm = () => {
        let formIsValid = true;
        setErrField({
          userNameErr: "",
          passwordErr: "",
          // roll:"shelter",
        });
    
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
        <Wrapper>
            <ToastContainer />
            <div className="account login_text">
                <div className="log_title text-center">LOGIN</div>
                <div className="log_title2 text-center">Please Login to continue</div>
                <div className="login_fields">
                <div className="form-group col-md-4 login_inputs">
                    <label className="label_input1">USERNAME </label>
                    <input
                    name="userName"
                    value={user.userName}
                    onChange={handleInput}
                    type="text"
                    placeholder="Create a username"
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
                <div className="form-group col-md-4 login_inputs">
                    <label className="label_input1">
                    PASSWORD <span style={{ color: "#828282" }}></span>
                    </label>
                    <input
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    type="password"
                    placeholder="************"
                    className="form-control login_field"
                    id="inputPassword4"
                    />
                    <Link to="/forget-password">
                    <p
                        style={{
                        fontFamily: "popreg",
                        fontSize: "10px",
                        float: "right",
                        marginTop: "5px",
                        textDecoration:"underline"
                        }}
                    >
                        Forget Password
                    </p>
                    </Link>
                </div>
                </div>
                <div className="text-center">
                <button className="loginbutton col-md-6" onClick={submit}>
                    LOGIN
                </button>
                <p className="footer_link">
                    No Account? Create one
                    <Link to="/register">
                    <span>here</span>
                    </Link>
                </p>
                </div>
            </div>
        </Wrapper>
    )
}

export default Home