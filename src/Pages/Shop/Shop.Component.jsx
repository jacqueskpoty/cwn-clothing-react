import React from 'react';
import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview.Component';
import {Route} from 'react-router-dom';
import {firestore,transformCollectionMap} from '../../Firebase/Firebase.Utils';
import CollectionPage from '../CollectionPage/CollectionPage.Component';
import {UpdateCollectionsData} from '../../Redux/Collection/Collection.Action';
import {connect} from 'react-redux';
import WithSpinner from '../../Components/WithSpinner/WithSpinner.Component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component{ 

    unsuscribeCollectionSnapshot = null;

    state = {
        loading: true
    }

    componentDidMount(){
        const collectionRef = firestore.collection('collections');
        const {UpdateCollectionsData} = this.props;
        
        this.unsuscribeCollectionSnapshot = collectionRef.get().then(
            async snapshot =>{
                const collections = transformCollectionMap(snapshot);
                
                UpdateCollectionsData(collections);
                this.setState({loading:false});
            }
        );

        // fetch('https://firestore.googleapis.com/v1/projects/crwn-db/databases/(default)/documents/collections')
        //     .then(response => response.json())
        //     .then(data => console.log(data));
    }

    render(){
        const {match} = this.props;
        const {loading} = this.state;
        return(
            <div className='shop-page'> 
                <Route exact path={`${match.path}`}   render={ (props) => <CollectionOverviewWithSpinner isLoading={loading}  {...props}  /> } />
                <Route path={`${match.path}/:collectionId`} render={ (props) => <CollectionPageSpinner isLoading={loading} {...props} /> } />
            </div>
        );
    }
}     

const mapDispatchToProps = dispatch => ({
    UpdateCollectionsData: collections => 
    dispatch(UpdateCollectionsData(collections))
})
export default connect(null,mapDispatchToProps)(Shop)