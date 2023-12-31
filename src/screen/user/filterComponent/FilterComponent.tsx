import React, {  useState } from "react";
import "./FilterComponent.scss";

import { UseGlobalContext } from "../../../Context";
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";


const FilterComponent: React.FC = () => {
  const userDatabase = new Dexie("user_db");

  userDatabase.version(1).stores({
    customerData:
      "++id,user_id,organization,username,email,phone_number,date_joined,status,full_name,users_tier,amount,bank_name,bank_account_number,bvn,gender,marital_status,children,type_of_residence,education,employment,sector_of_employment,duration_of_employment,office_email,monthly_income,loan_repayment,twitter,facebook,instagram",
  });

  const customerData1 = userDatabase.table("customerData");

  const indexDB_items = useLiveQuery(() => customerData1.toArray(), []);

  const { 
    setShowFilter,
    set_items,
    setItemOffset,
    // filter_component_function,
    // filter_input_state,
    set_filter_input_state22,
    set_active_page_number,
    set_status_update_popup,
  } = UseGlobalContext();
 



 
  // ISFOCUSED STATE STARTS HERE
  const [isFocused, setIsFocused] = useState<number[]>([]);
  // ISFOCUSED STATE ENDS HERE

  // ISFOCUSED STATE STARTS HERE
  const [status_dropdown, set_status_dropdown] = useState<boolean>(false);
  // ISFOCUSED STATE ENDS HERE



  interface filter_input_state_type {
    organization: string;
    Username: string;
    email: string;
    date: string;
    phone_number: string;
    status: string;
  }

  // FILTER INPUTS STATE STARTS HERE
  const [filter_input_state, set_filter_input_state] =
    useState<filter_input_state_type>({
      organization: "",
      Username: "",
      email: "",
      date: "",
      phone_number: "",
      status: "",
    });
  // FILTER INPUTS STATE ENDS HERE

  const for_filtered_items = useLiveQuery(() => customerData1.toArray(), []);

  const { organization, Username, email, date, phone_number, status } =
    filter_input_state;
  const filter_component_function = () => {
    let status_new_value: string;
    switch (status) {
      case "Inactive user":
        status_new_value = "inactive";
        break;
      case "Pending user":
        status_new_value = "pending";
        break;
      case "Active user":
        status_new_value = "active";
        break;
      case "Blacklisted user":
        status_new_value = "blacklist";
        break;
      default:
        status_new_value = "";
    }

    if (
      status_new_value !== "" ||
      phone_number !== "" ||
      email !== "" ||
      date !== "" ||
      Username !== "" ||
      organization !== ""
    ) {
    
      const sorted_status = for_filtered_items?.filter((data) => {
        const new_value =
          (status_new_value !== "" ? data.status.trim().toLowerCase() === status_new_value.trim().toLowerCase() : true) &&
          (phone_number !== "" ? data.phone_number.trim().toLowerCase() === phone_number.trim().toLowerCase() : true) &&
          (date !== "" ? data.date_joined.trim().toLowerCase() === date.trim().toLowerCase() : true) &&
          (email !== "" ? data.email.trim().toLowerCase() === email.trim().toLowerCase() : true) &&
          (organization !== "" ? data.organization.trim().toLowerCase() === organization.trim().toLowerCase() : true) &&
          (Username !== "" ? data.username.trim().toLowerCase() === Username.trim().toLowerCase() : true);
        // console.log(new_value, "new valve");
        return new_value;
      });
      // console.log(sorted_status);
      // console.log(new_value);
      if (sorted_status?.length !== 0) {
        set_items(sorted_status);
        setShowFilter((prev) => !prev);
        setItemOffset(0);
        set_active_page_number(0);
        set_filter_input_state22(filter_input_state)
        // set_status_update_popup(false)
      }
      else if (sorted_status?.length === 0){
        set_status_update_popup(true)
      }
    }
  };



  // const { organization, Username, email, date, phone_number, status } =
  //   filter_input_state;


    const filter_component_reset_function=()=>{
      set_items(indexDB_items)
      setShowFilter((prev) => !prev);

      set_filter_input_state({
        organization: "",
        Username: "",
        email: "",
        date: "",
        phone_number: "",
        status: "",
      })
      setItemOffset(0)
      set_active_page_number(0)
      }
    
  // const handle_filter_input = (e: { target: { name: string; value: string; }; }) => {
  const handle_filter_input = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    set_filter_input_state({...filter_input_state,[name]:value})
  };

  const handle_filter_input2 = (event:React.MouseEvent<HTMLDivElement>) => {
    const {textContent,title}=event.currentTarget
    const name = title
    const value = textContent === null ? "":textContent
    // console.log(title, "e don burst");

    set_filter_input_state({...filter_input_state,[name]:value})
    
     set_status_dropdown((prev) => !prev);

  };
  
  // console.log(filter_input_state);
 

  const handleFocus = (index: number) => {
    if (!isFocused.includes(index)) {
      setIsFocused([...isFocused, index]);
    }
  };

  const handleBlur = (index: number) => {
    if (isFocused.includes(index)) {
      setIsFocused(isFocused.filter((item) => item !== index));
    }
  };

  const status_dropdown_handler = () => {
    set_status_dropdown((prev) => !prev);
  };
  // const popupRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (popupRef.current) {
  //     popupRef.current.focus();
  //   }
  // }, []);



  return (
    <>
      <div className="filterContainer"

      >

                  
       {/* ORGANISATION */}
        <div className="inputContainer">
          <div className="title"> Organization</div>
          {/* SEARCH INPUT */}
          <div
            className={`search1 ${isFocused.includes(1) ? "focus" : "blur"}`}
            onFocus={() => handleFocus(1)}
            onBlur={() => handleBlur(1)}
          >
            <input
              type="text"
              name="organization"
              value={organization}
              onChange={handle_filter_input}
              placeholder="Select"
              className="search2"
              // disabled
            />
            <div className="searchIcon">
              <span>
                <img
                  src="./assets/images/filterComponent/arrowUp.png"
                  className="arrowDown"
                  alt=""
                />
              </span>
            </div>
          </div>
          {/* SEARCH INPUT ENDS*/}
        </div>
        {/* USERNAME */}
        <div className="inputContainer">
          <div className="title"> Username</div>
          {/* SEARCH INPUT */}
          <div
            className={`search1 ${isFocused.includes(2) ? "focus" : "blur"}`}
            onFocus={() => handleFocus(2)}
            onBlur={() => handleBlur(2)}
          >
            <input
              type="text"
              name="Username"
              value={Username}
              onChange={handle_filter_input}
              placeholder="user"
              className="search2"
            />
          </div>
          {/* SEARCH INPUT ENDS*/}
        </div>
        {/* EMAIL */}
        <div className="inputContainer">
          <div className="title"> Email</div>
          {/* SEARCH INPUT */}
          <div
            className={`search1 ${isFocused.includes(3) ? "focus" : "blur"}`}
            onFocus={() => handleFocus(3)}
            onBlur={() => handleBlur(3)}
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="search2"
              value={email}
              onChange={handle_filter_input}
            />
          </div>
          {/* SEARCH INPUT ENDS*/}
        </div>
        {/* DATE */}
        <div className="inputContainer">
          <div className="title"> Date</div>
          {/* SEARCH INPUT */}
          <div
            className={`search1 ${isFocused.includes(4) ? "focus" : "blur"}`}
            onFocus={() => handleFocus(4)}
            onBlur={() => handleBlur(4)}
          >
            <input
              type="date"
              name="date"
              placeholder="Date"
              className="search2"
              value={date}
              onChange={handle_filter_input}
            />
          </div>
          {/* SEARCH INPUT ENDS*/}
        </div>
        {/* PHONE NO */}
        <div className="inputContainer">
          <div className="title"> Phone Number</div>
          {/* SEARCH INPUT */}
          <div
            className={`search1 ${isFocused.includes(5) ? "focus" : "blur"}`}
            onFocus={() => handleFocus(5)}
            onBlur={() => handleBlur(5)}
          >
            <input
              type="text"
              name="phone_number"
              value={phone_number}
              onChange={handle_filter_input}
              placeholder="Phone Number"
              className="search2"
            />
          </div>
          {/* SEARCH INPUT ENDS*/}
        </div>
        {/* STATUS */}
        <div className="inputContainer">
          <div className="title"> Status</div>
          {/* SEARCH INPUT */}
          <div
            className={`search1 ${isFocused.includes(6) ? "focus" : "blur"}`}
            onFocus={() => handleFocus(6)}
            onBlur={() => handleBlur(6)}
            
          >
            <div 
            onClick={status_dropdown_handler}
         className="status_box_overlay_fix"
            >

            </div>
            <input
              type="text"
              value={status}
              // onChange={handle_filter_input}
              placeholder="Select"
              className="search2"
              disabled
            />
            <div className="searchIcon" >
              <span>
                {status_dropdown === false ? (
                  <img
                    src="./assets/images/filterComponent/arrowUp.png"
                    className="arrowDown"
                    alt=""
                  />
                ) : (
                  <img
                    src="./assets/images/filterComponent/arrowDown.png"
                    className="arrowDown"
                    alt=""
                  />
                )}
              </span>
            </div>
          </div>
          {status_dropdown && (
            <div className="status_dropdown">
              <div onClick={handle_filter_input2} title="status" className="sd_child">
                Inactive user
              </div>
              <div onClick={handle_filter_input2} title="status" className="sd_child">
                Pending user
              </div>
              <div onClick={handle_filter_input2} title="status" className="sd_child">
                Active user
              </div>
              <div onClick={handle_filter_input2} title="status" className="sd_child">
                Blacklisted user
              </div>
            </div>
          )}

          {/* SEARCH INPUT ENDS*/}
        </div>

        <div className="filterBtnContainer">
          <div className="resetBtn"
          onClick={filter_component_reset_function}
          >Reset</div>
          <div className="filterBtn" onClick={filter_component_function}>
            Filter
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterComponent;
