import React, { useState, useMemo } from 'react';
import { useHistory } from "react-router-dom";
import {
  useStripe,
  useElements,
  CardElement
} from "@stripe/react-stripe-js";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addDeliveryCost } from '../../redux/checkout/checkout.actions';

import ErrorMessage from '../error-message/error-message.component';
import useResponsiveFontSize from "../checkout-details-form/useResponsiveFontSize";

import { SectionCont, SectionHeader, FormInputCont, SectionPara, CheckoutFormsCont, ButtonCont } from './checkout-details-form.styles.js';
import { updateStockFromPurchase } from '../../firebase/firebase.utils';
import { removeAllCartItems } from '../../redux/cart/cart.actions';

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Roboto, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      },
      hidePostalCode: true
    }),
    [fontSize]
    );
    
    return options;
  };
  
  const CheckoutDetailsForm = ({ total, cartItems }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const [completeTotal, setCompleteTotal] = useState(total)
  const [isProcessing, setIsProcessing] = useState(false);  
  const [cardComplete, setCardComplete] = useState(false);
  const [checkoutError, setCheckoutError] = useState();
  const [deliveryCost, setDeliveryCost] = useState();
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    phoneNumber: '',
    fullname: '',
    city: '',
    postcode: '',
    street: '',
    number: '',
    addNotes: ''
  });

  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  
  const { email, phoneNumber, fullname, city, postcode, street, addNotes } = userCredentials;

  const billing_details = {
    address: {
      city: `${city}`,
      line1: `${street}`,
      postal_code: `${postcode}`
    },
    email: email,
    phone: phoneNumber,
    name: fullname,
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const reciptId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    
    if (checkoutError) {
      elements.getElement('card').focus();
      return;
    }

    if (cardComplete) {
      setIsProcessing(true);        
    }

    const { data: clientSecret } = await axios.post('/payment', { 
      amount: completeTotal * 100
    });
    
    const cardElement = elements.getElement(CardElement);

    const paymentMethodReq = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: billing_details
    });

    setIsProcessing(false);

    if (paymentMethodReq.error) {
      setCheckoutError(paymentMethodReq.error);
    } else {
      const confirmedCardPayment = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id
      })

      if (confirmedCardPayment.error) {
        console.log(confirmedCardPayment); 
        setCheckoutError(confirmedCardPayment.error);
      } else {
        // payment successful
        console.log(confirmedCardPayment); 
        for (let i = 0;i < cartItems.length;i++) {
          console.log(cartItems[i]);
          updateStockFromPurchase(cartItems[i]);
        }
        axios
        .post('/send', {
          name: billing_details.name,
          email: billing_details.email,
          phone: billing_details.phone,
          addNotes: userCredentials.addNotes,
          deliveryCost: deliveryCost,
          cartItems: cartItems,
          recipt_id: reciptId,
          date: new Date(),
          total: total,
          address: billing_details.address,
          recipt: true,
          subject: 'Thanks for your order!',
          message: `${billing_details.name} bought ${cartItems}. The address: ${billing_details.address}. All billing details: ${billing_details}` 
        })
        .then(response => {
          console.log(response);
        })
        .catch(() => {
          console.log({ success: false, message: 'Oh no, something went wrong. Please try again later!'})
        })
        dispatch(removeAllCartItems());
        history.push("/success");
      }
    }
  };
  

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value })

    if (postcode) {
      const district = postcode.substring(0, 3).toUpperCase();
      switch (district) {
        case 'BN2':
          dispatch(addDeliveryCost('0'))
          setDeliveryCost('0')
          setCompleteTotal(total + 0);
          break;
        case 'BN1':
          dispatch(addDeliveryCost('3'))
          setDeliveryCost('3')
          setCompleteTotal(total + 3);
          break;
        case 'BN3':
          dispatch(addDeliveryCost('4'))
          setDeliveryCost('4')
          setCompleteTotal(total + 4);
          break;
        case 'BN4':
          dispatch(addDeliveryCost('6'))
          setDeliveryCost('6')
          setCompleteTotal(total +6);
          break;
        case 'BN5':
          dispatch(addDeliveryCost('10'))
          setDeliveryCost('10')
          setCompleteTotal(total +10);
          break;
        default:
          break;
      }
    }
  }

  return ( 
    <CheckoutFormsCont onSubmit={handleSubmit} >
      <SectionCont>
        <SectionHeader>Contact details</SectionHeader>
        <SectionPara>We use your email address to send you confirmation and  updates on your order.</SectionPara>
        <FormInputCont type='email' name='email' label='Email (required)' value={email} handleChange={handleChange} required />
        <FormInputCont type='number' name='phoneNumber' label='Phone number (required)' value={phoneNumber} handleChange={handleChange} required />
      </SectionCont> 
      <SectionCont>
        <SectionHeader>Delivery details</SectionHeader>
        <SectionPara></SectionPara>
        <FormInputCont type='text' name='fullname' label='Fullname (required)' value={fullname} handleChange={handleChange} required />
        <FormInputCont type='text' name='city' label='City/Town (required)' value={city} handleChange={handleChange} required />
        <FormInputCont type='text' name='postcode' label='Postcode (required)' value={postcode} handleChange={handleChange} required />
        <FormInputCont type='text' name='street' label='Street Address (required)' value={street} handleChange={handleChange} required /> 
      </SectionCont> 
      <SectionCont>
        <SectionHeader>Additional notes</SectionHeader>
        <SectionPara>Any additional notes which you think we should know.</SectionPara>
        <textarea type='text' name='addNotes' value={addNotes} onChange={handleChange} />
      </SectionCont>  
      <SectionCont>
        <SectionHeader>Payment</SectionHeader>
        <SectionPara>We use your email address to send you confirmation and updates on your order.</SectionPara>
      </SectionCont>
      <CardElement options={options} onChange={(e) => {
        setCheckoutError(e.checkoutError); 
        setCardComplete(e.complete);
      }}/>
      {checkoutError && <ErrorMessage>{checkoutError.message}</ErrorMessage>}
      <ButtonCont type="submit" className={isProcessing ? 'is-processing' : ''} disabled={!stripe || isProcessing}>
        {isProcessing ? 'Processing...' : `PLACE ORDER £${completeTotal}` }
      </ButtonCont>
    </CheckoutFormsCont>
  );
}
    

export default CheckoutDetailsForm;

