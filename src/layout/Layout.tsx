import React from "react";
// import { UseGlobalContext } from "../Context";
import TopNavigation from "./topNavigation/TopNavigation";
import './layout.scss'

interface LayoutProps {
  children: React.ReactNode; // Define the type of children
}


const Layout : React.FC<LayoutProps> = ({ children }) => {
  // const { 
    // setIsLogged 
  // } = 
  // UseGlobalContext();
  return (
    <div className="body">
      <TopNavigation/>
      {children}
      <p>bottom</p>
    </div>
  );
};

export default Layout;
