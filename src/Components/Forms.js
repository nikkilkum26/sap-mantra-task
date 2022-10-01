import React from 'react'

const Forms = ({name,styles,handleChange,form,formValidation}) => {

const capitalize=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
     }

  return (
    <div className={styles.form_parent}>
        <span className={styles.label}>{capitalize(name)}</span>
        <input name={name} value={form[name]} onChange={handleChange} className={styles.input_tag} placeholder={capitalize(name)}/>
        {
          formValidation[name]?
          <span className={styles.required}>This Field is Required / Invalid</span>
          :
          <></>
        }
    </div>
  )
}

export default Forms