import React from "react";
import "./StatusUpdatePopup.scss";
import { UseGlobalContext } from "../../../Context";




interface status_popup_prop_type {
  value: string
  buttonText: string

}


export const StatusUpdatePopup: React.FC<status_popup_prop_type> = ({...prop}) => {
  const {
    filter_component_function2,
    status_update_popup,
    set_status_update_popup,
    popup_check,
  } = UseGlobalContext();
  const ok_function = () => {
    filter_component_function2();
    set_status_update_popup(false);
  
  };


  return (
    <>
      {status_update_popup === true ? (
        <div className="StatusUpdatePopup_container">
          <div className="supc_container">
            <div className="supc_sub_container">
              <div className="supc_text">{popup_check === "user"?prop.value:"Not found"}</div>
              <div onClick={ok_function} className="supc_button">
              {popup_check === "user"?prop.buttonText:"Ok"}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default StatusUpdatePopup;
