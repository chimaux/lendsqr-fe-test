import React from 'react'
import "./UserDetails.scss"
import { useParams } from 'react-router-dom'

export const UserDetails:React.FC=()=>{
    const {id}=useParams<{id:string}>()
  return (
    <div>UserDetails: {id}</div>
  )
}

export default UserDetails