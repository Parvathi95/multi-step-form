import React from 'react'
import FormInputGroup from '../Components/FormInputGroup'

function EducationalInfo({formData,setFormData}) {
  return (
    <>
    <FormInputGroup 
      type="text" 
      label="Department" 
      value={formData.department}
      onChange={(e)=>setFormData({...formData,department:e.target.value})}/>{""}
    <FormInputGroup 
      type="text" 
      label="College Name" 
      value={formData.collegeName}
      onChange={(e)=>setFormData({...formData,collegeName:e.target.value})}/>
    <FormInputGroup 
      type="text" 
      label="University Name" 
      value={formData.universityName}
      onChange={(e)=>setFormData({...formData,universityName:e.target.value})}/>
    </>
  )
}

export default EducationalInfo