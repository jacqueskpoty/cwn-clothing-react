import {CartActionTypes} from './Cart.Types';

export const toggleCartDropDown = () =>{
    return {
        type: CartActionTypes.TOGGLE_CART_HIDDEN
    }
}

export const addItem = (item) => {
    return {
        type: CartActionTypes.ADD_ITEM,
        payload: item
    }
}

export const removeItem = (item) => {
    return {
        type: CartActionTypes.REMOVE_ITEM,
        payload:item
    }
}