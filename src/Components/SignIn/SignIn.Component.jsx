import React from 'react'
import './SignIn.Style.scss'
import FormInput from '../FormInput/FormInput.Component'
import CustomButton from '../CustomButton/CustomButton.Component'
import { googleSignInStart,emailPassWordSignInStart } from '../../Redux/User/User.Action';
import { connect } from 'react-redux';

class SignIn extends React.Component{

    constructor(){
        super();
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {email, password} = this.state;
        const {emailPassWordSignInStart} = this.props;

        emailPassWordSignInStart(email,password);

        this.setState({email:'', password:''});
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({[name] : value});
    }

    render(){
        const {googleSignInStart} = this.props;
        return(
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label="Email" type="email" name="email" value={this.state.email} />

                    <FormInput handleChange={this.handleChange} label="Password" type="password" name="password" value={this.state.password} />
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
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart:  () => dispatch(googleSignInStart()),
    emailPassWordSignInStart: (email,password)=> dispatch(emailPassWordSignInStart({email,password}))
})
export default connect(null, mapDispatchToProps)(SignIn);