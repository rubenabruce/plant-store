import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDeliveryCost } from '../../redux/checkout/checkout.selectors';

import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, CartItemsContainer, EmptyMessage, SectionDetails, BottomCont, SectionDetailsCollumn, DetailsFlex } from "./checkout-cart.styles";

const CheckoutCart = ({ cartItems, total, deliveryCost }) => {
  // const {Fname, Lname, postcode, address, number} = userDetails;

  const completeTotal = total + parseInt(deliveryCost)
  return ( 
    <CartDropdownContainer>
      <CartItemsContainer>
        {
          cartItems.length ? (
            cartItems.map((item) => (<CartItem itemImageSize='20' checkoutOptions={true} key={item.id} item={item} ></CartItem>))
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )
        }
      </CartItemsContainer>

      <BottomCont>
        
      <SectionDetailsCollumn>
        <DetailsFlex><span>Subtotal: </span> <span>£{total}</span></DetailsFlex>
        <DetailsFlex><span>Delivery: </span> <span style={{textAlign: 'end'}}>{ deliveryCost ? `£${deliveryCost}` : 'Please enter your delivery details'}</span> </DetailsFlex>
        
      </SectionDetailsCollumn>

      <SectionDetails className='total'>
        <span>Total: </span> <span> <b>{completeTotal ? `£${completeTotal}` : '--'}</b> </span>
      </SectionDetails>
    </BottomCont>
      
  </CartDropdownContainer>
  );
}

    // <SectionDetails>
    //   <span>Shipping Address: </span> <span>{ userDetails ? (`${Fname} ${Lname}`) : '--' }</span>
    // </SectionDetails>

const mapStateToProps = createStructuredSelector({
  deliveryCost: selectDeliveryCost
})

export default connect(mapStateToProps)(CheckoutCart);