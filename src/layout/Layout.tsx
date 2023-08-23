import React from "react";
import { UseGlobalContext } from "../Context";

const Layout = ({ children }) => {
  const { setIsLogged } = UseGlobalContext();
  return (
    <div>
      <button onClick={() => setIsLogged((prev => !prev))}>top</button>
      {children}
      <p>bottom</p>
    </div>
  );
};

export default Layout;
