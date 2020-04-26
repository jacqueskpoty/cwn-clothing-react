import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../Assets/cartIcon.svg';
import './CartIcon.Style.scss';


const cartIcon = () => (
    <div className='cart-icon'>
        <ShoppingIcon />
        <span className='item-count'>0</span>
    </div>
)

export default cartIcon;