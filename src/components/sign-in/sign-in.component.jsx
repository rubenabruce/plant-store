import React, {Component} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignInOverlay, SignInContainer, TitleCont, ButtonsContainer, FormContainer, AlternativeContainer} from './sign-in.styles'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
  state = { 
    email: '', 
    password: ''
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(`Error signing in: ${error}`);
    }
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({[name]: value});
  }

  render() { 
    return ( 
      <SignInOverlay>
      
        <SignInContainer>
          <TitleCont>Welcome Back!</TitleCont>

          <FormContainer onSubmit={this.handleSubmit}>
            <FormInput 
              name='email' 
              type='email' 
              handleChange={this.handleChange} 
              value={this.state.email} 
              label='email' 
              required
            />
            <FormInput 
              name='password' 
              type='password' 
              handleChange={this.handleChange} 
              value={this.state.password} 
              label='password' 
              required/>
            <ButtonsContainer>
              <CustomButton className='sign-in-button' type='submit'>Sign In</CustomButton>
              <CustomButton isGoogleSignIn onClick={signInWithGoogle} >Sign In With Google</CustomButton>
            </ButtonsContainer>
          </FormContainer>
        
          <AlternativeContainer>
            <span>New Customer? <br />Sign Up</span>
            <span>Forgot password?</span>
          </AlternativeContainer>
        </SignInContainer>

      </SignInOverlay>

    );
  }
}
 
export default SignIn;