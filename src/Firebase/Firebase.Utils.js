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

export const createUserProfileDocument = async (userAuth, additionalData) => {

        if(!userAuth) return;
        
        const userRef = firestore.doc(`/users/${userAuth.uid}`);
        const snapShot = await userRef.get();
        if(!snapShot.exists){                
                const {displayName, email} = userAuth;

                const createdAt = new Date();
                
                try {
                        await userRef.set({
                              displayName,
                              email,
                              createdAt,
                              ...additionalData  
                        })
                } catch (error) {
                        console.log("Error creating user", error.message);
                }
        }
        return userRef;
}

//Initializing the configuration of forebase
firebase.initializeApp(config);

//exporting the auth object that holds the sign in data
export const auth = firebase.auth();

//exporting the firestore service to help store and retrieve data from the database
export const firestore = firebase.firestore();

//Calling google sign in pop up
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt:'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//add collection to firestore
export const addCollectionsAndDocuments = async(collectionKey, collectionToAdd) => {
        const collectionRef = firestore.collection(collectionKey);

        const batch = firestore.batch();
        
        collectionToAdd.forEach(obj => {
            const documentRef = collectionRef.doc();
            batch.set(documentRef,obj);               
        })
        return await batch.commit();
}

//transform collections fetched from database
export const transformCollectionMap = (collections) =>{
        const collectionMap =  collections.docs.map( ({title,items}) => {
               const {title,items} = doc.data;
 
               return{
                 routeName: encodeURI(title.toLowerCase()),
                 id: doc.id,
                 title,
                 items
               }  
         });
 
         return collectionMap.reduce((accumulator,collection) => {
                 accumulator[collection.title.toLowerCase()] = collection;
                 return accumulator;
         },{});
 }

export default firebase;