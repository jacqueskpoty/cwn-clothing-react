import React from 'react';
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview.Component';
import {createStructuredSelector} from 'reselect';
import {collectionItemsSelector} from '../../Redux/Collection/Collection.Selector';
import {connect} from 'react-redux';

const Shop = ({collectionItems}) => (
            <div className='shop-page'> 
                {
                    collectionItems.map(({id, ...otherProps}) => (
                        <CollectionPreview key={id} {...otherProps}/>
                    ))
                }
            </div>
        )


const mapStateToProps = createStructuredSelector({
    collectionItems: collectionItemsSelector
})       
export default connect(mapStateToProps)(Shop)