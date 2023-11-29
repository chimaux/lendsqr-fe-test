import React, { useState } from "react";
import "./UserDetails.scss";
import { useNavigate} from "react-router-dom";
import Layout from "../../layout/Layout";

import backIcon from "./images/backLongArrow.png";
import avatarIcon from "./images/avatar.png";
import starFillIcon from "./images/starFill.png";
import starOutlineIcon from "./images/startOutline.png";
import { UseGlobalContext } from "../../Context";

export const UserDetails: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   console.log(id);
  const navigate = useNavigate();

  const [currentTab, setCurrentTab] = useState<string>("1");
  const { user_details_info } = UseGlobalContext();
  //   const {full_name}=user_details_info

  function formatAmount(number: string) {
    // Convert the number to a string
    const numberString = number;

    // Use regular expression to add commas
    return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

//   console.log(user_details_info);
  const {guarantors}=user_details_info

//   console.log(guarantors[0],"value love")
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
                <div className="actc_text1">{user_details_info.full_name}</div>
                <div className="actc_text2">LSQFf587g90</div>
              </div>
            </div>
            <div className="user_tiers">
              <div className="ut_text">User's Tier</div>
              {user_details_info.users_tier === "1" ? (
                <div className="ut_stars">
                  <img src={starFillIcon} alt="" className="uts_icon" />
                  <img
                    src={starOutlineIcon}
                    alt=""
                    className="uts_icon_center"
                  />
                  <img src={starOutlineIcon} alt="" className="uts_icon" />
                </div>
              ) : user_details_info.users_tier === "2" ? (
                <div className="ut_stars">
                  <img src={starFillIcon} alt="" className="uts_icon" />
                  <img
                    src={starFillIcon}
                    alt=""
                    className="uts_icon_center"
                  />
                  <img src={starOutlineIcon} alt="" className="uts_icon" />
                </div>
              ) : user_details_info.users_tier === "3" ? (
                <div className="ut_stars">
                  <img src={starFillIcon} alt="" className="uts_icon" />
                  <img
                    src={starFillIcon}
                    alt=""
                    className="uts_icon_center"
                  />
                  <img src={starFillIcon} alt="" className="uts_icon" />
                </div>
              ) : (
                <div className="ut_stars">
                  <img src={starOutlineIcon} alt="" className="uts_icon" />
                  <img
                    src={starOutlineIcon}
                    alt=""
                    className="uts_icon_center"
                  />
                  <img src={starOutlineIcon} alt="" className="uts_icon" />
                </div>
              )}
            </div>
            <div className="amount_bank">
              <div className="ab_text1">
                &#8358;{formatAmount(user_details_info.amount)}.00
              </div>
              <div className="ab_text2">{`${user_details_info.bank_account_number}/${user_details_info.bank_name}`}</div>
            </div>
          </div>
          <div className="udctc_bottom">
            <div className="tab_select_header">
              <div
                className={`tsh_text ${
                  currentTab === "1" ? "tsht_active" : ""
                }`}
                onClick={() => setCurrentTab("1")}
              >
                General Details
              </div>
              <div
                className={`tsh_text ${
                  currentTab === "2" ? "tsht_active" : ""
                }`}
                onClick={() => setCurrentTab("2")}
              >
                Documents
              </div>
              <div
                className={`tsh_text ${
                  currentTab === "3" ? "tsht_active" : ""
                }`}
                onClick={() => setCurrentTab("3")}
              >
                Bank Details
              </div>
              <div
                className={`tsh_text ${
                  currentTab === "4" ? "tsht_active" : ""
                }`}
                onClick={() => setCurrentTab("4")}
              >
                Loans
              </div>
              <div
                className={`tsh_text ${
                  currentTab === "5" ? "tsht_active" : ""
                }`}
                onClick={() => setCurrentTab("5")}
              >
                Savings
              </div>
              <div
                className={`tsh_text ${
                  currentTab === "6" ? "tsht_active" : ""
                }`}
                onClick={() => setCurrentTab("6")}
              >
                App and System
              </div>
            </div>
          </div>
        </div>

        {currentTab === "1" ? (
          <div className="udc_fourth_container">
            <div className="udcfc_personal">
              <div className="personal_title">Personal Information</div>
              <div className="udcfcp_container">
                <div className="udcfcpc_child1">
                  <div className="child1_child">
                    <div className="cc_text1">FULL NAME</div>
                    <div className="cc_text2">{user_details_info.full_name}</div>
                  </div>
                  <div className="child2_child">
                    <div className="cc2_text1">MARITAL STATUS</div>
                    <div className="cc2_text2">{user_details_info.marital_status}</div>
                  </div>
                </div>
                <div className="udcfcpc_child1">
                  <div className="child1_child">
                    <div className="cc_text1">PHONE NUMBER</div>
                    <div className="cc_text2">{user_details_info.phone_number}</div>
                  </div>
                  <div className="child2_child">
                    <div className="cc2_text1">CHILDREN</div>
                    <div className="cc2_text2">{user_details_info.children}</div>
                  </div>
                </div>
                <div className="udcfcpc_child1">
                  <div className="child1_child">
                    <div className="cc_text1">EMAIL ADDRESS</div>
                    <div className="cc_text2">{user_details_info.email}</div>
                  </div>
                  <div className="child2_child">
                    <div className="cc2_text1">TYPE OF RESIDENCE</div>
                    <div className="cc2_text2">{user_details_info.type_of_residence}</div>
                  </div>
                </div>
                <div className="udcfcpc_child1">
                  <div className="child1_child">
                    <div className="cc_text1">BVN</div>
                    <div className="cc_text2">{user_details_info.bvn}</div>
                  </div>
                </div>
                <div className="udcfcpc_child1">
                  <div className="child1_child">
                    <div className="cc_text1">GENDER</div>
                    <div className="cc_text2">{user_details_info.gender === "f"?"Female":"Male"}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="udcfc_personal ">
              <div className="personal_title">Education and Employment</div>
              <div className="udcfcp_container udcfcp_container2">
                <div className="udcfcpc_child1">
                  <div className="child1_child">
                    <div className="cc_text1">level of education</div>
                <div className="cc_text2">{user_details_info.education}</div>
                  </div>
                  <div className="child2_child">
                    <div className="cc2_text1">office email</div>
                    <div className="cc2_text2">{user_details_info.office_email}</div>
                  </div>
                </div>
                <div className="udcfcpc_child1">
                  <div className="child1_child">
                    <div className="cc_text1">employment status</div>
                    <div className="cc_text2">{user_details_info.employment}</div>
                  </div>
                  <div className="child2_child">
                    <div className="cc2_text1">Monthly income</div>
                    <div className="cc2_text2">{user_details_info.monthly_income}</div>
                  </div>
                </div>
                <div className="udcfcpc_child1">
                  <div className="child1_child">
                    <div className="cc_text1">sector of employment</div>
                    <div className="cc_text2">{user_details_info.sector_of_employment}</div>
                  </div>
                  <div className="child2_child">
                    <div className="cc2_text1">loan repayment</div>
                    <div className="cc2_text2">{formatAmount(user_details_info.loan_repayment)}</div>
                  </div>
                </div>
                <div className="udcfcpc_child1">
                  <div className="child1_child">
                    <div className="cc_text1">Duration of employment</div>
                    <div className="cc_text2">{user_details_info.duration_of_employment}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="udcfc_personal ">
              <div className="personal_title">Socials</div>
              <div className="udcfcp_container udcfcp_container2">
                <div className="udcfcpc_child1">
                  <div className="child1_child">
                    <div className="cc_text1">Twitter</div>
                    <div className="cc_text2">{user_details_info.twitter}</div>
                  </div>
                </div>
                <div className="udcfcpc_child1">
                  <div className="child1_child">
                    <div className="cc_text1">Facebook</div>
                    <div className="cc_text2">{user_details_info.facebook}</div>
                  </div>
                </div>
                <div className="udcfcpc_child1">
                  <div className="child1_child">
                    <div className="cc_text1">Instagram</div>
                    <div className="cc_text2">{user_details_info.instagram}</div>
                  </div>
                </div>
              </div>
            </div>

            <div 
         
            className="udcfc_personal bottom_border_unset">
            <div className="personal_title">GUARANTOR</div>
            {
    user_details_info.guarantors.map((item,index)=>(

        <div
               key={index.toString()}
            className={`udcfcp_container udcfcp_container2 ${index !== guarantors.length -1?"border_bottom_last":""}`}>
          <div className="udcfcpc_child1">
            <div className="child1_child">
              <div className="cc_text1">FULL NAME</div>
              <div className="cc_text2">{item.guarantor_name}</div>
            </div>
          </div>
          <div className="udcfcpc_child1">
            <div className="child1_child">
              <div className="cc_text1">PHONE NUMBER</div>
              <div className="cc_text2">{item.guarantor_phone_number}</div>
            </div>
          </div>
          <div className="udcfcpc_child1">
            <div className="child1_child">
              <div className="cc_text1">EMAIL ADDRESS</div>
              <div className="cc_text2">{item.guarantor_email}</div>
            </div>
          </div>
          <div className="udcfcpc_child1">
            <div className="child1_child">
              <div className="cc_text1">RELATIONSHIP</div>
              <div className="cc_text2">{item.guarantor_relationship}</div>
            </div>
          </div>
        </div>
   
    ))}
    </div>

          </div>
        ) : (
          <div
            className="udc_fourth_container"
            style={{
              height: "500px",
            }}
          ></div>
        )}
      </div>
    </Layout>
  );
};

export default UserDetails;
