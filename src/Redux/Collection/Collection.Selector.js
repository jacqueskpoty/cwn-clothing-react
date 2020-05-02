import {createSelector} from 'reselect';

const collectionSelector = (state) => state.collection;

export const collectionItemsSelector = createSelector([collectionSelector], (collection)=> collection.collectionItems);

export const collectionItemsPreviewSelector = createSelector([collectionItemsSelector],
    (collectionItems) =>  Object.keys(collectionItems).map(key => (collectionItems[key])))

export const collectionIdSelector = (collectionUrlParam) =>
    createSelector(
        [collectionItemsSelector], (collectionItems) => collectionItems[collectionUrlParam]

    )

    