// import React from 'react'

import { useEffect, useRef } from "react";
import { UseGlobalContext } from "../../Context";


interface LayoutProps {

    moreIndex_a: number; // Define the type of children

  }



export const FocusFix1:React.FC<LayoutProps>= ({moreIndex_a}) => {
  const {  toggleUserDataMoreItems, moreIndex_b}=UseGlobalContext()

  const focusFixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (focusFixRef.current) {
      focusFixRef.current.focus();
    }
    // console.log(moreIndex_b,": pan number")
  }, []);

  return (
      
        toggleUserDataMoreItems === false && moreIndex_a === moreIndex_b ?
         <div
        tabIndex={-1} ref={focusFixRef}
       style={{
        zIndex: 999,
        position: "absolute",
        top: 0,
        right: 0,
        height: 1,
        width: 1,
        backgroundColor:"rgba(0,0,0,0)",
       }}
       >



        </div>
        :""


  )
}

export default FocusFix1