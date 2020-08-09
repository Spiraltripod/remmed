
const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/firestore')
require('firebase/storage')
 
const firebaseConfig = {
    apiKey: "AIzaSyCZyzflnuQOjo1Fhgca7Yja5C8R_iohF8U",
    authDomain: "remmed-b34b2.firebaseapp.com",
    databaseURL: "https://remmed-b34b2.firebaseio.com",
    projectId: "remmed-b34b2",
    storageBucket: "remmed-b34b2.appspot.com",
    messagingSenderId: "466692728673",
    appId: "1:466692728673:web:61d87ab8a92f0b5ee70720"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
const db =  firebase.firestore()
const auth =  firebase.auth()
const storage =  firebase.storage()
 
export {
    firebase,
    db,
    auth,
    storage
}