import React, {Component} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignInOverlay, SignInContainer, TitleCont, ButtonsContainer, FormContainer, AlternativeContainer} from './sign-in.styles'

class SignIn extends Component {
  state = { 
    email: '', 
    password: ''
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

          <FormContainer>
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
              <CustomButton className='sign-in-button'>Sign In</CustomButton>
              <CustomButton isGoogleSignIn >Sign In With Google</CustomButton>
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