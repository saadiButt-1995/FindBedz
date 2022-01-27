import React from "react";
import { Link } from "react-router-dom";
const Landingpage = () => {
  return (
    <>
      <div className="landingpage">
        <Link to="/">
          <div className="logodiv">
            <img src="/images/sheltorlogo.svg" alt="" />
          </div>
        </Link>
        <div className="account">
          <div className="logindiv">
            <Link to="/login">
              <button className="loginbtn">Login</button>
            </Link>
            <div className="logtext">to my Account</div>
          </div>
        </div>
        <div className="creat_account">
          <div className="logtext logtext2">No Account? Create one here</div>
          <Link to="/signup">
            <button className="creatbtn">Create Account</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
