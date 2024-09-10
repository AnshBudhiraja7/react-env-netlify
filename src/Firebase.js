import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/database"

const firebaseConfig = {
  apiKey: "AIzaSyC0biEQxH-SFWsyCBI9pRn-anulF9-OBww",
  authDomain: "news-569b3.firebaseapp.com",
  databaseURL: "https://news-569b3-default-rtdb.firebaseio.com",
  projectId: "news-569b3",
  storageBucket: "news-569b3.appspot.com",
  messagingSenderId: "130863063781",
  appId: "1:130863063781:web:ebae445ad125fbdb33aa0c"
  };
const fire=firebase.initializeApp(firebaseConfig);
export default fire.database().ref()