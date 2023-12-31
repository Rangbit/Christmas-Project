import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCoWzWqKCvCa_H1Jre-oejlvtfTMu4q3ug",
    authDomain: "my-xmastree.firebaseapp.com",
    projectId: "my-xmastree",
    storageBucket: "my-xmastree.appspot.com",
    messagingSenderId: "448364247311",
    appId: "1:448364247311:web:d0f7937c1c65869d79e67a"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);