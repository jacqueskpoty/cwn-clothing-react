import { takeLatest,call,put,all } from 'redux-saga/effects';
import CollectionTypes from './Collection.Type';
import { transformCollectionMap,firestore } from '../../Firebase/Firebase.Utils';
import { UpdateCollectionsDataSuccess,UpdateCollectionsDataFailed } from './Collection.Action';


export function* UpdateCollectionsDataSagaAsync(){

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collections = yield call(transformCollectionMap,snapshot);
                
        yield put(UpdateCollectionsDataSuccess(collections));   
        
    } catch (error) {
        yield put(UpdateCollectionsDataFailed(error));
    }
     
}

export function* UpdateCollectionsDataSaga(){
    yield takeLatest(
                        CollectionTypes.FETHCING_SHOP_DATA_START, 
                        UpdateCollectionsDataSagaAsync
                    );
}

export function* collectionSaga (){
    yield all([ call(UpdateCollectionsDataSaga) ]);
}