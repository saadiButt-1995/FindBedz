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
            if (response.status === 200) {
              toast.success("Login Successfully!");
              setTimeout(async() => {
                if (response.data.role === "shelter") {
                  await getShelterDetails(response.data.user)
                  setTimeout(() => {
                    navigate("/sheltor-dashboard");
                  }, 1000);
                } else if (response.data.role === "user") {
                  await setLocalValues(response.data)
                  navigate("/individual-landingpage");
                } else if (response.data.role === "sheriff") {
                  await setLocalValues(response.data)
                  navigate("/OrganizationLandingpage");
                } 
              }, 1000);
            }else{
              toast.error("error!");
            }
          } catch (e) {
            var error = ''
            console.log('ERROR*************');
            if(e.message){
              error = e.message
              if(e.message.data){
                error = e.message.data
                if(e.message.data.message){
                  error = e.message.data.message
                }
              }
            }
            toast.error(error);
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
            <div className="account">
                <h3 className="header_title text-center">LOGIN</h3>
                <p className="header_text text-center">Please login to continue</p>
                <div className="login_fields">
                <div className="form-group col-md-3 login_inputs">
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
                <div className="form-group col-md-3 login_inputs">
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
                    <Link to="/forgot-password">
                    <p
                        style={{
                        fontFamily: "popreg",
                        fontSize: "10px",
                        float: "right",
                        marginTop: "5px",
                        textDecoration:"underline"
                        }}
                    >
                        Forgot Password
                    </p>
                    </Link>
                </div>
                </div>
                <div className="text-center">
                <button className="loginbutton col-md-3" onClick={submit}>
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