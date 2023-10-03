import React, { useEffect, useRef } from "react";
import "./sideNavigation.scss";
import { Link } from "react-router-dom";
import { UseGlobalContext } from "../../Context";

// CUSTOMERS ICONS
import briefCase from "./images/briefcase 1.png";
import arrowdown from "./images/np_next_2236826_000000 2.png";
import house from "./images/home 1.png";
import users from "./images/user-friends 1.png";
import guarantor from "./images/users 1.png";
import loan from "./images/sack 1.png";
import decision from "./images/handshake-regular 1.png";
import savings from "./images/piggy-bank 1.png";
import whiteL from "./images/user-check 1.png";
import karma from "./images/karma.png";
// BUSINESSES ICONS
import loanProduct from "./images/loanProduct.png";
import savingProduct from "./images/savingProduct.png"
import feesCharges from "./images/feesCharge.png"
import transaction from "./images/transaction.png"
import service from "./images/service.png"
import  serviceAccount from "./images/serviceAccount.png"
import  settlement from "./images/settlement.png"
import  report from "./images/report.png"

// REPORT ICONS

import preference from "./images/preference.png"
import feesPricing from "./images/feesPricing.png"
import auditLog from "./images/auditLogs.png"
import systemMessages from "./images/systemMessage.png"






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
    icon:  loanProduct ,
    navlink:"#"
  },
  {
    title: "Whitelist",
    icon: whiteL ,
    navlink:"#"
  },
  {
    title: "Karma",
    icon: karma ,
    navlink:"#"
  },
];
const businessItem = [
  {
    title: "Organization",
    icon: briefCase,
    navlink:"/organization"
  },
  {
    title: "Loan Products",
    icon:  loanProduct ,
    navlink:"#"
  },
  {
    title: "Savings Products",
    icon: savingProduct ,
    navlink:"#"
  },
  {
    title: "Fees and Charges",
    icon:  feesCharges ,
    navlink:"#"
  },
  {
    title: "Transactions",
    icon:  transaction ,
    navlink:"#"
  },
  {
    title: "Services",
    icon: service ,
    navlink:"#"
  },
  {
    title: "Service Account",
    icon: serviceAccount ,
    navlink:"#"
  },
  {
    title: "Settlements",
    icon: settlement ,
    navlink:"#"
  },
  {
    title: "Reports",
    icon: report ,
    navlink:"#"
  },
];
const settingsItem = [
  {
    title: "Preferences",
    icon: preference ,
    navlink:"#"
  },
  {
    title: "Fees and Pricing",
    icon:  feesPricing ,
    navlink:"#"
  },
  {
    title: "Audit Logs",
    icon: auditLog ,
    navlink:"#"
  },
  {
    title: "Systems Messages",
    icon: systemMessages ,
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
