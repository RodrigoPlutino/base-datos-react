import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCV90o4JriFrTLbs9jXgB-oD0_plvYvqcQ",
    authDomain: "appreactv3.firebaseapp.com",
    projectId: "appreactv3",
    storageBucket: "appreactv3.appspot.com",
    messagingSenderId: "545049067332",
    appId: "1:545049067332:web:a6f3f364424ad2e628e111"
})

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}

