import React from 'react';
import './SignUp.Style.scss';
import FormInput from '../FormInput/FormInput.Component';
import CustomButton from '../CustomButton/CustomButton.Component';
import { signupStart } from '../../Redux/User/User.Action';
import { connect } from 'react-redux';


class SignUp extends React.Component{

    constructor(){
        super();

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async (event) => {
        
        event.preventDefault();
        const {signupStart} =  this.props;
        const {displayName,email,password,confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("Password don't match");
            return;
        }

        signupStart(displayName, email,password);

        this.setState({
                    displayName:'',
                    email:'',
                    password:'',
                    confirmPassword:''
                });
        
    }

    handleChange = (event) => {
        const {name,value} = event.target;
        this.setState({[name]:value});
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Register with email and password</span>  
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label = "Password"
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>                  
            </div>
        );
    }
}

const mapDispatchToProps = dispatch =>({
    signupStart: (displayName, email,password) => 
        dispatch(signupStart({displayName, email,password}))
})
export default connect(null,mapDispatchToProps)(SignUp);