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


const custemersItem = [
  {
    title: "Users",
    icon: users ,
  },
  {
    title: "Guarantors",
    icon:  guarantor ,
  },
  {
    title: "Loans",
    icon: loan ,
  },
  {
    title: "Decision Models",
    icon:  decision ,
  },
  {
    title: "Savings",
    icon:  savings ,
  },
  {
    title: "Loan Request",
    icon:  loanR ,
  },
  {
    title: "Whitelist",
    icon: whiteL ,
  },
  {
    title: "Karma",
    icon: whiteL ,
  },
];
const businessItem = [
  {
    title: "Organization",
    icon: users ,
  },
  {
    title: "Loan Products",
    icon:  guarantor ,
  },
  {
    title: "Savings Products",
    icon: loan ,
  },
  {
    title: "Fees and Charges",
    icon:  decision ,
  },
  {
    title: "Transactions",
    icon:  savings ,
  },
  {
    title: "Loan Request",
    icon:  loanR ,
  },
  {
    title: "Services",
    icon: whiteL ,
  },
  {
    title: "Service Account",
    icon: whiteL ,
  },
  {
    title: "Settlements",
    icon: whiteL ,
  },
  {
    title: "Reports",
    icon: whiteL ,
  },
];
const settingsItem = [
  {
    title: "Organization",
    icon: users ,
  },
  {
    title: "Loan Products",
    icon:  guarantor ,
  },
  {
    title: "Savings Products",
    icon: loan ,
  },

];

const SideNavigation: React.FC = () => {





const popupRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (popupRef.current) {
    popupRef.current.focus();
  }
}, []);

  return (
    <div className="overallContainer hide-scrollbar TabDesign">
      <div className="switchOrganization">
        <img className="icon" src={briefCase} alt=" " />
        <span className="text">Switch Organization</span>
        <img className="icon2" src={arrowdown} alt=" " />
      </div>

      <Link to="/dashboard">
      <div className="dashBoard"
        tabIndex={-1} ref={popupRef}
      >
        <img className="icon" src={house} alt=" " />
        <span className="text">Dashboard</span>
      </div>
      </Link>

 
      <div>
        <p className="customers">CUSTOMERS</p>
        {custemersItem.map((item,index) => (
          <div className="dashBoard"
          key={index.toString()}
          tabIndex={index === 0 ? 0 : -1} 
          ref={index === 0 ? popupRef : undefined} 
          >
            <img className="icon" src={item.icon} alt={`Image ${index}`} />
            <span className="text">{item.title}</span>
          </div>
        ))}
      </div>
      <div>
        <p className="customers">BUSINESS</p>
        {businessItem.map((item,index) => (
          <div className="dashBoard"
          key={index.toString()}
          tabIndex={-1} ref={undefined}
          >
            <img className="icon" src={item.icon} alt={`Image ${index}`} />
            <span className="text">{item.title}</span>
          </div>
        ))}
      </div>
      <div>
        <p className="customers">SETTINGS</p>
        {settingsItem.map((item,index) => (
          <div className="dashBoard"
          key={index.toString()}
          tabIndex={-1} ref={undefined}
          >
            <img className="icon" src={item.icon} alt={`Image ${index}`} />
            <span className="text">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNavigation;
