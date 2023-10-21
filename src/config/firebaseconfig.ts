// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO3bSDCQQvviBElfHNzFDYVWgx9Y3z0zA",
  authDomain: "blood-donor-app-c7bc1.firebaseapp.com",
  projectId: "blood-donor-app-c7bc1",
  storageBucket: "blood-donor-app-c7bc1.appspot.com",
  messagingSenderId: "263625971320",
  appId: "1:263625971320:web:cdb2215da94d1e1964ff8d",
  measurementId: "G-F0WB1YMHBE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);