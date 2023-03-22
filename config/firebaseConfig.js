import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyD_XkEufIgFj0I0tzWwd_JnACBgVHtjw9M',
  authDomain: 'tea-collector.firebaseapp.com',
  databaseURL: 'https://tea-collector.firebaseio.com',
  projectId: 'tea-collector',
  storageBucket: 'tea-collector.appspot.com',
  appId: '1:1084416621135:android:625a150e3cff392d09c83a',
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig); 
}
export { firebase };
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
