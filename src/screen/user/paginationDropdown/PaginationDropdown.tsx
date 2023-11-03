import React, { useState } from 'react'
import "./PaginationDropdown.scss"
import arrowdown from "./images/arrowDown.png"
import arrowup from "./images/arrowUp.png"
import { UseGlobalContext } from '../../../Context';




interface childProbs{
    itemsLength:number
}

const PaginationDropdown: React.FC<childProbs> =({itemsLength})=> {
    const { linesPerPage, setLinesPerPage } = UseGlobalContext();
 const [show, setShow]= useState<boolean>(false)
    const showList = ()=>{
      setShow((prev)=>!prev)
    }
  return (

    <div className='Pagincontainer'>
    <div>Showing</div>
    <div 
    onClick={showList}
    className={`box ${show === true ? "radius":""}`}>
        <span className='span'>{linesPerPage}</span>
        { show === true ? <img className="icon" src={arrowup} alt=" " /> : <img className="icon" src={arrowdown} alt=" " />}
        <div className={`dropDown ${show === true ? "dropDownActive":""}`}>
 <div 
 onClick={()=> setLinesPerPage(100)}
 className='number'>
100
 </div>
 <div 
  onClick={()=> setLinesPerPage(200)}
 className='number'>
200
 </div>
 <div 
  onClick={()=> setLinesPerPage(300)}
 className='number'>
300
 </div>
 <div 
  onClick={()=> setLinesPerPage(400)}
 className='number'>
400
 </div>
 <div 
  onClick={()=> setLinesPerPage(500)}
 className='number'>
500
 </div>

        </div>
    </div>
    
    <div>out of {itemsLength}</div>
    </div>
    

 
  )
}

export default PaginationDropdown