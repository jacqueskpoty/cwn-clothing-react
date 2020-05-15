import CollectionPage from './CollectionPage.Component';
import {isFectchingSuccessSelector} from '../../Redux/Collection/Collection.Selector';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import WithSpinner from '../../Components/WithSpinner/WithSpinner.Component';

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !isFectchingSuccessSelector(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;