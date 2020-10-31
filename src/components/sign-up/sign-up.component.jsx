import React, {Component} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUpOverlay, SignUpContainer, TitleCont, ButtonsContainer, FormContainer, AlternativeContainer} from './sign-up.styles'

class SignUp extends Component {
  state = { 
    displayName: '',
    email: '', 
    password: '',
    confirmPassword: ''
  }

  handleSubmit = event => {
  
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({[name]: value});
  }

  render() {
    return ( 
      <SignUpOverlay>
      
        <SignUpContainer>
          <TitleCont>Welcome To Ninas Plants!</TitleCont>

          <FormContainer onSubmit={this.handleSubmit}>
            <FormInput 
              name='displayName' 
              type='text' 
              handleChange={this.handleChange} 
              value={this.state.displayName} 
              label='Display Name' 
              required
            />
            <FormInput 
              name='email' 
              type='email' 
              handleChange={this.handleChange} 
              value={this.state.email} 
              label='Email' 
              required
            />
            <FormInput 
              name='password' 
              type='password' 
              handleChange={this.handleChange} 
              value={this.state.password} 
              label='Password' 
              required
            />
            <FormInput 
              name='confirmPassword' 
              type='password' 
              handleChange={this.handleChange} 
              value={this.state.confirmPassword} 
              label='Confirm Password' 
              required/>
            <ButtonsContainer>
              <CustomButton className='sign-in-button' type='submit' >Sign In</CustomButton>
              <CustomButton isGoogleSignIn >Sign In With Google</CustomButton>
            </ButtonsContainer>
          </FormContainer>
        
          <AlternativeContainer>
            <span>Already have an account? <br />Sign In</span>
          </AlternativeContainer>
        </SignUpContainer>

      </SignUpOverlay>
    );
  }
}
 
export default SignUp;