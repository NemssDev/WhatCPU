// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "realtime-chatbot-d676a.firebaseapp.com",
    projectId: "realtime-chatbot-d676a",
    storageBucket: "realtime-chatbot-d676a.appspot.com",
    messagingSenderId: "846776321058",
    appId: "1:846776321058:web:a38b15b6d4c6741573b67b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()