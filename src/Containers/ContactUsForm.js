import React,{useState} from 'react';
import Forms from '../Components/Forms';
import styles from '../css/ContactForm.module.css'

const ContactUsForm = () => {
  const [form,setForm]=useState({name:"",email:"",designation:"",contact:""})
  const [formValidation,setFormValidation]=useState({name:false,email:false,designation:false,contact:false})
  const handleChange=(e)=>{
    setForm((prev)=>{
      return{
        ...prev,
        [e.target.name]:e.target.value
      }
    })
  }

  const onSubmit=()=>{
    let formObj={}
    Object.keys(form).map((eachKey)=>{
      if(!(form[eachKey].length)){
        formObj={...formObj,[eachKey]:true}
      }
    })
    setFormValidation(formObj);
  }

  console.log(form)
  return (
    <div className={styles.layout}>
      <div className={styles.bg_image}></div>
      <div className={styles.form}>
        <div className={styles.title}>Lorem Ipsum</div>
        <div className={styles.inpTgs}>
          {
            Object.keys(form).map((eachKey)=>(
   
              <Forms name={eachKey} styles={styles} handleChange={handleChange} form={form} formValidation={formValidation}/>

            ))
          }
        </div>
        <div className={styles.btn}>
        <button className={styles.submit_btn} onClick={onSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default ContactUsForm