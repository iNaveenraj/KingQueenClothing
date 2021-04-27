import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const Config = {
  apiKey: "AIzaSyBGKzUMKDPRs0Q04uAyvB8lEpefakMMxwg",
  authDomain: "kingqueendb-7a95a.firebaseapp.com",
  projectId: "kingqueendb-7a95a",
  storageBucket: "kingqueendb-7a95a.appspot.com",
  messagingSenderId: "940025719947",
  appId: "1:940025719947:web:3d772e9e79ca3ec66cb88e",
  measurementId: "G-PWGPEHHR03"
};

  export const CreateUserProfileDocument = async (userAuth, additonalDate) =>{
    if(!userAuth) return;

    console.log(userAuth.uid);
    var userRef =  firestore.doc(`users/${userAuth.uid }`);
    var shapshot = await userRef.get();
    console.log(userAuth.uid);

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

