import { createSelector } from 'reselect';

const cartSelector = (state) => state.cart

export const cartItemSelector = createSelector([cartSelector], (cart) => cart.cartItems);

export const hiddenSelector = createSelector([cartSelector], (cart) => cart.hidden)

export const cartItemQteSelector = createSelector([cartItemSelector], (cartItems) => 
     cartItems.reduce((accumulatedQte,cartItems)=> accumulatedQte+cartItems.quantity,0) 
)

export const totalAmountSelector = createSelector([cartItemSelector], (cartItems) => 
     cartItems.reduce((accumulatedQte,cartItems)=> accumulatedQte+(cartItems.quantity*cartItems.price),0) 
)
