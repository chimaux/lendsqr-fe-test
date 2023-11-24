import React from 'react'
import "./UserDetails.scss"
import { useNavigate, useParams } from 'react-router-dom'
import Layout from '../../layout/Layout'

export const UserDetails:React.FC=()=>{
    const {id}=useParams<{id:string}>()
    const navigate = useNavigate()
  return (
    <Layout>
            <div className='user_details_container'>
                <div className='udc_back_container' onClick={()=> navigate(-1)}>
                <img 
                src="../../public/assets/images/userDetails/backLongArrow.png" 
                alt="<<<" />
                    <div>Back to users</div>
                </div>
            </div>

    </Layout>
  )
}

export default UserDetails