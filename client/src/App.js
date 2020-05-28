import React, {useEffect,lazy,Suspense} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './Components/Header/Header.Component';
import Spinner from './Components/Spinner/Spinner.component';
import ErrorBondary from './Components/errorBondary/errorBondary.Component';

import { connect } from 'react-redux';
import { currentUserSelector } from './Redux/User/User.Selector';
import { createStructuredSelector } from 'reselect';

import {GlobalStyle} from './global.style';

import { checkUserSession } from './Redux/User/User.Action';

const HomePage = lazy(() => import('./Pages/HomePage/HomePage.Component'))
const Shop = lazy(() => import('./Pages/Shop/Shop.Component'));
const SignInSignUp = lazy(() => import('./Pages/SignInSignUp/SignInSignUp.Component'));
const CheckoutPage = lazy(() => import('./Pages/CheckoutPage/CheckoutPage.Component'));

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
        <GlobalStyle/>
        <Header />
        <Switch>
          <ErrorBondary>
            <Suspense fallback={<Spinner/>}>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={Shop} />
              <Route exact path="/signin" render={()=> currentUser? (<Redirect to="/" />) : (<SignInSignUp />)} />
              <Route exact path="/checkout" component={CheckoutPage} />
            </Suspense>
          </ErrorBondary>
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
