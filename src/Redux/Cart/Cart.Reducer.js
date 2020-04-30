
import { CartActionTypes } from '../Cart/Cart.Types';
import { addItemToCart } from './Cart.Utils';
import { decreaseCartItem } from './Cart.Utils';

const INITIAL_STATE ={
    hidden: true,
    cartItems:[]
}

const CartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden : !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id!==action.payload.id)
            }    
        case CartActionTypes.DECREASE_ITEM:
            return{
                ...state,
                cartItems: decreaseCartItem(state.cartItems,action.payload)
            }
        default:
            return state;
    }

}
export default CartReducer;