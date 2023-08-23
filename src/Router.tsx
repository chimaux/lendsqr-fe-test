import React from 'react'
import { Route, Routes } from "react-router-dom";
import Authentication from './layout/Authentication';

const Router: React.FC  = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Authentication />} />
        </Routes>
    </div>
  )
}

export default Router