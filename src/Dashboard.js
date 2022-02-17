import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
const Dashboard = () => {
  
  const navigate = useNavigate()
  const role = localStorage.getItem('role')
  useEffect(()=> {
    if(role === 'user'){
      navigate('/individual-landingpage')
    }else if(role === 'sheriff'){
      navigate('/sheltor-dashboard')
    }else{
      navigate('/OrganizationLandingpage')
    }
  })
  return (
    <>
    </>
  );
};

export default Dashboard;
