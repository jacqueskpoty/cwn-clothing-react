import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage.Component';
import Shop from './Pages/Shop/Shop.Component';
import Header from './Components/Header/Header.Component';
import SignInSignUp from './Pages/SignInSignUp/SignInSignUp.Component'
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage.Component';

import { auth, createUserProfileDocument} from './Firebase/Firebase.Utils';
import { setCurrentUser } from './Redux/User/User.Action';
import { connect } from 'react-redux';
import { currentUserSelector } from './Redux/User/User.Selector';
import { createStructuredSelector } from 'reselect';

class App extends React.Component{

  unsuscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;
 
    this.unsuscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
          setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data()
            }
          )
        });
      }
      setCurrentUser(userAuth);

      /**addCollectionsAndDocuments('collections', collectionItems.map(({title, items}) => ({title, items})));**/
  });
}

  componentWillUnmount(){
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} /> 
          <Route path="/shop" component={Shop} />
          <Route exact path="/signin" render={()=> this.props.currentUser? (<Redirect to="/" />) : (<SignInSignUp />)} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
    currentUser: currentUserSelector
})
  
const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
