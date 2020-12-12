import React, {Component} from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';


class SignInSignUp extends Component {
  state = { existingAccount: false }
  render() { 
    return (  
      <SignInSignUp>
        <SignIn existingAccount={this.state.existingAccount}/>
        <SignUp existingAccount={this.state.existingAccount} />
      </SignInSignUp>
    );
  }
}
 
export default SignInSignUp;