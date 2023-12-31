import React, { useState } from "react";
import "./topNavigation.scss";
import logo from "../../images/logo.png";
import { HiOutlineMenu } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { BiSolidDownArrow } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import bell from "../../images/bell.png";
import avatar from "../../images/avatar.png";
import More from "./component/more/More";
import { UseGlobalContext } from "../../Context";

const TopNavigation: React.FC = () => {
  const { moreOpen, setMoreopen,  setShowMobileNav,set_focus_fix_state } = UseGlobalContext();


  // ISFOCUSED STATE STARTS HERE
  const [isFocused, setIsFocused] = useState<boolean>(false);
  // ISFOCUSED STATE ENDS HERE

  const handleFocus = () => {
    if (isFocused === false) {
      setIsFocused(true);
    }
  };

  const handleBlur = () => {
    if (isFocused === true) {
      setIsFocused(false);
    }
  };

  return (
    <div className="overall">
      <div className="topNavContainer1">
        {/* LOGO STARTS HERE */}
        <div className="logoDiv">
          <img src={logo} alt="lendsqr" className="logo" />
          <div className="menuIcon"
           onClick={()=>setShowMobileNav(true)}
          >
            <HiOutlineMenu size={25} />
          </div>
        </div>
        {/* LOGO ENDS HERE */}

        <div className="rightTopNav">
          
          {/* SEARCH INPUT */}
          <div
            className={`search1 ${isFocused === true ? "focus" : "blur"}`}
            onFocus={() => handleFocus()}
            onBlur={() => handleBlur()}
          >
            <input
              type="text" 
              placeholder="Search"
              className="search2"
              required
            />
            <div className="searchIcon">
              <span>
                <GoSearch size={20} />
              </span>
            </div>
          </div>
          {/* SEARCH INPUT ENDS*/}

          {/* USER TAB */}
          <div className="topNav2">
            <div className="topNav2b">
              <div>
                <a href="#">docs</a>
              </div>
              <div className="space-x">
                <img src={bell} alt=" " className="bell" />
              </div>
              <div className="space-x">
                <img src={avatar} alt=" " className="avatar" />
              </div>

              <button
                className="avatarRole moreBtn"
            
                onClick={() => {
                  set_focus_fix_state(false)
                  setMoreopen((prev) => !prev);
              
                }}
              >
                <div>Chima</div>
                <BiSolidDownArrow size={18} className="space-x3" />
              </button>
            </div>

            <button
              className="moreBtn "
          
              onClick={() => {
                set_focus_fix_state(false)
                setMoreopen((prev) => !prev);
              
              }}
            >
              <FiMoreVertical size={24} className="moreIcon" />
            </button>
          </div>
        </div>
      </div>
      {moreOpen === true ? <More /> : ""}
    </div>
  );
};

export default TopNavigation;
