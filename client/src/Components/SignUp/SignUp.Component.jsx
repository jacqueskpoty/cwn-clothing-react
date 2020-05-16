import React,{useState} from 'react';
import './SignUp.Style.scss';
import FormInput from '../FormInput/FormInput.Component';
import CustomButton from '../CustomButton/CustomButton.Component';
import { signupStart } from '../../Redux/User/User.Action';
import { connect } from 'react-redux';


const SignUp = ({signupStart}) => {

    const [user , setUser] = useState({ displayName:'',
                                        email:'',
                                        password:'',
                                        confirmPassword:''});

    const {displayName,email,password,confirmPassword} = user;

    const handleSubmit = async (event) => {
        
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Password don't match");
            return;
        }

        signupStart(displayName, email,password);

        setUser({
                    displayName:'',
                    email:'',
                    password:'',
                    confirmPassword:''
                });
        
    }

    const handleChange = (event) => {
        const {name,value} = event.target;
        setUser({...user,[name]:value});
    }

    return(
        <div className="sign-up">
            <h2 className="title">I don't have an account</h2>
            <span>Register with email and password</span>  
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label = "Password"
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>                  
        </div>
    );
}

const mapDispatchToProps = dispatch =>({
    signupStart: (displayName, email,password) => 
        dispatch(signupStart({displayName, email,password}))
})
export default connect(null,mapDispatchToProps)(SignUp);