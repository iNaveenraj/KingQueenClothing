import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Route, Switch} from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth, CreateUserProfileDocument} from './firebase/firebase.utils';   
class App extends React.Component{
  constructor(){
    super();
    this.state={
      Currentuser : null
    };
  }
  
  unSubscirbeUser = null;
  
  componentDidMount(){
     this.unSubscirbeUser = auth.onAuthStateChanged(async user=>{         // -> this is method always listen to publisher and trigger when there is change in the sign in state 
        //console.log(user);              // --> user object holds complete information about the current user signed in
        CreateUserProfileDocument(user);
       // this.setState({Currentuser:user})
    });
  }

  componentWillUnmount(){
    this.unSubscirbeUser();   // --> Not understood .... as per video used to close listener..
  }

  

  render(){
    return (
      <div className="App">
      <Header CurrentUser = {this.state.Currentuser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path ="/shop" component={ShopPage}></Route> 
          <Route path="/SignIn" component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    );
  }

}

  

export default App;
