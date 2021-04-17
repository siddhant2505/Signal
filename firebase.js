import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBjOiYGkbzhn5eace0JTlpp6y2pLe-YJ9k",
    authDomain: "signal1-ae217.firebaseapp.com",
    projectId: "signal1-ae217",
    storageBucket: "signal1-ae217.appspot.com",
    messagingSenderId: "413794837056",
    appId: "1:413794837056:web:28ef8b0c0c6ba0d186b5a5"
  };
let app;
if (firebase.apps.length===0){
    app=firebase.initializeApp(firebaseConfig)
} else{
    app=firebase.app();

}

const db=app.firestore();
const auth=firebase.auth();

export {db, auth};
