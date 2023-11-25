import React, { useState } from "react";
import "./UserDetails.scss";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../layout/Layout";

import backIcon from "./images/backLongArrow.png";
import avatarIcon from "./images/avatar.png";
import starFillIcon from "./images/starFill.png";
import starOutlineIcon from "./images/startOutline.png";

export const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id)
  const navigate = useNavigate();

  const [currentTab,setCurrentTab] = useState<string>("1")
  return (
    <Layout>
      <div className="user_details_container">
        <div className="udc_back_container" onClick={() => navigate(-1)}>
          <img src={backIcon} alt="<<<" />
          <div>Back to users</div>
        </div>
        <div className="udc_second_container">
          <div className="udc_sc_details">User Details</div>
          <div className="udc_sc_action_container">
            <div className="udc_sc_ac_blacklist">BLACKLIST USER</div>
            <div className="udc_sc_ac_activate">ACTIVATE USER</div>
          </div>
        </div>

        <div className="udc_third_container">
          <div className="udctc_top">
            <div className="avater_container">
              <img className="ac_avater_icon" src={avatarIcon} alt="" />
              <div className="ac_text_container">
                <div className="actc_text1">Grace Effiom</div>
                <div className="actc_text2">LSQFf587g90</div>
              </div>
            </div>
            <div className="user_tiers">
              <div className="ut_text">User's Tier</div>
              <div className="ut_stars">
                <img src={starFillIcon} alt="" className="uts_icon" />
                <img src={starOutlineIcon} alt="" className="uts_icon_center" />
                <img src={starOutlineIcon} alt="" className="uts_icon" />
              </div>
            </div>
            <div className="amount_bank">
              <div className="ab_text1">N200,000.00</div>
              <div className="ab_text2">9912345678/Providus Bank</div>
            </div>
          </div>
          <div className="udctc_bottom">
            <div className="tab_select_header">
              <div className={`tsh_text ${currentTab === "1" ? "tsht_active":""}`}
              onClick={()=>setCurrentTab("1")}
              >General Details</div>
              <div className={`tsh_text ${currentTab === "2" ? "tsht_active":""}`}
              onClick={()=>setCurrentTab("2")}
              >Documents</div>
              <div className={`tsh_text ${currentTab === "3" ? "tsht_active":""}`}
               onClick={()=>setCurrentTab("3")}
              >Bank Details</div>
              <div className={`tsh_text ${currentTab === "4" ? "tsht_active":""}`}
               onClick={()=>setCurrentTab("4")}
              >Loans</div>
              <div className={`tsh_text ${currentTab === "5" ? "tsht_active":""}`}
               onClick={()=>setCurrentTab("5")}
              >Savings</div>
              <div className={`tsh_text ${currentTab === "6" ? "tsht_active":""}`}
               onClick={()=>setCurrentTab("6")}
              >App and System</div>
            </div>
          </div>
        </div>

  {
    currentTab === "1" ?
    <div className="udc_fourth_container">
    <div className="udcfc_personal">
      <div className="personal_title">Personal Information</div>
      <div className="udcfcp_container">
        <div className="udcfcpc_child1">
          <div className="child1_child">
            <div className="cc_text1">FULL NAME</div>
            <div className="cc_text2">Grace Effiom</div>
          </div>
          <div className="child2_child">
            <div className="cc2_text1">MARITAL STATUS</div>
            <div className="cc2_text2">Single</div>
          </div>
        </div>
        <div className="udcfcpc_child1">
          <div className="child1_child">
            <div className="cc_text1">PHONE NUMBER</div>
            <div className="cc_text2">07060780922</div>
          </div>
          <div className="child2_child">
            <div className="cc2_text1">CHILDREN</div>
            <div className="cc2_text2">None</div>
          </div>
        </div>
        <div className="udcfcpc_child1">
          <div className="child1_child">
            <div className="cc_text1">EMAIL ADDRESS</div>
            <div className="cc_text2">grace@gmail.com</div>
          </div>
          <div className="child2_child">
            <div className="cc2_text1">TYPE OF RESIDENCE</div>
            <div className="cc2_text2">Parent’s Apartment</div>
          </div>
        </div>
        <div className="udcfcpc_child1">
          <div className="child1_child">
            <div className="cc_text1">BVN</div>
            <div className="cc_text2">07060780922</div>
          </div>
 
        </div>
        <div className="udcfcpc_child1">
          <div className="child1_child">
            <div className="cc_text1">GENDER</div>
            <div className="cc_text2">Male</div>
          </div>
   
        </div>

      </div>
    </div>
    <div className="udcfc_personal">
      <div className="personal_title">Education and Employment</div>
      <div className="udcfcp_container">
        <div className="udcfcpc_child1">
          <div className="child1_child">
            <div className="cc_text1">level of education</div>
            <div className="cc_text2">Grace Effiom</div>
          </div>
          <div className="child2_child">
            <div className="cc2_text1">office email</div>
            <div className="cc2_text2">Single</div>
          </div>
        </div>
        <div className="udcfcpc_child1">
          <div className="child1_child">
            <div className="cc_text1">employment status</div>
            <div className="cc_text2">07060780922</div>
          </div>
          <div className="child2_child">
            <div className="cc2_text1">Monthly income</div>
            <div className="cc2_text2">None</div>
          </div>
        </div>
        <div className="udcfcpc_child1">
          <div className="child1_child">
            <div className="cc_text1">sector of employment</div>
            <div className="cc_text2">grace@gmail.com</div>
          </div>
          <div className="child2_child">
            <div className="cc2_text1">loan repayment</div>
            <div className="cc2_text2">Parent’s Apartment</div>
          </div>
        </div>
        <div className="udcfcpc_child1">
          <div className="child1_child">
            <div className="cc_text1">Duration of employment</div>
            <div className="cc_text2">07060780922</div>
          </div>
 
        </div>


      </div>
    </div>
    <div className="udcfc_personal">
      <div className="personal_title">Socials</div>
      <div className="udcfcp_container">
        <div className="udcfcpc_child1">
          <div className="child1_child">
            <div className="cc_text1">Twitter</div>
            <div className="cc_text2">Grace Effiom</div>
          </div>

        </div>
        <div className="udcfcpc_child1">
          <div className="child1_child">
            <div className="cc_text1">Facebook</div>
            <div className="cc_text2">07060780922</div>
          </div>

        </div>
        <div className="udcfcpc_child1">
          <div className="child1_child">
            <div className="cc_text1">Instagram</div>
            <div className="cc_text2">grace@gmail.com</div>
          </div>

        </div>
      
      

      </div>
    </div>
    <div className="udcfc_personal bottom_border_unset">
      <div className="personal_title">GUARANTOR</div>
      <div className="udcfcp_container">
        <div className="udcfcpc_child1">
          <div className="child1_child">
            <div className="cc_text1">FULL NAME</div>
            <div className="cc_text2">Grace Effiom</div>
          </div>

        </div>
        <div className="udcfcpc_child1">
          <div className="child1_child">
            <div className="cc_text1">PHONE NUMBER</div>
            <div className="cc_text2">07060780922</div>
          </div>

        </div>
        <div className="udcfcpc_child1">
          <div className="child1_child">
            <div className="cc_text1">EMAIL ADDRESS</div>
            <div className="cc_text2">grace@gmail.com</div>
          </div>

        </div>
        <div className="udcfcpc_child1">
          <div className="child1_child">
            <div className="cc_text1">RELATIONSHIP</div>
            <div className="cc_text2">07060780922</div>
          </div>
 
        </div>


      </div>
    </div>
  </div>
  :
  <div className="udc_fourth_container"
  style={{
      height:"500px"
  }}
  >

  </div>
  }



      </div>
    </Layout>
  );
};

export default UserDetails;
