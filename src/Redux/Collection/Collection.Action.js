import CollectionTypes from './Collection.Type';

export const UpdateShopData = (collection) => {
    return {
        type:CollectionTypes.UPDATE_SHOP_DATA,
        payload:collection
    }
}