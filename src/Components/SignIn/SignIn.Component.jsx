import React from 'react'
import './SignIn.Style.scss'
import FormInput from '../FormInput/FormInput.Component'
import CustomButton from '../CustomButton/CustomButton.Component'
import { signInWithGoogle } from '../../Firebase/Firebase.Utils';

class SignIn extends React.Component{

    constructor(){
        super();
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();

        this.setState({email:'', password:''});
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({[name] : value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label="Email" type="email" name="email" value={this.state.email} />

                    <FormInput handleChange={this.handleChange} label="Password" type="password" name="password" value={this.state.password} />
                    <div className='buttons'>
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton isSignInWithGoogle onClick={signInWithGoogle} >
                            Google Sign In
                        </CustomButton>
                    </div>
                </form>
            </div>    
        );
    }

}
export default SignIn;