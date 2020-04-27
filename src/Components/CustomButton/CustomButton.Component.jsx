import React from 'react'
import './CustomButton.Style.scss'

const CustomButton = ({children,isSignInWithGoogle,inverted, ...otherProps}) =>(
    <button className={`${ inverted? 'inverted': ''} ${ isSignInWithGoogle? 'google-sign-in': ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;