import CollectionTypes from './Collection.Type';

export const UpdateCollectionsData = (collections) => ({
        type: CollectionTypes.UPDATE_SHOP_DATA,
        payload: collections
})