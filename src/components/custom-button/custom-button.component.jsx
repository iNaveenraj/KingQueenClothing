import React from 'react';
import "./custom-button.styles.scss";
const CustomButton = ({children,isGoogleSignIn, ...OtherCustomButtonProperties}) => (
    <button {...OtherCustomButtonProperties} 
    className=
    {`${isGoogleSignIn? 'google-sign-in' : ''} custom-button`}>
        {children}
    </button>

);


export default CustomButton;