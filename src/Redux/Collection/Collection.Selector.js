import {createSelector} from 'reselect';

export const collectionSelector = (state) => state.collection;

export const collectionItemsSelector = createSelector([collectionSelector], (collection)=> collection.collectionItems);

export const collectionItemsPreviewSelector = createSelector([collectionItemsSelector],
    (collectionItems) => collectionItems? Object.keys(collectionItems).map(key => (collectionItems[key])):[] 
)
  
export const isFectchingSelector = createSelector([collectionSelector], (collection) => collection.isFetching);

export const isFectchingSuccessSelector = createSelector([collectionSelector], (collection)=> !!collection.collectionItems);

export const collectionIdSelector = (collectionUrlParam) =>

    createSelector(
        [collectionItemsSelector], (collectionItems) => {            
            return collectionItems[collectionUrlParam];
        }
        
    )
