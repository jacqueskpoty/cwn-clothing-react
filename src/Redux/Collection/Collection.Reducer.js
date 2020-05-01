import SHOP_DATA from "./Shop.Data";

const INITIAL_STATE = {
    collectionItems: SHOP_DATA
}

const CollectionReducer = (state=INITIAL_STATE, action) => {
     switch(action.type){
         default:
             return state;
     }
}


export default CollectionReducer;