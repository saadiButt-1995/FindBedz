import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { isLogin } from "./utils";
const Dashboard = () => {
  
  const navigate = useNavigate()
  const role = localStorage.getItem('role')
    useEffect(()=> {
      if(isLogin()){
        if(role === 'user'){
          navigate('/individual-landingpage')
        }else if(role === 'sheriff'){
          navigate('/OrganizationLandingpage')
        }else if(role === 'shelter'){
          navigate('/sheltor-dashboard')
        }
      }else{
        navigate('/login')
      }
    })
  
  return (
    <>
    </>
  );
};

export default Dashboard;
