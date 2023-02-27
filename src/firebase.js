// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGiAVFeWoh-z_ZTqL5pAlXl9IXq4MlOTg",
  authDomain: "todo-app-357d3.firebaseapp.com",
  projectId: "todo-app-357d3",
  storageBucket: "todo-app-357d3.appspot.com",
  messagingSenderId: "956381659627",
  appId: "1:956381659627:web:2e86e4f14256dfaa25d9ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);