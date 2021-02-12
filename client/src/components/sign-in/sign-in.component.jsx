import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignInOverlay, SignInContainer, TitleCont, ButtonsContainer, FormContainer, AlternativeContainer} from './sign-in.styles'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { useAuth } from '../../hooks/use-auth';

const SignIn = () => {
  const auth = useAuth();
  const [userCredentials, setCredentials] = useState({ email: '', password: '' });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    auth.signin(email, password);
    

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   setCredentials({ email: '', password: '' });
    // } catch (error) {
    //   console.log(`Error signing in: ${error}`);
    // }
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value});
  };

  return ( 
    <SignInOverlay>
    
      <SignInContainer>
        <TitleCont>Welcome Back!</TitleCont>

        <FormContainer onSubmit={handleSubmit}>
          <FormInput 
            name='email' 
            type='email' 
            handleChange={handleChange} 
            value={email} 
            label='email' 
            required
          />
          <FormInput 
            name='password' 
            type='password' 
            handleChange={handleChange} 
            value={password} 
            label='password' 
            required/>
          <ButtonsContainer>
            <CustomButton className='sign-in-button' type='submit'>Sign In</CustomButton>
            <CustomButton type='button' isGoogleSignIn onClick={auth.signinwithgoogle} >Sign In With Google</CustomButton>
          </ButtonsContainer>
        </FormContainer>
      
        <AlternativeContainer>
          <Link to='/signup'>New Customer? <br />Sign Up</Link>
          <span>Forgot password?</span>
        </AlternativeContainer>
      </SignInContainer>

    </SignInOverlay>

  );
}

 
export default SignIn;