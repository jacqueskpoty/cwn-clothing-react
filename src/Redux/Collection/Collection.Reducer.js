import CollectionTypes from "./Collection.Type";

const INITIAL_STATE = {
    collectionItems: {}
}

const CollectionReducer = (state=INITIAL_STATE, action) => {
     switch(action.type){
        case CollectionTypes.UPDATE_SHOP_DATA:
            return{
                ...state,
                collectionItems: action.payload
            }

         default:
             return state;
     }
}


export default CollectionReducer;