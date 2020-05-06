import React from 'react';
import './CollectionPage.Style.scss';
import {connect} from 'react-redux';
import {collectionIdSelector} from '../../Redux/Collection/Collection.Selector';
import CollectionItem from '../../Components/CollectionItem/CollectionItem.Component';


const CollectionPage = ({collection}) => {
   
    const {title,items} = collection;
    return(
        <div className='collection-page'>
            <h2 className='title'>{ title }</h2>
            <div className='items'>
                {
                    items.map(item => 
                        (<CollectionItem key={item.id} item={item} />))
                }
            </div>
        </div>
        );
}

const mapStateToProps = (state,ownprops) => ({
        collection: collectionIdSelector(ownprops.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);