import React from "react";
import "./StatusUpdatePopup.scss";
import { UseGlobalContext } from "../../../Context";
export const StatusUpdatePopup: React.FC = () => {
  const {
    filter_component_function2,
    status_update_popup,
    set_status_update_popup,
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
              <div className="supc_text">Status updated succesfully</div>
              <div onClick={ok_function} className="supc_button">
                Continue
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
