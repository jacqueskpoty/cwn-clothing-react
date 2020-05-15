import React from 'react';
import './CartDropDown.Style.scss';
import CustomButton from '../CustomButton/CustomButton.Component';
import CartItem from '../CartItem/CartItem.Component';
import { connect } from 'react-redux'
import { cartItemSelector } from '../../Redux/Cart/Cart.Selector';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { toggleCartDropDown } from '../../Redux/Cart/Cart.Action';

const CartDropDown = ({cartItems, history,dispatch}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
        
            {
                cartItems.length
                 ?cartItems.map(cartItem => ( <CartItem key={cartItem.id} item={cartItem} /> ))
                 :<span className='empty-message'>No item in your cart</span>

            }
        </div>
        <CustomButton onClick={()=> 
                {
                    history.push('/checkout');
                    dispatch(toggleCartDropDown());
                }
            }> 
            GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: cartItemSelector
})

export default withRouter(connect(mapStateToProps)(CartDropDown));