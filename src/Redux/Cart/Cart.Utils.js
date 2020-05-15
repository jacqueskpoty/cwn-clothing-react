export const addItemToCart = (cartitems, newItem) => {

    const newItemExists = cartitems.find(item => item.id === newItem.id);

    if(newItemExists){
        return cartitems.map(item => 
                (item.id === newItem.id)? { ...item,quantity: item.quantity+1} : {...item}
                )
        
    }

    return [...cartitems, {...newItem, quantity:1}];
}

export const decreaseCartItem = (cartitems, itemToDecrease) => {

    const itemToDecreaseExist = cartitems.find( cartitem => cartitem.id === itemToDecrease.id);

    if(itemToDecreaseExist){
        if(itemToDecrease.quantity === 1){
            return cartitems.filter(item => item.id!==itemToDecrease.id);
        }else{
            return cartitems.map(item => 
                item.id === itemToDecrease.id?
                {...item, quantity:item.quantity-1}
                :item
                )     
        }
    }
}