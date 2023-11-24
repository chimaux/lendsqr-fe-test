import React from 'react'
import { Route, Routes } from "react-router-dom";
// import Authentication from './Authentication';
import User from './screen/user/User';
import Dashboard from './screen/dashboard/Dashboard';
import Login from './screen/login/Login';
import Guarantors from './screen/guarantors/Guarantors';
import Organisation from './screen/organisation/Organization';
import UserDetails from './screen/userDetailsPage/UserDetails';

const Router: React.FC  = () => {
  return (

<div>
<Routes>
            <Route path="/" element={<Login />} />
            <Route path="/user" element={<User />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/guarantors" element={<Guarantors />} />
            <Route path="/organization" element={<Organisation />} />
            <Route path="/details/:id" element={<UserDetails />} />
        </Routes>
</div>
   
  )
}

export default Router