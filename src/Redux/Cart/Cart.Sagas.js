import {all,call,put,takeLatest} from 'redux-saga/effects';
import {cleartCart} from './Cart.Action';
import {userActionTypes} from '../User/User.Types'


export function* clearCartItems(){
    yield put(cleartCart());
}

export function* onSignOutSuccess(){
    yield takeLatest(userActionTypes.LOGOUT_SUCCESS,clearCartItems);
    console.log("8989");
}

export function* cartSagas(){
    yield all([call(onSignOutSuccess)]);
}