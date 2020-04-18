import React from 'react'
import './CustomButton.Style.scss'

const CustomButton = ({children,isSignInWithGoogle, ...otherProps}) =>(
    <button className={`${ isSignInWithGoogle? 'google-sign-in': ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;