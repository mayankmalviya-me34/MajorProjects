// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyA4D5ud_gQ4rxWg3GNIAl4AZxJ33HARzNE",
  authDomain: "studenttalent-11185.firebaseapp.com",
  projectId: "studenttalent-11185",
  storageBucket: "studenttalent-11185.appspot.com",
  messagingSenderId: "923789757746",
  appId: "1:923789757746:web:1bc998e0eb1b57708b5b2b",
  measurementId: "G-NQ4RKGHCC4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;
export const auth = firebase.auth();
