import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAwD6a3pvkV5SJwh8hRmg-_gBPt6T9TCyQ",
  authDomain: "cart-5c94b.firebaseapp.com",
  databaseURL: "https://cart-5c94b.firebaseio.com",
  projectId: "cart-5c94b",
  storageBucket: "cart-5c94b.appspot.com",
  messagingSenderId: "352575714021",
  appId: "1:352575714021:web:9912ff47458d6328f0da0c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
