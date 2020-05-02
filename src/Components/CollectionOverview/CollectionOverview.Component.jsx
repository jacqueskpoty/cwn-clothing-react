import React from 'react';
import './CollectionOverview.Style.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview.Component';
import {collectionItemsPreviewSelector} from '../../Redux/Collection/Collection.Selector';


const CollectionOverview = ({collectionItems}) => (

    <div className='collections-overview'>
        {
            collectionItems.map(({id, ...otherProps}) => (
                <CollectionPreview key={id} {...otherProps}/>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collectionItems: collectionItemsPreviewSelector
})    

export default connect(mapStateToProps)(CollectionOverview)