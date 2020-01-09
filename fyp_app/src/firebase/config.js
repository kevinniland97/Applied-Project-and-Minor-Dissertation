import firebase from 'firebase/app';
import 'firebase/storage';

const fs = require('fs')

var configData;

fs.readFile('C:/firebaseConfig.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    configData = data;

    // console.log(test);
})

var firebaseConfig = {
  configData
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
  firebase, storage as default
};