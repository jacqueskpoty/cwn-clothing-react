import React from 'react';
import { ReactComponent as Logo } from '../../Assets/crown.svg';
import { auth } from '../../Firebase/Firebase.Utils';
import { connect } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon.Component';
import  CartDropDown  from '../CartDropdown/CartDropDown.Component';
import {createStructuredSelector} from 'reselect';
import {currentUserSelector} from '../../Redux/User/User.Selector';
import {hiddenSelector} from '../../Redux/Cart/Cart.Selector';
import {HeaderContainer, LogoContainer,OptionsContainer,LinkOption} from './Header.Style';


const Header = ({ currentUser,hidden }) => (

    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <LinkOption  to="/shop"> SHOP </LinkOption>
            <LinkOption  to="/shop"> CONTACT </LinkOption>
            { currentUser?
                <LinkOption as='div' onClick={() => auth.signOut() }>SIGN OUT</LinkOption>
                :
                <LinkOption to="/signin">SIGN IN</LinkOption>
            }
            <CartIcon />
        </OptionsContainer>
        {
            !hidden? <CartDropDown /> : ''
        }
        
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: currentUserSelector,
    hidden: hiddenSelector
});

export default connect(mapStateToProps)(Header);