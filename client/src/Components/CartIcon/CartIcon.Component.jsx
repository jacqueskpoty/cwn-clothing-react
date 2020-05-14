import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../Assets/cartIcon.svg';
import './CartIcon.Style.scss';
import { connect } from 'react-redux';
import { toggleCartDropDown } from '../../Redux/Cart/Cart.Action';
import { cartItemQteSelector } from '../../Redux/Cart/Cart.Selector';
import { createStructuredSelector } from 'reselect';


const cartIcon = ({toggleCartDropDown, cartItemsNumber}) => (
    <div className='cart-icon' onClick={toggleCartDropDown}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{cartItemsNumber}</span>
    </div>
)

const mapDispatchToProps = dispatch=>({
    toggleCartDropDown: () => {
        dispatch(toggleCartDropDown())
    }
})

const mapStateToProps = createStructuredSelector({ 
    cartItemsNumber: cartItemQteSelector 
})

export default connect(mapStateToProps,mapDispatchToProps)(cartIcon);