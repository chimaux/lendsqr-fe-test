import React, { useEffect, useRef, useState } from "react";
import "./FilterComponent.scss"
import arrowDown from "./images/arrowDown.png"
import { UseGlobalContext } from "../../../Context";




const FilterComponent:React.FC=()=>{


    const { setShowFilter, setBtnOff2}= UseGlobalContext()
  // ISFOCUSED STATE STARTS HERE
  const [isFocused, setIsFocused] = useState<number[]>([]);
  // ISFOCUSED STATE ENDS HERE

  const handleFocus = (index:number) => {
    if (!isFocused.includes(index)) {
      setIsFocused([...isFocused, index]);
    }
  };

  const handleBlur = (index:number) => {
    if (isFocused.includes(index)) {
      setIsFocused(isFocused.filter((item) => item !== index));
    }
  };


  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (popupRef.current) {
      popupRef.current.focus();
    }
  }, []);

   
const handleBlur2 =()=>{
  setShowFilter((prev)=> !prev)

  setTimeout(() => {
    setBtnOff2(false)
  }, 200);
  
}



    return(
    <>

        <div 

        className="filterContainer">
        {/* ORGANISATION */}
      <div className="inputContainer">
     <div className="title"> Organization</div>
            {/* SEARCH INPUT */}
              <div
                className={`search1 ${isFocused.includes(1)? "focus" : "blur"}`}
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
                    <img src={arrowDown}  className="arrowDown" alt=""  />
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
     
                  required
                />
                <div className="searchIcon">
                  <span>
                    <img src={arrowDown}  className="arrowDown" alt=""  />
                  </span>
                </div>
              </div>
              {/* SEARCH INPUT ENDS*/}
      </div>
    
      <div className="filterBtnContainer">
    
    <div className="resetBtn">Reset</div>
    <div className="filterBtn">Filter</div>
    
      </div>
            </div>

        </>    

    )
}

export default FilterComponent