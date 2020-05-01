import {combineReducers} from 'redux';
import UserReducer from './User/User.Reducer';
import CartReducer from './Cart/Cart.Reducer';
import DirectoryReducer from './Directory/Directory.Reducer';
import CollectionReducer from './Collection/Collection.Reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: DirectoryReducer,
    collection:CollectionReducer
});

export default persistReducer(persistConfig, rootReducer);
