import React, { useEffect, useRef, useState } from "react";
import "./FilterComponent.scss";

import { UseGlobalContext } from "../../../Context";

const FilterComponent: React.FC = () => {
  const { setShowFilter } = UseGlobalContext();
  // ISFOCUSED STATE STARTS HERE
  const [isFocused, setIsFocused] = useState<number[]>([]);
  // ISFOCUSED STATE ENDS HERE

  // ISFOCUSED STATE STARTS HERE
  const [status_dropdown, set_status_dropdown] = useState<boolean>(false);
  // ISFOCUSED STATE ENDS HERE

  const filterFunction = () => {
    setShowFilter((prev) => !prev);
  };

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
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (popupRef.current) {
      popupRef.current.focus();
    }
  }, []);

  return (
    <>
      <div className="filterContainer">
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
              placeholder="Select"
              className="search2"
              required
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
              placeholder="User"
              className="search2"
              required
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
              placeholder="Email"
              className="search2"
              required
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
              placeholder="Date"
              className="search2"
              required
            />
            {/* <div className="searchIcon">
                  <span>
                    <img src={calender}  className="arrowDown" alt=""  />
                  </span>
                </div> */}
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
              placeholder="Phone Number"
              className="search2"
              required
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
            <input
              type="text"
              placeholder="Select"
              className="search2"
              disabled
            />
            <div className="searchIcon" onClick={status_dropdown_handler}>
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
              <div className="sd_child">Inactive user</div>
              <div className="sd_child">Pending user</div>
              <div className="sd_child">Active user</div>
              <div className="sd_child">Blaklisted user</div>
            </div>
          )}

          {/* SEARCH INPUT ENDS*/}
        </div>

        <div className="filterBtnContainer">
          <div className="resetBtn">Reset</div>
          <div className="filterBtn" onClick={filterFunction}>
            Filter
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterComponent;
