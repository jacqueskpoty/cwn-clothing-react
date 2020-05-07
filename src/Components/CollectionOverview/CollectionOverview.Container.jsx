import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { isFectchingSelector } from '../../Redux/Collection/Collection.Selector';
import WithSpinner from "../WithSpinner/WithSpinner.Component";
import { compose } from 'redux';
import CollectionOverview from './CollectionOverview.Component';


const mapStateToProps = createStructuredSelector({
    isLoading: isFectchingSelector
});

const CollectionOvervewContainer = compose(connect(mapStateToProps),WithSpinner)(CollectionOverview);
    

export default CollectionOvervewContainer;
