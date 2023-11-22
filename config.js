// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAWV90m4F-pssG18-Li8yF8HG04nkUQniQ",
  authDomain: "ecommerce-b01f8.firebaseapp.com",
  projectId: "ecommerce-b01f8",
  storageBucket: "ecommerce-b01f8.appspot.com",
  messagingSenderId: "1047695300100",
  appId: "1:1047695300100:web:cf74e2e583e36ee91ac751",
  measurementId: "G-5QWGQHVH5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();