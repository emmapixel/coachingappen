import { registerRootComponent } from 'expo';

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

import App from './App';

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyDOLENtnVp58X2vyKvqLKctrS6C2h7VWSQ',
    authDomain: 'coachemma-database.firebaseapp.com',
    databaseURL: 'https://coachemma-database-default-rtdb.europe-west1.firebasedatabase.app/',
    projectId: 'coachemma-database',
    storageBucket: 'coachemma-database.appspot.com',
    messagingSenderId: '1042512535318',
    appId: '1:1042512535318:android:d6f8d4745612f8da7c3a37',
  };
  
  const app = initializeApp(firebaseConfig);
  // For more information on how to access Firebase in your project,
  // see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
  
  function writeUserData(name, email) {
    const db = getDatabase();
    const reference = ref(db, 'Users/');
  
   push(reference, {
     name: name,
     email: email,
   });
  }
  
  //writeUserData("Klient4", "klient4@gmail.com");
  //writeUserData("Klient5", "klient5@gmail.com");

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";


