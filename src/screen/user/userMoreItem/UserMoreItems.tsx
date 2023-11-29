// import React from 'react'
import "./UserMoreItems.scss"
import { UseGlobalContext } from "../../../Context"
import { useEffect, useRef } from "react";
import Dexie from "dexie";
import { useNavigate } from "react-router-dom";



interface LayoutProps {

    moreIndex_a: string; // Define the type of children

  }



export const UserMoreItems:React.FC<LayoutProps>= ({moreIndex_a}) => {

  const userDatabase = new Dexie("user_db");

  userDatabase.version(1).stores({
    customerData:
      "++id,user_id,organization,username,email,phone_number,date_joined,status,full_name,users_tier,amount,bank_name,bank_account_number,bvn,gender,marital_status,children,type_of_residence,education,employment,sector_of_employment,duration_of_employment,office_email,monthly_income,loan_repayment,twitter,facebook,instagram",

  });

  const customerData1 = userDatabase.table("customerData");


  const {set_popup_check,set_status_update_popup,toggleUserDataMoreItems, moreIndex_b, setToggleUserDataMoreItems, items}=UseGlobalContext()

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (popupRef.current) {
      popupRef.current.focus();
    }

  }, []);


  const handleClose =()=>{
  // console.log("onBlur block")
      setToggleUserDataMoreItems((prev) => !prev);

   

  
  }

  const blacklist_user = async ()=>{
    // await customerData1.update(moreIndex_a+1,{status:"blacklist"})
try{
  const new_value:string[]|undefined = items?.find(data => data.user_id === moreIndex_b)
  // console.log("before",new_value)
  const updated_data = {...new_value,status:"blacklist"}
  // console.log("after",updated_data)
   await customerData1.put(updated_data)
  setToggleUserDataMoreItems((prev) => !prev);
  set_status_update_popup(true)

}
catch(e){
 console.log(e)
}
// finally{
//   console.log("finally")
// }
  
  }

  const activate_user = async ()=>{
    try{
      const new_value:string[]|undefined = items?.find(data => data.user_id === moreIndex_b)
    // console.log("before",new_value)
    const updated_data = {...new_value,status:"active"}
    // console.log("after",updated_data)
     await customerData1.put(updated_data)
    setToggleUserDataMoreItems((prev) => !prev);
    set_status_update_popup(true)
    }
    catch(e){
      console.log(e)
    }
    // finally{
    //   console.log("finally")
    // }

  
  }
const navigate = useNavigate()
 const view_more_details=(id:string)=>{
  navigate(`/details/${id}`)
  setToggleUserDataMoreItems((prev) => !prev);
 }


  return (
      
        toggleUserDataMoreItems === true && moreIndex_a === moreIndex_b ? <div
        tabIndex={-1} ref={popupRef}
        onBlur={handleClose}
        className='user_more_items_container'>

<div className="viewContainer"
onClick={()=>{
  view_more_details(moreIndex_a)
  set_popup_check("user");
}
}
>
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