// import React from 'react'
import "./UserMoreItems.scss"
import { UseGlobalContext } from "../../../Context"
import { useEffect, useRef } from "react";
import Dexie from "dexie";


interface LayoutProps {

    moreIndex_a: number; // Define the type of children

  }



export const UserMoreItems:React.FC<LayoutProps>= ({moreIndex_a}) => {

  const userDatabase = new Dexie("user_db");

  userDatabase.version(1).stores({
    customerData:
      "++id,user_id,organization,username,email,phone_number,date_joined,status,full_name,users_tier,amount,bank_name,bank_account_number,bvn,gender,marital_status,children,type_of_residence,education,employment,sector_of_employment,duration_of_employment,office_email,monthly_income,loan_repayment,twitter,facebook,instagram",

  });

  const customerData1 = userDatabase.table("customerData");


  const {  toggleUserDataMoreItems, moreIndex_b, setToggleUserDataMoreItems}=UseGlobalContext()

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (popupRef.current) {
      popupRef.current.focus();
    }

  }, []);


  const handleClose =()=>{
  console.log("onBlur block")
      setToggleUserDataMoreItems((prev) => !prev);

   

  
  }

  const blacklist_user = async ()=>{
    await customerData1.update(moreIndex_a+1,{status:"blacklist"})
    setToggleUserDataMoreItems((prev) => !prev);
  }

  const activate_user = async ()=>{
    await customerData1.update(moreIndex_a+1,{status:"active"})
    setToggleUserDataMoreItems((prev) => !prev);
  }









  return (
      
        toggleUserDataMoreItems === true && moreIndex_a === moreIndex_b ? <div
        tabIndex={-1} ref={popupRef}
        onBlur={handleClose}
        className='user_more_items_container'>

<div className="viewContainer">
<img className="viewContainer_img" src="./assets/images/user/view_details.png" alt=""  />
<div>View Details</div>
</div>
<div className="viewContainer"
onClick={blacklist_user}
>
<img className="viewContainer_img" src="./assets/images/user/blacklist_user.png" alt=""  />
<div>Blacklist User</div>
</div>
<div className="viewContainer"
onClick={activate_user}
>
<img className="viewContainer_img" src="./assets/images/user/activate_user.png" alt=""  />
<div>Activate User</div>
</div>
        </div>:""


  )
}

export default UserMoreItems