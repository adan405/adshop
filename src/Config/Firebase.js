
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDKnhAfJk6Iv69XSyQ1h3XrvUwdJQcTdyA",
  authDomain: "adshop-37393.firebaseapp.com",
  projectId: "adshop-37393",
  storageBucket: "adshop-37393.appspot.com",
  messagingSenderId: "1003526101495",
  appId: "1:1003526101495:web:f09db376461879e3e536f2",
  measurementId: "G-7H6Y41GSMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getAuth(app)
// const database = ()

export {app,auth,database};