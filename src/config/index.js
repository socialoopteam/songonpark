import * as firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAt40CSPrmObYK1DNoRwB4OwyvC2CLYgHo",
  authDomain: "songonpark.firebaseapp.com",
  databaseURL: "https://songonpark.firebaseio.com",
  projectId: "songonpark",
  storageBucket: "songonpark.appspot.com",
  messagingSenderId: "231812887387",
  appId: "1:231812887387:web:d46a914de5237a9076607e",
  measurementId: "G-QQ9CGCD6FB",
};
firebase.initializeApp(config);
export default firebase;
