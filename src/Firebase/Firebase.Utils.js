import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyDiuP5b4-1NdMb40x1SxMw2Dq_18wsr6fY",
        authDomain: "crwn-db-cebc8.firebaseapp.com",
        databaseURL: "https://crwn-db-cebc8.firebaseio.com",
        projectId: "crwn-db-cebc8",
        storageBucket: "crwn-db-cebc8.appspot.com",
        messagingSenderId: "1091996503829",
        appId: "1:1091996503829:web:fb6bc5f5a24edca17e631c",
        measurementId: "G-GSPZE03FHT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt:'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;