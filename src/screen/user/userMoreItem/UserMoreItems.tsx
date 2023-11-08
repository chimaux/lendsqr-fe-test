// import React from 'react'
import "./UserMoreItems.scss"
import { UseGlobalContext } from "../../../Context"
import { useEffect, useRef } from "react";


interface LayoutProps {
    moreIndex_a: string; // Define the type of children
  }



export const UserMoreItems:React.FC<LayoutProps>= ({moreIndex_a}) => {

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (popupRef.current) {
      popupRef.current.focus();
    }
  }, []);

  const {
    
    setToggleUserDataMoreItems,
    setBtnOff3
  
  } = UseGlobalContext();
   
const handleBlur =()=>{
  setToggleUserDataMoreItems((prev) => !prev);

  setTimeout(() => {
    setBtnOff3(false)
  }, 200);
  
}




const {  toggleUserDataMoreItems, moreIndex_b}=UseGlobalContext()

  return (
      
        toggleUserDataMoreItems === true && moreIndex_a === moreIndex_b ? <div
        onBlur={handleBlur}
        tabIndex={-1} ref={popupRef}
        className='user_more_items_container'>

<div className="viewContainer">
<img className="viewContainer_img" src="./assets/images/user/view_details.png" alt=""  />
<div>View Details</div>
</div>
<div className="viewContainer">
<img className="viewContainer_img" src="./assets/images/user/blacklist_user.png" alt=""  />
<div>Blacklist User</div>
</div>
<div className="viewContainer">
<img className="viewContainer_img" src="./assets/images/user/activate_user.png" alt=""  />
<div>Activate User</div>
</div>
        </div>:""


  )
}

export default UserMoreItems