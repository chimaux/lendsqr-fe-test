import React,{useRef, useEffect} from 'react'
import './more.scss'
import { PiUserCirclePlus } from 'react-icons/pi'
import { IoIosLogOut } from 'react-icons/io'
import { UseGlobalContext } from '../../../../Context'

const More :React.FC = () => {

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (popupRef.current) {
      popupRef.current.focus();
    }
  }, []);

  const {
    
    setMoreopen,
    setBtnOff
  
  } = UseGlobalContext();
   
const handleBlur =()=>{
  setMoreopen((prev)=> !prev)

  setTimeout(() => {
    setBtnOff(false)
  }, 200);
  
}

  return (
    <div className='moreContainer'
    onBlur={handleBlur}
    tabIndex={-1} ref={popupRef}
   
    >
<div >
<div className='moreText'><PiUserCirclePlus className="icon" size={20} />Update Profile</div>
<div className='moreText'><IoIosLogOut className="icon" size={20} />Logout</div>
<div className='moreText'>v1.2.0</div>
</div>
    </div>
  )
}

export default More