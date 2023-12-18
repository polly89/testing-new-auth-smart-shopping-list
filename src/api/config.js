import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd5raoznMhpJOVajXk9c0sIKDDEUapsTA",
  authDomain: "auth-smart-shopping-list.firebaseapp.com",
  projectId: "auth-smart-shopping-list",
  storageBucket: "auth-smart-shopping-list.appspot.com",
  messagingSenderId: "1068330550462",
  appId: "1:1068330550462:web:952edcc20cd6a8fd034aef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
