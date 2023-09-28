import React from 'react'
import "./PaginationDropdown.scss"
import arrowdown from "./images/arrowDown.png"


const PaginationDropdown: React.FC =()=> {
  return (

    <div className='Pagincontainer'>
    <div>Showing</div>
    <div className='box'> <span className='span'>100</span><img className="icon" src={arrowdown} alt=" " /></div>
    <div>out of 100</div>
    </div>
 
  )
}

export default PaginationDropdown