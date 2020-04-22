import React from 'react'
import SignIn from '../../Components/SignIn/SignIn.Component'
import SignUp from '../../Components/SignUp/SignUp.Component'
import './SignInSignUp.Style.scss'

const SignInSignUp = () =>(
    <div className="sign-in-sign-up">
        <SignIn />
        <SignUp />
    </div>
)
export default SignInSignUp;