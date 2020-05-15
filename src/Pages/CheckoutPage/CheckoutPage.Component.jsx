import React from 'react';
import './CheckoutPage.Style.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { cartItemSelector } from '../../Redux/Cart/Cart.Selector';
import { totalAmountSelector } from '../../Redux/Cart/Cart.Selector';
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem.Component';
import StripeButton from '../../Components/StripeButton/StripeButton.Component';

const Checkout = ({cartItems, totalAmount}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
         {
             cartItems.map(cartitem => <CheckoutItem key={cartitem.id} cartItem={cartitem} />)
         }

        <div className='total'>
            <span>Total : ${totalAmount}</span> 
        </div>

        <div className='text-warning'>
            *Please use the following test credit card for payment*
            <br/>
            4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
        </div>

        <StripeButton price={totalAmount} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: cartItemSelector,
    totalAmount: totalAmountSelector
});

export default connect(mapStateToProps)(Checkout);