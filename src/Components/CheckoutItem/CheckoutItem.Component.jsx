import React from 'react';
import './CheckoutItem.Style.scss';
import { connect } from 'react-redux';
import { removeItem,addItem,decreaseItem } from '../../Redux/Cart/Cart.Action';

const CheckoutItem = ({cartItem,removeItem,addItem,decreaseItem}) => {

    const { name,price,quantity,imageUrl } = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{ name }</span>
            <div className='quantity'>
                <div className='arrow' onClick={()=> decreaseItem(cartItem)}>&#10094;</div>
                    <span className='value'>{ quantity }</span>
                <div className='arrow' onClick={()=> addItem(cartItem)}>&#10095;</div>
            </div>
            <span className='price'>${ price }</span>
            <div className='remove-button' onClick={()=>removeItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: cartItem => dispatch(removeItem(cartItem)),
    addItem: cartItem => dispatch(addItem(cartItem)),
    decreaseItem:cartItem => dispatch(decreaseItem(cartItem))
})


export default connect(null,mapDispatchToProps)(CheckoutItem)