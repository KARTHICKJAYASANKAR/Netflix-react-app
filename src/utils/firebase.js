// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD43ri9V4_A_hkmHdj3TR7DcWy5QzQ-jaY",
  authDomain: "netflix-b1e41.firebaseapp.com",
  projectId: "netflix-b1e41",
  storageBucket: "netflix-b1e41.appspot.com",
  messagingSenderId: "438326747924",
  appId: "1:438326747924:web:d0e373457999779cd4d801",
  measurementId: "G-85F82RP0BK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();




// "hosting": {
//     "public": "build",
//     "ignore": [
//       "firebase.json",
//       "**/.*",
//       "**/node_modules/**"
//     ]
//   }