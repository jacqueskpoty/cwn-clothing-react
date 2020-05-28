import React, {useEffect,lazy, Suspense} from 'react';
import {Route} from 'react-router-dom';
import {UpdateCollectionsDataStart} from '../../Redux/Collection/Collection.Action';
import {connect} from 'react-redux';
import Spinner from '../../Components/Spinner/Spinner.component';

const CollectionOvervewContainer = lazy(() => import('../../Components/CollectionOverview/CollectionOverview.Container'));
const CollectionPageContainer = lazy(() => import('../CollectionPage/CollectionPage.Container'));

const Shop = ({UpdateCollectionsDataStart,match}) => { 

    useEffect(()=>{
        UpdateCollectionsDataStart();
    },[UpdateCollectionsDataStart])
  
    return(
        <div className='shop-page'> 
            <Suspense fallback={<Spinner />}>
                <Route exact path={`${match.path}`}   component={CollectionOvervewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </Suspense>
        </div>
    );
    
}     

const mapDispatchToProps = dispatch => ({
    UpdateCollectionsDataStart: () => 
    dispatch(UpdateCollectionsDataStart())
});

export default connect(null,mapDispatchToProps)(Shop)