import React from "react";
import FormInput from '../Form-Inputs/formInput.component';
import CustomButton from "../custom-button/custom-button.component";
import {CreateUserProfileDocument, auth} from '../../firebase/firebase.utils';
import './sign-up.styles.scss';
class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            displayName : '',
            email :'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {displayName,email, password, confirmPassword}= this.state;
        if(password !== confirmPassword){
            alert('Password doesn\'t Matching');
            return;
        }

        try{
            const {user} =  await auth.createUserWithEmailAndPassword(email, password);
            await CreateUserProfileDocument(user, {displayName});
            this.setState({
            displayName : '',
            email :'',
            password:'',
            confirmPassword:''
            });

        }catch(Error){
                console.error(Error);
        }

    };

    handleChange = event =>{
        const{name, value} = event.target;

        this.setState({[name] : value})
    }
    render(){
        const {displayName,email, password, confirmPassword}= this.state;
            return(
                <div className="sign-up">
                    <h2 className="title">I don't have an account</h2>
                    <span>Sign up with your email and password</span>
                    <form className='sign-up-form' onSubmit={this.handleSubmit}>
                        <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="Display Name" required>
                        </FormInput>
                        <FormInput type="email" name="email" value={email} onChange={this.handleChange} label="Email" required>
                        </FormInput>
                        <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="Password" required>
                        </FormInput>
                        <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="Confirm Password" required>
                        </FormInput>

                        <CustomButton type="submit"> SIGN UP</CustomButton>

                   </form>
                </div>
                );   
    }
}



export default Signup;