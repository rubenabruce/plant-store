import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUserDetails } from '../../redux/checkout/checkout.actions.js';

import { UserDetailsCont, SectionCont, SectionHeader, FormInputCont, SectionPara, CustomButtonCont } from './checkout-details-form.styles.js';

const CheckoutDetailsForm = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    Fname: '',
    Lname: '',
    postcode: '',
    street: '',
    number: '',
    addNotes: ''
  })

  const { email, Fname, Lname, postcode, street, number, addNotes } = userCredentials;

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault();
    addUserDetails(userCredentials)
  }

  return ( 
    <UserDetailsCont onSubmit={handleSubmit}>
      <SectionCont>
        <SectionHeader>Contact details</SectionHeader>
        <SectionPara>We use your email address to send you confirmation and  updates on your order.</SectionPara>
        <FormInputCont 
          type='email'
          name='email'
          label='Email (required)'
          value={email}
          handleChange={handleChange}
          required
        />
      </SectionCont> 
      <SectionCont>
        <SectionHeader>Delivery details</SectionHeader>
        <SectionPara></SectionPara>
        <FormInputCont 
          type='text'
          name='Fname'
          label='First name (required)'
          value={Fname}
          handleChange={handleChange}
          required
        />
        <FormInputCont 
          type='text'
          name='Lname'
          label='Last name (required)'
          value={Lname}
          handleChange={handleChange}
          required
        />
        <FormInputCont 
          type='text'
          name='postcode'
          label='Postcode (required)'
          value={postcode}
          handleChange={handleChange}
          required
        />
        <FormInputCont 
          type='text'
          name='number'
          label='Street Number (required)'
          value={number}
          handleChange={handleChange}
          required
        />
        <FormInputCont 
          type='text'   
          name='street'
          label='Street Name (required)'
          value={street}
          handleChange={handleChange}
          required
        />
      </SectionCont> 
      <SectionCont>
        <SectionHeader>Additional notes</SectionHeader>
        <SectionPara>Any additional notes which you think we should know.</SectionPara>
        <textarea 
          type='text'
          name='addNotes'
          value={addNotes}
          onChange={handleChange}
        />
      </SectionCont>  
      <CustomButtonCont type='submit'>Continue to payment</CustomButtonCont>
    </UserDetailsCont>
  );
}
 
const mapDispatchToProps = dispatch => ({
  addUserDetails: details => dispatch(addUserDetails(details))
});

export default connect(null, mapDispatchToProps)(CheckoutDetailsForm);