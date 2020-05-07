import React from 'react';
import {Route} from 'react-router-dom';
import {UpdateCollectionsData} from '../../Redux/Collection/Collection.Action';
import {connect} from 'react-redux';
import CollectionOvervewContainer from '../../Components/CollectionOverview/CollectionOverview.Container';
import CollectionPageContainer from '../CollectionPage/CollectionPage.Container'; 

class Shop extends React.Component{ 

    componentDidMount(){
        const {UpdateCollectionsData} = this.props;
        UpdateCollectionsData(); 
    }

    render(){
        const {match} = this.props;
        return(
            <div className='shop-page'> 
                <Route exact path={`${match.path}`}   component={CollectionOvervewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        );
    }
}     

const mapDispatchToProps = dispatch => ({
    UpdateCollectionsData: collections => 
    dispatch(UpdateCollectionsData(collections))
});

export default connect(null,mapDispatchToProps)(Shop)