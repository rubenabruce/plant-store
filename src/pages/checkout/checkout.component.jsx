import React, { useState } from 'react';

import CheckoutCart from '../../components/checkout-cart/checkout-cart.component';
import CheckoutPayment from './checkout-payment.component';

import { CheckoutPageCont, UserDetailsCont, SectionCont, SectionHeader, FormInputCont, SectionPara, CustomButtonCont } from "./checkout.styles";

const CheckoutPage = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    Fname: '',
    Lname: '',
    postcode: '',
    street: '',
    number: '',
    addNotes: ''
  })

  const [validDetails, setValidDetails] = useState(false)

  const { email, Fname, Lname, postcode, street, number, addNotes } = userCredentials;

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value })
    console.log(userCredentials)
  }

  const handleSubmit = event => {

  }

  return ( 
    <CheckoutPageCont>
      {validDetails ? 
        <UserDetailsCont>
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
              required
            />
          </SectionCont>  
          <CustomButtonCont>Continue to payment</CustomButtonCont>
        </UserDetailsCont>
      :
        <CheckoutPayment />  
      }

      <CheckoutCart />

    </CheckoutPageCont>
  );
}
 
export default CheckoutPage;