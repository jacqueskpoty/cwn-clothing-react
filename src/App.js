import React, {useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage.Component';
import Shop from './Pages/Shop/Shop.Component';
import Header from './Components/Header/Header.Component';
import SignInSignUp from './Pages/SignInSignUp/SignInSignUp.Component'
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage.Component';

import { connect } from 'react-redux';
import { currentUserSelector } from './Redux/User/User.Selector';
import { createStructuredSelector } from 'reselect';

import { checkUserSession } from './Redux/User/User.Action';

const App = ({checkUserSession,currentUser}) =>{

  useEffect(()=>{

    checkUserSession();

  },[checkUserSession]);
    
  //const {setCurrentUser} = this.props;
  //   this.unsuscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {      
  //     if(userAuth){
  //       const userRef = await createUserProfileDocument(userAuth);
  //       userRef.onSnapshot(snapShot =>{
  //         setCurrentUser(
  //           {
  //             id: snapShot.id,
  //             ...snapShot.data()
  //           }
  //         )
  //       });
  //     }
  //     setCurrentUser(userAuth);
  //     /**addCollectionsAndDocuments('collections', collectionItems.map(({title, items}) => ({title, items})));**/
  // });


    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} /> 
          <Route path="/shop" component={Shop} />
          <Route exact path="/signin" render={()=> currentUser? (<Redirect to="/" />) : (<SignInSignUp />)} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  
}

const mapStateToProps = createStructuredSelector({
    currentUser: currentUserSelector
})

const mapDispatchTopros = dispatch =>({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchTopros)(App);
