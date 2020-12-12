import React, { Component } from 'react';

import { ContactUsCont, ContactHeaderCont, NameEmailCont, FormInputCont, MessageInputCont, CustomButtonCont } from "./contact-us.styles";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    const { name, email, message } = this.state;

    console.log(`Your name: ${name}, your email: ${email}, your message ${message}`)
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({[name]: value})
  }

  render() {
    return ( 
      <ContactUsCont>
        <ContactHeaderCont>Contact Us</ContactHeaderCont>
        <NameEmailCont>
          <FormInputCont 
            type='text' 
            label='Name' 
            handleChange={this.handleChange} 
            value={this.state.name} 
            required 
          />
          <FormInputCont 
            name='email' 
            type='email' 
            handleChange={this.handleChange} 
            value={this.state.email} 
            label='email' 
            required
          />
        </NameEmailCont>
        <MessageInputCont type='text' placeholder='Enter message here...'></MessageInputCont>
        <CustomButtonCont>Submit!</CustomButtonCont>
      </ContactUsCont>
    );
  }
}
 
export default ContactUs;