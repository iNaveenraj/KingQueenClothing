import React from "react";
import  "./sign-in.styles.scss";
import FormInput from '../Form-Inputs/formInput.component';
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from '../../firebase/firebase.utils';
class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            email :'',
            password:''
        }
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({email:'', password:''});
        console.log(event)
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name] : value});   
    }


    render(){
            return(
                 <div className="sign-in">
                    <h2>I have already an account</h2>
                    <span> Sign in with your email and password</span>

                    <form onSubmit={this.handleSubmit}>
                  
                      <FormInput 
                        handleChange={this.handleChange}
                        label ="email"
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        required/>
                        
                        <FormInput 
                        handleChange={this.handleChange}
                        label="password" 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        required/>
                        
                        <div className="buttons">
                            <CustomButton type="submit" name="submit">Sign In</CustomButton>
                            <CustomButton  onClick={signInWithGoogle} isGoogleSignIn>
                                 Google SIGN IN
                            </CustomButton>
                        </div>
                    </form>
                 </div>   
            );   
    }
}



export default SignIn;