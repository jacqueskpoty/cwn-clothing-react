import React from 'react';
import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview.Component';
import {Route} from 'react-router-dom';
import {firestore,transformCollectionMap} from '../../Firebase/Firebase.Utils';
import CollectionPage from '../CollectionPage/CollectionPage.Component';
import {UpdateShopData} from '../../Redux/Collection/Collection.Action';
import {connect} from 'react-redux';

class Shop extends React.Component{ 

    unsuscribeCollectionSnapshot = null;

    componentDidMount(){
        const collectionRef = firestore.collection('collections');
        const {UpdateShopData} = this.props;
        
        this.unsuscribeCollectionSnapshot = collectionRef.onSnapshot(async snapshot =>{
            const collections = transformCollectionMap(snapshot);
            UpdateShopData(collections);
        });
    }

    render(){
        const {match} = this.props;
        return(
            <div className='shop-page'> 
                <Route exact path={`${match.path}`}   component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        );
    }
}     

const mapDispatchToProps = dispatch => ({
    UpdateShopData: collection => dispatch(UpdateShopData(collection))
})
export default connect(null,mapDispatchToProps)(Shop)