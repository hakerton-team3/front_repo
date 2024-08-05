// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyDrIGA7UqyeGEiSKubfKZYqAs8tTKQK4W4",
  authDomain: "fourj-34a16.firebaseapp.com",
  projectId: "fourj-34a16",
  storageBucket: "fourj-34a16.appspot.com",
  messagingSenderId: "450443974300",
  appId: "1:450443974300:web:e1f0525761fb55be61ff59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, onMessage, getToken };
