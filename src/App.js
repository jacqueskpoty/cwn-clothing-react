import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage.Component';
import Shop from './Pages/Shop/Shop.Component';
import Header from './Components/Header/Header.Component';
import SignInSignUp from './Pages/SignInSignUp/SignInSignUp.Component'
import { auth } from './Firebase/Firebase.Utils';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      currentUser:''
    }
  }

  unsuscribeFromAuth = null;

  componentDidMount(){
    this.unsuscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser : user});
      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} /> 
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}
  

export default App;
