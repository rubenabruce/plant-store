import React from 'react';

import { DeliveryPageCont, DeliveryInfoCont, InformationCont, ImageCont, DeliveryMapCont } from "./delivery.styles";

const DeliveryPage = () => {
  return ( 
    <DeliveryPageCont>
      <DeliveryInfoCont>
        <InformationCont>
          <h2>Delivery</h2>
          <p>
            Free Local Delivery.
          </p>
          <p>
            As we're a local business, we currently only
            deliver to the Brighton and Hove area...
          <br />
            (from Portslade to Newhaven and everywhere in between).
          <br />
            Delivery within this area is free.
          </p>
          <p><i>
            Please do not place an order online if you require
            delivery outside of the Brighton & Hove area.
          </i></p>
          <p>
            All orders received by 4pm Mon-Fri will be delivered the same day. 
          <br />
            Weekend delivery is available upon request.    
          </p>
          <p><b>
          If you're not sure whether we deliver to your area,
          just get in contact. </b></p>
        </InformationCont>
        <ImageCont />
      </DeliveryInfoCont>
      <DeliveryMapCont>
      </DeliveryMapCont>
    </DeliveryPageCont>
  );
}
 
export default DeliveryPage;