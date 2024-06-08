import React, { useEffect, useRef, useState } from "react";
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
import savingProduct from "./images/savingProduct.png";
import feesCharges from "./images/feesCharge.png";
import transaction from "./images/transaction.png";
import service from "./images/service.png";
import serviceAccount from "./images/serviceAccount.png";
import settlement from "./images/settlement.png";
import report from "./images/report.png";

// REPORT ICONS

import preference from "./images/preference.png";
import feesPricing from "./images/feesPricing.png";
import auditLog from "./images/auditLogs.png";
import systemMessages from "./images/systemMessage.png";
import { IoIosLogOut } from "react-icons/io";

const custemersItem = [
  {
    title: "Users",
    icon: users,
    navlink: "/user",
    tooltip: "View and manages users's detail.",
  },
  {
    title: "Guarantors",
    icon: guarantor,
    navlink: "/guarantors",
    tooltip: "See list of guarantors",
  },
  {
    title: "Loans",
    icon: loan,
    navlink: "#",
    tooltip: "View and manage your user's loan.",
  },
  {
    title: "Decision Models",
    icon: decision,
    navlink: "#",
    tooltip: "Setup and manage your users decision loan settings.",
  },
  {
    title: "Savings",
    icon: savings,
    navlink: "#",
    tooltip: "",
  },
  {
    title: "Loan Request",
    icon: loanProduct,
    navlink: "#",
    tooltip: "Approve or decline your user's loan request.",
  },
  {
    title: "Whitelist",
    icon: whiteL,
    navlink: "#",
    tooltip: "Whitelist special borrowers.",
  },
  {
    title: "Karma",
    icon: karma,
    navlink: "#",
    tooltip: "",
  },
];
const businessItem = [
  {
    title: "Organization",
    icon: briefCase,
    navlink: "/organization",
    tooltip: "View and manage organisation",
  },
  {
    title: "Loan Products",
    icon: loanProduct,
    navlink: "#",
    tooltip: "Create, view, and manage your loan product.",
  },
  {
    title: "Savings Products",
    icon: savingProduct,
    navlink: "#",
    tooltip: "",
  },
  {
    title: "Fees and Charges",
    icon: feesCharges,
    navlink: "#",
    tooltip: "",
  },
  {
    title: "Transactions",
    icon: transaction,
    navlink: "#",
    tooltip: "View all transactions by users, done on your app.",
  },
  {
    title: "Services",
    icon: service,
    navlink: "#",
    tooltip: "View your prepaid service account and charges.",
  },
  {
    title: "Service Account",
    icon: serviceAccount,
    navlink: "#",
    tooltip: "",
  },
  {
    title: "Settlements",
    icon: settlement,
    navlink: "#",
    tooltip: "",
  },
  {
    title: "Reports",
    icon: report,
    navlink: "#",
    tooltip: "Gain access to useful reports and business insights.",
  },
];
const settingsItem = [
  {
    title: "Preferences",
    icon: preference,
    navlink: "#",
    tooltip: "",
  },
  {
    title: "Fees and Pricing",
    icon: feesPricing,
    navlink: "#",
    tooltip: "",
  },
  {
    title: "Audit Logs",
    icon: auditLog,
    navlink: "#",
    tooltip: "Track your team and users activities",
  },
  {
    title: "Systems Messages",
    icon: systemMessages,
    navlink: "#",
    tooltip: "",
  },
];

const SideNavigation: React.FC = () => {
  const { pageName, setPageName, setIsLogged } = UseGlobalContext();

  const [myIndex, setMyIndex] = useState<number>();
  const [sideSection, setSideSection] = useState<string>("");

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (popupRef.current) {
      popupRef.current.focus();
    }
  }, []);

  return (
    <div className="TabDesign hide-scrollbar">
      <div className="overallContainer2  ">
        <div className="switchOrganization">
          <img className="icon" src={briefCase} alt=" " />
          <span className="text">Switch Organization</span>
          <img className="icon2" src={arrowdown} alt=" " />
        </div>

        <Link to="/dashboard" className="linkStyle">
          <div
            className="dashBoard"
            onClick={() => setPageName("dashboard")}
            tabIndex={1}
            ref={pageName === "dashboard" ? popupRef : undefined}
          >
            <img className="icon" src={house} alt=" " />
            <span className="text">Dashboard</span>
          </div>
        </Link>

        <div>
          <p className="customers">CUSTOMERS</p>
          {custemersItem.map((item, index) => (
            <Link   key={index.toString()} to={`${item.navlink}`} className="linkStyle">
              <div
                className="dashBoard"
              
                onClick={() => setPageName(item.title)}
                onMouseEnter={() => {
                  setMyIndex(index);
                  setSideSection("customers");
                }}
                onMouseLeave={() => {
                  setMyIndex(-1);
                }}
                tabIndex={1}
                // tabIndex={index === 0 ? 0 : -1}
                ref={pageName === item.title ? popupRef : undefined}
              >
                <img className="icon" src={item.icon} alt={`Image ${index}`} />
                <span className="text">{item.title}</span>

                <div
                  // className={`myDisplay tooltip${index}`}>
                  className={`${
                    myIndex === index &&
                    item.tooltip.length > 0 &&
                    sideSection === "customers"
                      ? `tooltip${index}`
                      : "myDisplay"
                  }`}
                >
                  {item.tooltip}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div>
          <p className="customers">BUSINESS</p>
          {businessItem.map((item, index) => (
            <Link key={index.toString()} to={`${item.navlink}`} className="linkStyle">
              <div
                className="dashBoard"
                onClick={() => setPageName(item.title)}
                
                tabIndex={1}
                ref={pageName === item.title ? popupRef : undefined}
                onMouseEnter={() => {
                  setMyIndex(index);
                  setSideSection("business");
                }}
                onMouseLeave={() => {
                  setMyIndex(-1);
                }}
              >
                <img className="icon" src={item.icon} alt={`Image ${index}`} />
                <span className="text">{item.title}</span>
                <div
                  className={`${
                    myIndex === index &&
                    item.tooltip.length > 0 &&
                    sideSection === "business"
                      ? `tooltip2${index}`
                      : "myDisplay"
                  }`}
                >
                  {item.tooltip}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div>
          <p className="customers">SETTINGS</p>
          {settingsItem.map((item, index) => (
            <div
              className="dashBoard"
              key={index.toString()}
              tabIndex={1}
              ref={pageName === item.title ? popupRef : undefined}
              onMouseEnter={() => {
                setMyIndex(index);
                setSideSection("settings");
              }}
              onMouseLeave={() => {
                setMyIndex(-1);
              }}
            >
              <img className="icon" src={item.icon} alt={`Image ${index}`} />
              <span className="text">{item.title}</span>
              <div
                className={`${
                  myIndex === index &&
                  item.tooltip.length > 0 &&
                  sideSection === "settings"
                    ? `tooltip3${index}`
                    : "myDisplay"
                }`}
              >
                {item.tooltip}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="logoutItem">
        <div className="logout" onClick={()=>  setIsLogged(false)}>
          <IoIosLogOut className="icon"  />
          Logout
        </div>
        <div className="version">v1.2.0</div>
      </div>
    </div>
  );
};

export default SideNavigation;
