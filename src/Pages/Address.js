import React from 'react'
import FormInputGroup from '../Components/FormInputGroup'

function Address({formData,setFormData}) {
  return (
    <>
    <FormInputGroup 
      type="text" 
      label="Street" 
      value={formData.street}
      onChange={(e)=>setFormData({...formData,street:e.target.value})}/>{""}
    <FormInputGroup 
      type="text" 
      label="City" 
      value={formData.city}
      onChange={(e)=>setFormData({...formData,city:e.target.value})}/>
    <FormInputGroup 
      type="text" 
      label="State" 
      value={formData.state}
      onChange={(e)=>setFormData({...formData,state:e.target.value})}/>
    </>
  )
}

export default Address