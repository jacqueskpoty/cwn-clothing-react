import {createSelector} from 'reselect';

const collectionSelector = (state) => state.collection;

export const collectionItemsSelector = createSelector([collectionSelector], (collection)=> collection.collectionItems);