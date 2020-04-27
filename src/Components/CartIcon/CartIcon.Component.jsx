import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../Assets/cartIcon.svg';
import './CartIcon.Style.scss';
import {connect} from 'react-redux';
import {toggleCartDropDown} from '../../Redux/Cart/Cart.Action';


const cartIcon = ({toggleCartDropDown}) => (
    <div className='cart-icon' onClick={toggleCartDropDown}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch=>({
    toggleCartDropDown: () => {
        dispatch(toggleCartDropDown())
    }
})

export default connect(null,mapDispatchToProps)(cartIcon);