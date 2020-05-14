import React from 'react';
import './StripeButton.Style.scss';
import StripeCheckout  from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_KZzas5BP5iq3Wnje80q8DB0c00onfFSBbL';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert("Payment is successful");
        }) .catch(error => {
            console.log(error);
            alert('There was an issue with your payment. Please make sure you use the provided credit card');
        })
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