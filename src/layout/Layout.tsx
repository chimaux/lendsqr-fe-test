import React from "react";
// import { UseGlobalContext } from "../Context";
import TopNavigation from "./topNavigation/TopNavigation";
import './layout.scss'
import SideNavigation from "./sideNavigation/SideNavigation";
import MobileSideNav from "./mobileSideNav/MobileSideNav";

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

      <MobileSideNav/>
      <TopNavigation/>
      <div className="container2">
        <SideNavigation />
      <div className="child">{children}</div>
      </div>
   
   
    </div>
  );
};

export default Layout;
