import React from 'react'
import FormInputGroup from '../Components/FormInputGroup'

function PersonalInfo({formData,setFormData}) {
  return (
    <>
    <FormInputGroup 
      label="First Name" 
      type="text" 
      value={formData.firstName}
      onChange={(e)=>setFormData({...formData,firstName:e.target.value})}/>{""}
    <FormInputGroup 
      label="Last Name" 
      type="text" 
      value={formData.lastName} 
      onChange={(e)=>setFormData({...formData,lastName:e.target.value})}/>
    <FormInputGroup 
      label="Mobile Number" 
      type="number" 
      value={formData.mobileNumber} 
      onChange={(e)=>setFormData({...formData,mobileNumber:e.target.value})}/>
    </>
  )
}

export default PersonalInfo