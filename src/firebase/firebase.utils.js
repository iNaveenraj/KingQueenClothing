import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const Config = {
    apiKey: "AIzaSyAgfRwl67ihCdCQAdeercrXlP0_W8BnESQ",
    authDomain: "crwn-db-7bacc.firebaseapp.com",
    projectId: "crwn-db-7bacc",
    storageBucket: "crwn-db-7bacc.appspot.com",
    messagingSenderId: "565029152393",
    appId: "1:565029152393:web:be3e8c2c00b50851484858",
    measurementId: "G-LB9SR0V8DY"
  };

  export const CreateUserProfileDocument = async (userAuth, additonalDate) =>{
    if(!userAuth) return;

    console.log(userAuth.uid);
    var userRef =  firestore.doc(`users/${userAuth.uid }`);
    var shapshot = await userRef.get();
    if(!shapshot.exists){
      const {displayName, email} = userAuth;
      const createdAt= new Date();
      try{
        await userRef.set({displayName, email, createdAt, ...additonalDate})
      }catch(Error){
        console.log('Error while creating User : ' + Error.message)
      }
    }
    return userRef;
  }

  firebase.initializeApp(Config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  

  const provider = new  firebase.auth.GoogleAuthProvider(); 
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

