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


  return (
    <div className="body">
{/* {
  user_more_overlay === true ? <div className="user_more_overlay"
  onClick={handleClose}
  >
  
  </div> : ""
} */}
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
