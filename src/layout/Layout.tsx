import React from "react";
// import { UseGlobalContext } from "../Context";
import TopNavigation from "./topNavigation/TopNavigation";
import './layout.scss'
import SideNavigation from "./sideNavigation/SideNavigation";
import MobileSideNav from "./mobileSideNav/MobileSideNav";
import { UseGlobalContext } from "../Context";

interface LayoutProps {
  children: React.ReactNode; // Define the type of children
}


const Layout : React.FC<LayoutProps> = ({ children }) => {
  const {
    
    setToggleUserDataMoreItems,
    setBtnOff3,
    set_user_more_overlay,
    user_more_overlay
  
  } = UseGlobalContext();
  
const handleClose =()=>{
  // setMoreIndex_b((linesPerPage * (itemOffset/linesPerPage)) +index);
  setToggleUserDataMoreItems((prev) => !prev);
  set_user_more_overlay((prev) => !prev)
  // setTimeout(() => {
  //   setBtnOff3(false)
  // }, 200);

}
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
