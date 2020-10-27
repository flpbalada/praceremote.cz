import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyANsmggh42MlevmJJqvhpsEQR3YhBPrFk4",
  authDomain: "praceremote.firebaseapp.com",
  databaseURL: "https://praceremote.firebaseio.com",
  projectId: "praceremote",
  storageBucket: "praceremote.appspot.com",
  messagingSenderId: "464082208675",
  appId: "1:464082208675:web:fec53f0ee5aa8ca8fcfc16",
  measurementId: "G-8P93XDNHRV"
};

if (!firebase.app.length) {
   firebase.initializeApp(config);
}


const D = firebase.firestore()
const storage = firebase.storage() //if use storage

export { storage, db }