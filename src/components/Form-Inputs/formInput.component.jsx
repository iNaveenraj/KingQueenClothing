import React from 'react';
import './form-input.styles.scss';

const FormInput =({handleChange, label,  ...OtherInputProperties})=>(
    <div className="group">
        <input className='form-input' onChange={handleChange} {...OtherInputProperties}/>
        {
            label ? 
            (
                <label 
                    className={
                    `${OtherInputProperties.value.length?'shrink':''}
                    form-input-label`}>
                    {label}
                    </label>
                    
            ) : null
        }


  
    </div>
);

export default FormInput;