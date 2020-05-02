import React from 'react';
import './StripeButton.Style.scss';
import StripeCheckout  from 'react-stripe-checkout';

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_KZzas5BP5iq3Wnje80q8DB0c00onfFSBbL';

    const onToken = token => {
        console.log(token);
        alert('Payment was successful');
    }

    return(
        <StripeCheckout
            label="Pay Now"
            name="CRWN CLOTHING LTD."
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeButton;