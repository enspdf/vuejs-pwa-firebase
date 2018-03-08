import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyDiGhwLzI-YpDqAHFB_DB3x111jK2N-LjM",
    authDomain: "fir-global-a3068.firebaseapp.com",
    databaseURL: "https://fir-global-a3068.firebaseio.com",
    projectId: "fir-global-a3068",
    storageBucket: "fir-global-a3068.appspot.com",
    messagingSenderId: "273497438908"
});

export default firebase;