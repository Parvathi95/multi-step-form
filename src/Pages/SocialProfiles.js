import React from 'react'
import FormInputGroup from '../Components/FormInputGroup'

function SocialProfiles({formData,setFormData}) {
  return (
    <>
    <FormInputGroup 
      type="text" 
      label="Facebook" 
      value={formData.facebook}
      onChange={(e)=>setFormData({...formData,facebook:e.target.value})}/>{""}
    <FormInputGroup 
      type="text" 
      label="Twitter" 
      value={formData.twitter}
      onChange={(e)=>setFormData({...formData,twitter:e.target.value})}/>
    <FormInputGroup 
      type="text" 
      label="Google" 
      value={formData.google}
      onChange={(e)=>setFormData({...formData,google:e.target.value})}/>
    </>
  )
}

export default SocialProfiles