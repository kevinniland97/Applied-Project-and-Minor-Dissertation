import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyDg1wKW2uDW8_vn08Uy8uUihQNXShSwnRY",
  authDomain: "algorithms-visualizer.firebaseapp.com",
  databaseURL: "https://algorithms-visualizer.firebaseio.com",
  projectId: "algorithms-visualizer",
  storageBucket: "algorithms-visualizer.appspot.com",
  messagingSenderId: "260696357829",
  appId: "1:260696357829:web:780ed4997493b54bb2a9ac",
  measurementId: "G-71R8944ZCM"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { 
  firebase, storage as default 
};