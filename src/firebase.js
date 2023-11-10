// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getFireStore } from "firebase/firestore"

import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAh_jHfl9MOUHMvpjVjdJudJRB_dHvNEv0",
    authDomain: "prakash-portfolio-5eb0b.firebaseapp.com",
    projectId: "prakash-portfolio-5eb0b",
    storageBucket: "prakash-portfolio-5eb0b.appspot.com",
    messagingSenderId: "295959438080",
    appId: "1:295959438080:web:935380c6ab3f4fc48389e5",
    measurementId: "G-0QN6WRH6W1"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
const analytics = getAnalytics(app);
