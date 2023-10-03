import React, { useEffect, useRef } from "react";
import "./sideNavigation.scss";
import briefCase from "./images/briefcase 1.png";
import arrowdown from "./images/np_next_2236826_000000 2.png";
import house from "./images/home 1.png";
import users from "./images/user-friends 1.png";
import guarantor from "./images/users 1.png";
import loan from "./images/sack 1.png";
import decision from "./images/handshake-regular 1.png";
import savings from "./images/piggy-bank 1.png";
import loanR from "./images/LoanR.png";
import whiteL from "./images/user-check 1.png";
import { Link } from "react-router-dom";
import { UseGlobalContext } from "../../Context";


const custemersItem = [
  {
    title: "Users",
    icon: users ,
    navlink: "/user" ,
  },
  {
    title: "Guarantors",
    icon:  guarantor ,
    navlink: "/guarantors",
  },
  {
    title: "Loans",
    icon: loan ,
    navlink: "#",
  },
  {
    title: "Decision Models",
    icon:  decision,
    navlink: "#",
  },
  {
    title: "Savings",
    icon:  savings ,
    navlink:"#"
  },
  {
    title: "Loan Request",
    icon:  loan ,
    navlink:"#"
  },
  {
    title: "Whitelist",
    icon: whiteL ,
    navlink:"#"
  },
  {
    title: "Karma",
    icon: whiteL ,
    navlink:"#"
  },
];
const businessItem = [
  {
    title: "Organization",
    icon: users ,
    navlink:"/organization"
  },
  {
    title: "Loan Products",
    icon:  guarantor ,
    navlink:"#"
  },
  {
    title: "Savings Products",
    icon: loan ,
    navlink:"#"
  },
  {
    title: "Fees and Charges",
    icon:  decision ,
    navlink:"#"
  },
  {
    title: "Transactions",
    icon:  savings ,
    navlink:"#"
  },
  {
    title: "Loan Request",
    icon:  loanR ,
    navlink:"#"
  },
  {
    title: "Services",
    icon: whiteL ,
    navlink:"#"
  },
  {
    title: "Service Account",
    icon: whiteL ,
    navlink:"#"
  },
  {
    title: "Settlements",
    icon: whiteL ,
    navlink:"#"
  },
  {
    title: "Reports",
    icon: whiteL ,
    navlink:"#"
  },
];
const settingsItem = [
  {
    title: "Preferences",
    icon: users ,
    navlink:"#"
  },
  {
    title: "Fees and Pricing",
    icon:  guarantor ,
    navlink:"#"
  },
  {
    title: "Audit Logs",
    icon: loan ,
    navlink:"#"
  },

];

const SideNavigation: React.FC = () => {

  const {pageName,setPageName } = UseGlobalContext();
console.log(pageName," :page name")

const popupRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (popupRef.current) {
    popupRef.current.focus();
  }
}, []);

  return (
<div className="overallContainer TabDesign">
<div className="overallContainer2 hide-scrollbar ">
      <div className="switchOrganization">
        <img className="icon" src={briefCase} alt=" " />
        <span className="text">Switch Organization</span>
        <img className="icon2" src={arrowdown} alt=" " />
      </div>

      <Link to="/dashboard" className="linkStyle">
      <div className="dashBoard"
       onClick={()=> setPageName("dashboard")}
        tabIndex={1}
        ref={pageName === "dashboard" ? popupRef : undefined} 
      >
        <img className="icon" src={house} alt=" " />
        <span className="text">Dashboard</span>
      </div>
      </Link>

 
      <div>
        <p className="customers">CUSTOMERS</p>
        {custemersItem.map((item,index) => (
          <Link to={`${item.navlink}`} className="linkStyle">
          <div className="dashBoard"
          key={index.toString()}
         onClick={()=> setPageName(item.title)}

          tabIndex={1} 
          // tabIndex={index === 0 ? 0 : -1} 
          ref={pageName === item.title ? popupRef : undefined} 
    

          >
            <img className="icon" src={item.icon} alt={`Image ${index}`} />
            <span className="text">{item.title}</span>
          </div>
          </Link>
        ))}
      </div>
      <div>
        <p className="customers">BUSINESS</p>
        {businessItem.map((item,index) => (
            <Link to={`${item.navlink}`} className="linkStyle">
          <div className="dashBoard"
          onClick={()=> setPageName(item.title)}
          key={index.toString()}
          tabIndex={1} 
          ref={pageName === item.title ? popupRef : undefined} 
          >
            <img className="icon" src={item.icon} alt={`Image ${index}`} />
            <span className="text">{item.title}</span>
          </div>
          </Link>
        ))}
      </div>
      <div>
        <p className="customers">SETTINGS</p>
        {settingsItem.map((item,index) => (
          <div className="dashBoard"
          key={index.toString()}
          tabIndex={1} ref={pageName === item.title ? popupRef : undefined} 
          >
            <img className="icon" src={item.icon} alt={`Image ${index}`} />
            <span className="text">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
</div>
  );
};

export default SideNavigation;
