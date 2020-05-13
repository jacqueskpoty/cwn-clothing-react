import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {UpdateCollectionsDataStart} from '../../Redux/Collection/Collection.Action';
import {connect} from 'react-redux';
import CollectionOvervewContainer from '../../Components/CollectionOverview/CollectionOverview.Container';
import CollectionPageContainer from '../CollectionPage/CollectionPage.Container'; 

const Shop = ({UpdateCollectionsDataStart,match}) => { 

    useEffect(()=>{
        UpdateCollectionsDataStart();
    },[UpdateCollectionsDataStart])
  
    return(
        <div className='shop-page'> 
            <Route exact path={`${match.path}`}   component={CollectionOvervewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
    );
    
}     

const mapDispatchToProps = dispatch => ({
    UpdateCollectionsDataStart: () => 
    dispatch(UpdateCollectionsDataStart())
});

export default connect(null,mapDispatchToProps)(Shop)