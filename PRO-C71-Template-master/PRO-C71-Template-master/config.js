import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyD84yOgAEdFl92re0u79PRnd1GUr775yzQ",
  authDomain: "e-ride-a4b8c.firebaseapp.com",
  projectId: "e-ride-a4b8c",
  storageBucket: "e-ride-a4b8c.appspot.com",
  messagingSenderId: "878042908577",
  appId: "1:878042908577:web:2fb9a8317a43e8e2bcade0"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
