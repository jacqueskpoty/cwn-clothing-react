import React, {useState} from 'react'
import './SignIn.Style.scss'
import FormInput from '../FormInput/FormInput.Component'
import CustomButton from '../CustomButton/CustomButton.Component'
import { googleSignInStart,emailPassWordSignInStart } from '../../Redux/User/User.Action';
import { connect } from 'react-redux';

const  SignIn = ({googleSignInStart,emailPassWordSignInStart}) => {

    const [credentials, setCredentials] = useState({email:'',password:''});
    const {email, password} = credentials;

    const handleSubmit = async event =>{
        event.preventDefault();

        emailPassWordSignInStart(email,password);

        setCredentials({email:'', password:''});
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({...credentials,[name] : value});
    }

    return(
        <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput handleChange={handleChange} label="Email" type="email" name="email" value={email} />

                <FormInput handleChange={handleChange} label="Password" type="password" name="password" value={password} />
                <div className='buttons'>
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton type="button" isSignInWithGoogle onClick={googleSignInStart} >
                        Google Sign In
                    </CustomButton>
                </div>
            </form>
        </div>    
    );
    
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart:  () => dispatch(googleSignInStart()),
    emailPassWordSignInStart: (email,password)=> dispatch(emailPassWordSignInStart({email,password}))
})
export default connect(null, mapDispatchToProps)(SignIn);