import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import RootReducer from './Root.Reducer';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import RootSaga from '../Redux/RootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

if(process.env.NODE_ENV==='development'){
    middleWares.push(logger);
}

export const store = createStore(RootReducer,applyMiddleware(...middleWares));

sagaMiddleware.run(RootSaga);

export const persistor = persistStore(store);

export default { store,persistor };