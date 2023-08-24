import React, { useState } from "react";
import "./topNavigation.scss";
import logo from "../../images/logo.png";
import { HiOutlineMenu } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { BiSolidDownArrow } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import bell from "../../images/bell.png";
import avatar from "../../images/avatar.png";

const TopNavigation: React.FC = () => {
  // PASSWORD STATE STARTS HERE
  const [password, setPassword] = useState<string>("");
  // PASSWORD STATE ENDS HERE

  // SHOW PASSWORD STATE STARTS HERE
  const [showPassword, setShowPassword] = useState<boolean>(false);
  // SHOW PASSWORD STATE ENDS HERE

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
    <div>
      <div className="topNavContainer1">
        {/* LOGO STARTS HERE */}
        <div className="logoDiv">
          <img src={logo} alt="lendsqr" className="logo" />
          <div className="menuIcon">
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
              type={showPassword == true ? "text" : "password"}
              placeholder="Password"
              className="search2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            
            <div className="avatarRole">
                <div>Chima</div>
             <BiSolidDownArrow size={18} className="space-x3"/>
            </div>
          </div>

          <FiMoreVertical size={24} className="moreIcon"/>

        </div>
</div>
      </div>
    </div>
  );
};

export default TopNavigation;
