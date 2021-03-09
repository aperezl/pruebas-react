import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxi4IFS5-uAV9HAQQ5gHQeuhze4TON8q8",
  authDomain: "pruebas-react-a175a.firebaseapp.com",
  projectId: "pruebas-react-a175a",
  storageBucket: "pruebas-react-a175a.appspot.com",
  messagingSenderId: "677921284020",
  appId: "1:677921284020:web:d7b632aa0e20d60b345ce1",
  measurementId: "G-79XZDZFC9G",
};
// Initialize Firebase
const fireApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();
const Auth = fireApp.auth();

export { Auth };
