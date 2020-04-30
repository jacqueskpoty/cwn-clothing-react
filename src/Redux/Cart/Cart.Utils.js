export const addItemToCart = (cartitems, newItem) => {

    const newItemExists = cartitems.find(item => item.id === newItem.id);

    if(newItemExists){
        return cartitems.map(item => 
                (item.id === newItem.id)? { ...item,quantity: item.quantity+1} : {...item}
                )
        
    }

    return [...cartitems, {...newItem, quantity:1}];
}