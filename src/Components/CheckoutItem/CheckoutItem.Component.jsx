import React from 'react';
import './CheckoutItem.Style.scss';
import { connect } from 'react-redux';
import { removeItem } from '../../Redux/Cart/Cart.Action';

const CheckoutItem = ({cartItem,removeItem}) => {

    const { name,price,quantity,imageUrl } = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{ name }</span>
            <span className='quantity'>{ quantity }</span>
            <span className='price'>${ price }</span>
            <div className='remove-button' onClick={()=>removeItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: cartItem => dispatch(removeItem(cartItem))
})


export default connect(null,mapDispatchToProps)(CheckoutItem)