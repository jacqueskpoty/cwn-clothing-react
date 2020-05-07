import CollectionTypes  from "./Collection.Type";

const INITIAL_STATE = {
    collectionItems: null,
    isFetching: false,
    error:undefined
}

const CollectionReducer = (state=INITIAL_STATE, action) => {
     switch(action.type){
        case CollectionTypes.FETHCING_SHOP_DATA_START:
            return{
                ...state,
                isFetching:true
            }
        case CollectionTypes.FETHCING_SHOP_DATA_SUCCESS:
            return{
                ...state,
                isFetching:false,
                collectionItems:action.payload
            }
        case CollectionTypes.FETHCING_SHOP_DATA_FAILED:
            return {
                ...state,
                isFetching:false,
                error: action.payload
            }    
         default:
             return state;
     }
}


export default CollectionReducer;