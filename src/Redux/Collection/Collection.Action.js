import CollectionTypes from './Collection.Type';
import {firestore,transformCollectionMap} from '../../Firebase/Firebase.Utils';


export const UpdateCollectionsDataStart = () => ({
        type: CollectionTypes.FETHCING_SHOP_DATA_START
})

export const UpdateCollectionsDataFailed = (error) => ({
        type: CollectionTypes.FETHCING_SHOP_DATA_FAILED,
        action: error
})

export const UpdateCollectionsDataSuccess = (collectionItems) => ({
        type: CollectionTypes.FETHCING_SHOP_DATA_SUCCESS,
        payload: collectionItems
})

export const UpdateCollectionsData = () =>
        dispatch =>{
                const collectionRef = firestore.collection('collections');
                dispatch(UpdateCollectionsDataStart());

                collectionRef.get().then(
                        async snapshot =>{
                                const collections = transformCollectionMap(snapshot);
                                dispatch(UpdateCollectionsDataSuccess(collections));
                        }
                ).catch(error => dispatch(UpdateCollectionsDataFailed(error)));
        }
