import React from 'react';
import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview.Component';
import {Route} from 'react-router-dom';
import CollectionPage from '../CollectionPage/CollectionPage.Component';


const Shop = ({match}) => (
            <div className='shop-page'> 
                <Route exact path={`${match.path}`}   component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
      
export default Shop