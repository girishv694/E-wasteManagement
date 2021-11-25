import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
   
    apiKey: "AIzaSyDeqxm0TANQkrKbtFLMsBa5SfEgmfpW12Y",
    authDomain: "scavenger-c8660.firebaseapp.com",
    projectId: "scavenger-c8660",
    storageBucket: "scavenger-c8660.appspot.com",
    messagingSenderId: "504895698100",
    appId: "1:504895698100:web:f5c8e7a600775e8f6e93e1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase