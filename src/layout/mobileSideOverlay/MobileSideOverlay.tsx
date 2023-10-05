import React from 'react'
import "./MobileSideOverlay.scss"
import { UseGlobalContext } from '../../Context';


interface LayoutProps {
    children: React.ReactNode; // Define the type of children
  }
  
const MobileSideOverlay:React.FC<LayoutProps> = ({ children }) => {
    const { setShowMobileNav, showMobileNav} = UseGlobalContext();
  
  return (
    <div className={`overlay  ${showMobileNav === true ? "visibility":""}`}
    onClick={(prev)=>setShowMobileNav(!prev)}
    >
{children}
    </div>
  )
}

export default MobileSideOverlay