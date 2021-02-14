import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmAibywdQjsw9XEEt1pCwZ5WS0L_83Nkw",
    authDomain: "favor-ly.firebaseapp.com",
    projectId: "favor-ly",
    storageBucket: "favor-ly.appspot.com",
    messagingSenderId: "762603545894",
    appId: "1:762603545894:web:0ff5b51950163c56ca8de7",
    measurementId: "G-H7YFXWN2B9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const firestore = firebase.firestore()

export { auth, firestore };
export default db;