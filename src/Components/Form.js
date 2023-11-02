import React,{useState} from 'react'
import Signup from '../Pages/Signup'
import PersonalInfo from '../Pages/PersonalInfo'
import Address from '../Pages/Address'
import SocialProfiles from '../Pages/SocialProfiles'
import EducationalInfo from '../Pages/EducationalInfo'
import Button from './Button'
import Welcome from '../Pages/Welcome'

function Form() {
    const [page,setPage]=useState(0);
    const [formData,setFormData]=useState({
        email:"",
        password:"",
        confirmPassword:"",
        firstName:"",
        lastName:"",
        mobileNumber:"",
        street:"",
        city:"",
        state:"",
        department:"",
        collegeName:"",
        universityName:"",
        facebook:"",
        twitter:"",
        google:"",
    })
    const FormTitle=["Sign Up","Personal Info","Address","Educational Details","Social Profiles","Done"]

    const PageDisplay=()=>{
        if(page===0){
           // console.log(page);
           return <Signup formData={formData} setFormData={setFormData}/>;
        }else if(page===1){
            // console.log(page);
            return <PersonalInfo formData={formData} setFormData={setFormData}/>
         }
         else if(page===2){
            // console.log(page);
            return <Address formData={formData} setFormData={setFormData}/>
         }
         else if(page===3){
           //  console.log(page);
            return <EducationalInfo formData={formData} setFormData={setFormData}/>
         }
         else if(page===4){
           //  console.log(page);
            return <SocialProfiles formData={formData} setFormData={setFormData}/>
         }else{
           // console.log(page);
            return <Welcome formData={formData}/>
         }
        {/* <Signup/>
        <PersonalInfo/>
        <Address/>
        <EducationalInfo/>
        <SocialProfiles/> */}
    }

  return (
    <main className='container shadow p-5 mt-5 rounded-3' style={{maxWidth:500,backgroundColor:"pink"}}>
        <div className="progress-bar shadow bg-secondary rounded-3">
            <div className="div" style={{width:page===0?"1%":page===1?"22.2%":page===2?"44.4%":page===3?"66.6%":page===4?"88.8%":"100%",backgroundColor:page===5?"green":"var(--purple)"}}>

            </div>
        </div>
    <form className='form-container'>
        <h1 className={`"display-2" ${page===5?"text-success":"text-purple"}`}>{FormTitle[page]}</h1>
        <div className="text-start">{PageDisplay()}</div>
        <div className="mt-5">
           {page!==0 && page!==5 ? 
           (<Button text="Prev" color="dark me-3" onClick={(e)=>{e.preventDefault();
            setPage((currPage)=>currPage-1);
            }}/>):null}
            <Button text={page !==5? "Next":"Finish"} color={page !==5? "purple":"success"} onClick={(e)=>{e.preventDefault();
            if(page===FormTitle.length-1){
                console.log(formData);
                window.alert("Are you done with the registration");
                window.Location.reload();
            }
            else{
                setPage((currPage)=>currPage+1);
            }
             }}/>
        </div>
     </form>
    </main>
  )
}

export default Form