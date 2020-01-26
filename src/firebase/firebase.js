import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDXnUPtX78R67FPAY7IumH5h9-7zDGmidc",
    authDomain: "algorithms-visualiser-react.firebaseapp.com",
    databaseURL: "https://algorithms-visualiser-react.firebaseio.com",
    projectId: "algorithms-visualiser-react",
    storageBucket: "algorithms-visualiser-react.appspot.com",
    messagingSenderId: "964421066407",
    appId: "1:964421066407:web:56b1163309b739edfa0582",
    measurementId: "G-VQGKR2XPMS"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;