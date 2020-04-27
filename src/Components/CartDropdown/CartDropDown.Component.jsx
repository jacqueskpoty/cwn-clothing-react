import React from 'react';
import './CartDropDown.Style.scss';
import CustomButton from '../CustomButton/CustomButton.Component';
import CartItem from '../CartItem/CartItem.Component';
import { connect } from 'react-redux'

const CartDropDown = ({cartItems}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => ( <CartItem key={cartItem.id} item={cartItem} /> ))}
        </div>
        <CustomButton> GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropDown);