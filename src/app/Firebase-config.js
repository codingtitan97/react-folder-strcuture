// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyBPvM2AbgMulov1qEoRMxPHxVzS32i-4B4",
    authDomain: "ui-design-b0df1.firebaseapp.com",
    projectId: "ui-design-b0df1",
    storageBucket: "ui-design-b0df1.appspot.com",
    messagingSenderId: "839512656077",
    appId: "1:839512656077:web:e194716036ce3ed1198184",
    measurementId: "G-385J4RLNSC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const database = getDatabase(app);
export { auth };
