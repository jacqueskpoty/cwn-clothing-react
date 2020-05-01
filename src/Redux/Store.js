import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import RootReducer from './Root.Reducer';
import { persistStore } from 'redux-persist';

const middleWares = [logger];

export const store = createStore(RootReducer,applyMiddleware(...middleWares));

export const persistor = persistStore(store);

export default { store,persistor };