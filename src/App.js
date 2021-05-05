import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Route, Switch} from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth, CreateUserProfileDocument} from './firebase/firebase.utils';   
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user-action';
class App extends React.Component{
  
  unSubscirbeUser = null;
  
  componentDidMount(){
    
    const {setCurrentUser} = this.props
     this.unSubscirbeUser = auth.onAuthStateChanged(async userAuth=>{         // -> this is method always listen to publisher and trigger when there is change in the sign in state 
        //console.log(user);              // --> user object holds complete information about the current user signed in
        if(userAuth){
        
          var userRef = await CreateUserProfileDocument(userAuth);
          userRef.onSnapshot((snapshot) =>{
           console.log(this.props.setCurrentuser);
           setCurrentUser({
            id : snapshot.id,
            ...snapshot.data() 
        });
           
          });
        }else{
          setCurrentUser({CurrentUser: null});
        }
      
       // this.setState({Currentuser:user})
    });
  }

  componentWillUnmount(){
    this.unSubscirbeUser();   // --> Not understood .... as per video used to close listener..
  }

  render(){
    return (
      <div className="App">
      <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path ="/shop" component={ShopPage}></Route> 
          <Route path="/SignIn" component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    );
  }

}

const mapDispatchToProps  = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});
  

export default connect(null, mapDispatchToProps)(App);
