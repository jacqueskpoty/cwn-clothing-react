import { all, call} from 'redux-saga/effects';
import { userSaga } from './User/User.Sagas';
import { cartSagas } from './Cart/Cart.Sagas';
import { collectionSaga } from './Collection/Collection.Sagas';


export default function* RootSaga(){
    yield all([
            call(collectionSaga),
            call(userSaga),
            call(cartSagas)
        ])
}
