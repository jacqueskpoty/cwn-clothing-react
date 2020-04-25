import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage.Component';
import Shop from './Pages/Shop/Shop.Component';
import Header from './Components/Header/Header.Component';
import SignInSignUp from './Pages/SignInSignUp/SignInSignUp.Component'
import { auth, createUserProfileDocument} from './Firebase/Firebase.Utils';
import { setCurrentUser } from './Redux/User/UserAction';
import { connect } from 'react-redux';

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
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}
  
const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
