import React, { useState, useContext } from "react";
import Login from "../screen/login/Login";
import Dashboard from "../screen/dashboard/Dashboard";
import { UseGlobalContext } from "../Context";


const Authentication: React.FC = () => {
 
  const {
    isLogged,

  } = UseGlobalContext();


  return <>{isLogged == false ? <Login /> : <Dashboard />}</>;
};

export default Authentication;
