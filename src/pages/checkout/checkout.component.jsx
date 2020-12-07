import React, { useState } from 'react';

import CheckoutCart from '../../components/checkout-cart/checkout-cart.component';

import { CheckoutPageCont, UserDetailsCont, ContactDetailsCont, DeliveryDetailsCont, AdditionalNotesCont, SectionHeader, SectionPara, CartCont } from "./checkout.styles";

const CheckoutPage = () => {
  return ( 
    <CheckoutPageCont>
      <UserDetailsCont>
      
      </UserDetailsCont>

      <CheckoutCart />

    </CheckoutPageCont>
  );
}
 
export default CheckoutPage;